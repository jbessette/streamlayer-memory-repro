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