# StreamLayer Memory Reproduction

A small sample to reproduce memory growth and eventual map crash when using StreamLayers in 4.29.

### Steps to reproduce
- Load page in Chrome or Edge (Firefox does not exhibit the same behavior)
- Open the browser task manager from the tab bar
- Monitor memory usage of the app tab, it will grow continuously to ~16GB, at which point the map will crash

### System Stats
- Windows 11
- 32GB RAM
- Intel integrated GPU and nVidia RTX 2080 (Tested with both, same results)
- Chrome / Edge 123

### Screenshots
While the app is running, the memory usage of the tab grows over time. In my testing it takes several hours to reach thex 16GB max.

![Screenshot 2024-04-08 125441](https://github.com/jbessette/streamlayer-memory-repro/assets/10093901/1321c8a1-d4c2-4b54-9f21-0643a71e6085)

16GB has been reached and the map crashes.

![Screenshot 2024-04-08 130226](https://github.com/jbessette/streamlayer-memory-repro/assets/10093901/eb7b3844-0d91-4b0b-808b-95fa67b2e3ee)
