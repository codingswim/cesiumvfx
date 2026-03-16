import React, { useEffect } from "react";
import { FloatButton } from "antd";
import SnowEffect from "../classes/snow";
import * as Cesium from "cesium";

// 下雪
const Snow = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new SnowEffect(viewer, {
      snowSize: 0.02, // 雪花大小
      snowSpeed: 60.0, // 雪速
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div id="cesiumContainer" style={{ height: "100%" }}>
      <FloatButton
        type="primary"
        style={{ right: 24 }}
        description="开始"
        onClick={() => instance.show(true)}
      />
      <FloatButton
        type="default"
        style={{ right: 94 }}
        description="清除"
        onClick={() => instance.show(false)}
      />
    </div>
  );
};

export default Snow;
