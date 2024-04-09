import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import StreamLayer from "@arcgis/core/layers/StreamLayer"

import "./style.css";

// Create a client-side stream layer by setting its
// required properties and additional desired properties
const layer = new StreamLayer({
    // field schemas in the fields array should match the
    // feature attributes that will stream to the layer.
    // set the objectIdField and trackIdField in the fields
    fields: [
        {
            name: "OBJECTID",
            alias: "OBJECTID",
            type: "oid",
        },
        {
            name: "TRACKID",
            alias: "TrackId",
            type: "long",
        },
        {
            name: "STATUS",
            alias: "STATUS",
            type: "string",
        },
    ],
    // trackIdField is required and the field schema must exist
    // in the fields array
    timeInfo: {
        trackIdField: "TRACKID",
    },
    purgeOptions: {
      maxObservations: 1
    },
    updateInterval: 100,
    geometryType: "polygon", // required property
    spatialReference: {
        wkid: 102100,
    },
    popupTemplate: {
        title: "Status: {STATUS}",
        content: "trackId: {TRACKID}, objectId: {OBJECTID}",
    },
    labelingInfo: [
        {
            symbol: {
                type: "text",
                color: "black",
            },
            labelPlacement: "always-horizontal",
            labelExpressionInfo: {
                expression: "$feature.STATUS",
            },
        },
    ],
    // set unique value renderer based on the status field
    renderer: {
        type: "unique-value",
        field: "STATUS",
        uniqueValueInfos: [
            {
                value: "blocked",
                symbol: {
                    type: "simple-fill",
                    color: [233, 116, 81, 0.5],
                    outline: {
                        width: 1,
                        color: "white",
                    },
                },
            },
            {
                value: "open",
                symbol: {
                    type: "simple-fill",
                    color: [34, 139, 34, 0.5],
                    outline: {
                        width: 1,
                        color: "white",
                    },
                },
            },
            {
                value: "unknown",
                symbol: {
                    type: "simple-fill",
                    color: [255, 191, 0, 0.5],
                    outline: {
                        width: 1,
                        color: "white",
                    },
                },
            },
        ],
    },
});

const map = new Map({
  basemap: "gray-vector",
  layers: [ layer ]
});

const view = new MapView({
  container: "viewDiv",
  map,
  zoom: 15,
  center: [-118.4, 34.0573]
});


view.when().then(() => {
  const status = ["blocked", "unknown", "open"];


  let objectIdCounter = 0;
  // call sendMessageToClient method every 1 second
  // to stream new features with different attributes
  setInterval(() => {
    // start streaming features to the stream layer
    // update the status attribute values
    // you must stream new features with different attributes
    layer.sendMessageToClient({
      type: "features",
      features: [
        {
          attributes: {
            TRACKID: 1,
            OBJECTID: objectIdCounter++,
            STATUS: status[Math.floor(Math.random()*status.length)],
          },
          geometry: {
            rings: [[
            [-13180792.01151011, 4037145.9303959487],
            [-13180509.058277348, 4037145.9303959487],
            [-13180509.058277348, 4036824.2921144445],
            [-13180792.01151011, 4036824.2921144445],
            [-13180792.01151011, 4037145.9303959487]
            ]]
          }
        },
        {
          attributes: {
            TRACKID: 2,
            OBJECTID: objectIdCounter++,
            STATUS: status[Math.floor(Math.random()*status.length)],
          },
          geometry: {
            rings: [[
              [-13180458.980453761, 4036356.2739379476],
              [-13180207.564959718, 4036356.2739379476],
              [-13180207.564959718, 4036190.056991914],
              [-13180458.980453761, 4036190.056991914],
              [-13180458.980453761, 4036356.2739379476]
            ]]
          }
        },
        {
          attributes: {
            TRACKID: 3,
            OBJECTID: objectIdCounter++,
            STATUS: status[Math.floor(Math.random()*status.length)],
          },
          geometry: {
            rings: [[
              [-13179890.918598393, 4036915.303683526],
              [-13179661.411569001, 4036915.303683526],
              [-13179661.411569001, 4036673.041598266],
              [-13179890.918598393, 4036673.041598266],
              [-13179890.918598393, 4036915.303683526]
            ]]
          }
        }
      ]
    });
  }, 250);

});
