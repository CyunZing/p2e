let cameraApis = null;
let cameraInfo = {};

export default {
  // 存储接口数据
  setCameraData(ip, port, apis) {
    cameraInfo = { ip, port };
    cameraApis = apis;
  },

  // 获取接口数据
  getCameraData() {
    return {
      ...cameraInfo,
      apis: cameraApis
    };
  },

  // 清除数据
  clearCameraData() {
    cameraApis = null;
    cameraInfo = {};
  }
}; 