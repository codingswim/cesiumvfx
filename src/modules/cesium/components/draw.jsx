import React, { useEffect } from "react";
import { FloatButton } from "antd";
import DrawEffect from "../classes/draw";
import * as Cesium from "cesium";

// 绘制
const Draw = () => {
  let instance;
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrain: Cesium.Terrain.fromWorldTerrain(), // 开启地形
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });
    instance = new DrawEffect(viewer);

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
      instance.clearAll();
    };
  }, []);

  return (
    <div id="cesiumContainer" style={{ height: "100%" }}>
      <FloatButton
        type="primary"
        style={{ right: 144 }}
        description="点"
        onClick={() => instance.activate("Point")}
      />
      <FloatButton
        type="primary"
        style={{ right: 84 }}
        description="线"
        onClick={() => instance.activate("Polyline")}
      />
      <FloatButton
        type="primary"
        style={{ right: 24 }}
        description="面"
        onClick={() => instance.activate("Polygon")}
      />
      <FloatButton
        type="default"
        style={{ right: 204 }}
        description="清除"
        onClick={() => instance.clearAll(false)}
      />
    </div>
  );
};

export default Draw;
