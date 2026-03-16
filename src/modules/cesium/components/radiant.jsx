import React, { useEffect } from "react";
import { FloatButton } from "antd";
import EadiantEffect from "../classes/radiant";
import * as Cesium from "cesium";

// 辐射圈
const Radiant = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new EadiantEffect(viewer, "cirCleWave1");
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
      instance.del("cirCleWave1");
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
        onClick={() => instance.del("cirCleWave1")}
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

export default Radiant;
