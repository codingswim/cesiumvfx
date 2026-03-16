import React, { useEffect } from "react";
import { FloatButton } from "antd";
import RainEffect from "../classes/rain";
import * as Cesium from "cesium";

// 下雨
const Rain = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new RainEffect(viewer, {
      tiltAngle: -0.2, //倾斜角度
      rainSize: 1.0, // 雨大小
      rainSpeed: 120.0, // 雨速
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

export default Rain;
