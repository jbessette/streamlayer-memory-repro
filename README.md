# StreamLayer Memory Reproduction

A small sample to reproduce memory growth and eventual map crash when using StreamLayers in 4.29. This has been reproduced on two separate PCs with similar, though not identical, hardware. The memory growth is not reproducable using 4.27 or 4.28. I have not tested versions earlier than 4.27.

### Steps to reproduce
- Clone repo
- `npm i` to install
- `npm run dev` to launch vite
- Load `http://localhost:5173` in Chrome, Edge, or Firefox (have not tested other browsers, slower to occur in Firefox)
- Open the browser task manager from the tab bar
- Monitor memory usage of the app tab, it will grow continuously to ~16GB, at which point the map will crash

### Steps to compare to earlier versions
- Stop vite if running
- `npm i @arcgis/core@4.28.0` to install 4.28
- `npm run dev` to launch vite
- Load `http://localhost:5173` in browser

### System Stats
- Windows 11
- 32GB RAM
- Intel integrated GPU and nVidia RTX 2080 (Tested with both, same results)
- Chrome / Edge version 123 (with or without extensions loaded)
- Firefox version 124

### Screenshots
While the app is running, the memory usage of the tab grows over time. In my testing it takes several hours to reach thex 16GB max.

![Screenshot 2024-04-08 125441](https://github.com/jbessette/streamlayer-memory-repro/assets/10093901/1321c8a1-d4c2-4b54-9f21-0643a71e6085)

16GB has been reached and the map crashes.

![Screenshot 2024-04-08 130226](https://github.com/jbessette/streamlayer-memory-repro/assets/10093901/eb7b3844-0d91-4b0b-808b-95fa67b2e3ee)
