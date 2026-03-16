import React, { useEffect } from "react";
import { FloatButton } from "antd";
import FogEffect from "../classes/fog";
import * as Cesium from "cesium";

// 大雾
const Fog = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new FogEffect(viewer, {
      visibility: 0.2,
      color: new Cesium.Color(0.8, 0.8, 0.8, 0.3),
    });

    return () => {
      instance.destroy();
    };
  }, []);

  const hide = () => {
    instance.show(false);
  };
  const start = () => {
    instance.show(true);
  };

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

export default Fog;
