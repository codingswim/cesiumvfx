import React, { useEffect } from "react";
import * as Cesium from "cesium";

// 模型
const ModelPage = () => {
  let viewer = null;

  useEffect(() => {
    fetch();

    return () => {
      viewer && viewer.destroy();
    }
  }, [])

  const fetch = async () => {

    viewer = new Cesium.Viewer("cesiumContainer", {
      fullscreenButton: false,
      animation: false,
      timeline: false,
    });

    const position = Cesium.Cartesian3.fromDegrees(120.50461325095137, 23.080338221114484, 1);

    // 设置模型的水平方向角度
    const heading = Cesium.Math.toRadians(10);
    const pitch = 0;
    const roll = 0;
    const orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      new Cesium.HeadingPitchRoll(heading, pitch, roll)
    );

    viewer.screenSpaceEventHandler.setInputAction((clickEvent) => {
      const cartesian = viewer.camera.pickEllipsoid(
        clickEvent.position,
        viewer.scene.globe.ellipsoid
      );
      if (cartesian) {
        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        const longitude = Cesium.Math.toDegrees(cartographic.longitude);
        const latitude = Cesium.Math.toDegrees(cartographic.latitude);
        console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    viewer.entities.add({
      position: position,
      orientation: orientation,
      model: {
        uri: '/assets/three/workshop/scene/scene.gltf',
        scale: 1.8,
        show: true,
      },
    });

    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(
        120.5054064564563,
        23.07800000000000,
        100),


      // 相机的旋转角度
      orientation: {
        heading: Cesium.Math.toRadians(-20),
        pitch: Cesium.Math.toRadians(-20),
        roll: Cesium.Math.toRadians(0),
      },
    });
  }

  return (
    <div id="cesiumContainer" style={{ height: "100%" }}></div>
  )
};

export default ModelPage;