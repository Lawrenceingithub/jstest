import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src="image-1.png" />
          <div className="rectangle" />
          <div className="text-wrapper">註冊</div>
          <div className="div">登錄</div>
          <div className="text-wrapper-2">好吃的料理</div>
        </div>
      </div>
    </div>
  );
};


export default Desktop;