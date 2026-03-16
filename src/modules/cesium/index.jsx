import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import * as Cesium from "cesium";
import "./index.less";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMmNlMmYxMC01Y2U3LTQ4ZDItOTUwMy04NDE0ODczMGVmNzEiLCJpZCI6MjAwOTIxLCJpYXQiOjE3MTAxMjc0MTl9.9nVoL-X8D6RM1ZFTpRQRELTvofQuzatv0b1Cv6DujtE";

const list = [
  {
    key: "/cesium/model",
    label: "模型",
  },
  {
    key: "/cesium/snow",
    label: "下雪",
  },
  {
    key: "/cesium/rain",
    label: "下雨",
  },
  {
    key: "/cesium/fog",
    label: "大雾",
  },
  {
    key: "/cesium/fire",
    label: "火焰",
  },
  {
    key: "/cesium/draw",
    label: "绘制",
  },
  {
    key: "/cesium/diffuse",
    label: "圆扩散",
  },
  {
    key: "/cesium/radiant",
    label: "辐射圈",
  },
];

const CesiumPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickMenu = ({ key }) => {
    navigate(key);
  };

  return (
    <div className="cesium_viewer">
      <div className="top_menu">
        <Menu onClick={handleClickMenu} selectedKeys={[location.pathname]} mode="horizontal" items={list} />
      </div>
      <div className="cesium_content">
        <Outlet />
      </div>
    </div >
  );
};

export default CesiumPage;
