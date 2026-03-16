import React, { useEffect } from "react";
import FireEffect from "../classes/fire";
import { FloatButton } from "antd";
import * as Cesium from "cesium";

// 火焰
const Fire = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new FireEffect(viewer);

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.361, 36.0885, 80),
      orientation: {
        direction: new Cesium.Cartesian3(
          0.7458181136018,
          -0.4270255968894706,
          0.5112773034515067
        ),
        up: new Cesium.Cartesian3(
          -0.19274344830978868,
          0.5963500021825172,
          0.7792410654159365
        ),
      },
      duration: 3, // 飞行时间
    });
  }, []);

  return (
    <div id="cesiumContainer" style={{ height: "100%" }}>
      <FloatButton
        type="default"
        style={{ right: 94 }}
        description="清除"
        onClick={() => instance.remove()}
      />
    </div>
  );
};

export default Fire;
