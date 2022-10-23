import React from "react";
import cls from "./indicator.module.css";

const LoaderIndicator = () => {
    return (
      <div className={cls["preloader"]}>
        <div className={cls["sk-chase"]}>
                <div className={cls["sk-chase-dot"]}></div>
                <div className={cls["sk-chase-dot"]}></div>
                <div className={cls["sk-chase-dot"]}></div>
                <div className={cls["sk-chase-dot"]}></div>
                <div className={cls["sk-chase-dot"]}></div>
                <div className={cls["sk-chase-dot"]}></div>
        </div>
      </div>
    );

    
    
        
    
        
    
};

export default LoaderIndicator;
