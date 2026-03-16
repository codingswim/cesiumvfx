import React, { useEffect } from "react";
import { FloatButton } from "antd";
import DiffuseEffect from "../classes/diffuse";
import * as Cesium from "cesium";

// 圆扩散
const Diffuse = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new DiffuseEffect(viewer, "circle");
    instance.add([120.13, 30.22, 10], "#F7EB08", 2000, 5000);

    const position = Cesium.Cartesian3.fromDegrees(120.13, 30.22, 16000);
    viewer.camera.flyTo({
      destination: position,
      duration: 3, // 设置飞行时间，单位：秒
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0),
      },
    });

    return () => {
      instance.clear();
    };
  }, []);

  const show = () => {
    instance.add([120.13, 30.22, 10], "#F7EB08", 2000, 5000);
  };

  return (
    <div id="cesiumContainer" style={{ height: "100%" }}>
      <FloatButton
        type="default"
        style={{ right: 94 }}
        description="清除"
        onClick={() => instance.clear()}
      />
      <FloatButton
        type="primary"
        style={{ right: 24 }}
        description="渲染"
        onClick={show}
      />
    </div>
  );
};

export default Diffuse;
