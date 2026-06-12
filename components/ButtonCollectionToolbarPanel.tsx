"use client";

import { redirect } from "next/dist/server/api-utils";
import React from "react";
import {KdButtonPlusIcon, KdButtonAngleRightIcon} from "@/lib/icon/icons";
export default function ButtonCollectionToolbarPanel() {
  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">
      {/* TOP SECTION */}
      <div className="shrink-0 p-3">
        {/* Text */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-(--kd-text-black) kd-font-jakarta text-[14px] leading-[100%] font-semibold capitalize tracking-[0.08em]">
              Buttons
            </span>
          </div>
          <hr className="hr-border" />
          <span className="text-(--kd-text-black) kd-font-jakarta text-[10px] font-semibold capitalize tracking-widest">Button Styles</span>
        </div>
      </div>
      {/* BOTTOM - SCROLLABLE SECTION */}
      <div className="flex-1 min-h-0 overflow-auto kd-scrollbody-pd_xy">
        <div className="grid grid-cols-2 gap-2">
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                        boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "5px",backgroundColor: "#650032",padding: "8px 2px",width:"100%", color: "#ffffff",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",}}>
                        <span>Read More</span>
                        <KdButtonPlusIcon />
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                        boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "0",backgroundColor: "#FE3E02",padding: "8px 2px",width:"100%", color: "#ffffff",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",}}>
                        <span>Read More</span>
                        <KdButtonPlusIcon/>                    
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                        boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "50px",backgroundColor: "#5802D8",padding: "8px 2px",width:"100%", color: "#ffffff",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",}}>
                        <span>Read More</span>
                        <span style={{ width: "22px",
                    height: "22px",display: "flex",
                    alignItems: "center",
                    justifyContent: "center",borderRadius: "50%",
                    backgroundColor: "transparent"}}><KdButtonPlusIcon/></span>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "50px",backgroundColor: "#385505",
                        padding: "8px 2px",width:"100%",color: "#ffffff",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",gap: "8px"}}>
                        <span>Read More</span>
                        <span style={{display: "flex",alignItems: "center",justifyContent: "center",width: "22px",
                                height: "22px",borderRadius: "50%",backgroundColor: "#FFF"}}>
                                <KdButtonPlusIcon style={{width: "10px",height: "10px",color: "#385505"}}/>
                        </span>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",
                            border: "1px solid #f1f1f1",boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",
                            overflow: "hidden",aspectRatio: "1 / 1",}}>
                        <button style={{display: "flex",alignItems:"center",justifyContent: "center",width: "100%",
                                padding:"8px 12px",border:"none",borderRadius: "50px",background:"radial-gradient(ellipse at center, #FF79DF 0%, #EB67D6 35%, #C63BB1 70%, #AD239B 100%)",
                                boxShadow: "4px 0px 24px rgba(173, 35, 155, 0.4)",color: "#FFFFFF",fontSize: "12px",fontFamily: "sans-serif",cursor: "pointer",
                                gap: "8px",}}>
                            <span>Read More</span>        
                            </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",
                            border: "1px solid #f1f1f1",boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",
                            overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",width: "100%",padding: "8px 16px",borderRadius: "50px",backgroundColor: "#F4F4FC",border: "1px solid #6C74D9",
                            color: "#6C74D9",fontSize: "12px",fontFamily: "sans-serif",cursor: "pointer",gap: "8px",boxShadow: "-2px 4px 0px 0px #3E425C",}}>
                        <span>Read More</span>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",
                            padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{position: "relative",width: "113px",height: "34px",border: "none",borderRadius: "9999px",background: "#4568E5",color: "#fff",fontSize: "12px",cursor: "pointer",overflow: "hidden",}}>
                        {/* Top curved highlight */}
                        <span style={{position: "absolute",left: "0",right: "0",height: "50px",width: "100px",borderRadius: "100%",background: "rgb(207, 219, 255)",pointerEvents: "none",bottom: "25px", }}/>                <span style={{position: "relative",zIndex: 1,}}>Read More</span>
                    </button>
                </div>
                {/*Line No. 623 class .btn-wrapper start*/}
                <div className="btn-wrapper">
                    <button className="read-btn">
                        <span>Read More</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <hr className="hr-border mt-3 mb-4" />
                <div className="flex items-center justify-between mb-3">
                    <span className="text-(--kd-text-black) kd-font-jakarta text-[10px] font-semibold capitalize tracking-widest">
                        Button Styles Premium
                    </span>
                </div>                  
            </div>        
            <div className="grid grid-cols-2 gap-2">
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",
                        border: "1px solid #f1f1f1",boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",
                        overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems:"center",justifyContent: "center",width: "100%",
                            padding:"8px 12px",border:"none",borderRadius: "50px",background:"radial-gradient(ellipse 70% 120% at center,#FFC7B2 0%,#E86A88 50%,#B40F00 100%)",boxShadow: "4px 0px 24px rgba(173, 35, 155, 0.4)",color: "#FFFFFF",fontSize: "12px",fontFamily: "sans-serif",cursor: "pointer",gap: "8px",}}>
                            <span>Read More</span>        
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent",
                    padding: "6px 2px", width: "auto", color: "#C17F02", fontSize: "12px", fontFamily: "sans-serif", borderImage: "initial",
                    cursor: "pointer", borderBottom: "2px solid #c17f02", gap:"8px"}}>
                        <span>Read More </span>
                        <KdButtonPlusIcon />
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "0 10px 0 10px",backgroundColor: "#52FFC2",padding: "8px 2px",width:"100%", color: "#064D34",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",gap:"8px"}}>
                        <span>Read More</span>
                        <KdButtonPlusIcon style={{color: "#064D34"}}/>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "8px",backgroundColor: "#FEA58C",
                        padding: "6px 2px",width:"100%",color: "#881E00",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",gap: "10px"}}>
                        <span>Read More</span>
                        <span style={{display: "flex",alignItems: "center",justifyContent: "center",width: "22px",
                                height: "22px",borderRadius: "8px",backgroundColor: "#B72B04"}}>
                                <KdButtonPlusIcon style={{width: "12px",height: "12px",color: "#fff"}}/>
                        </span>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "8px",backgroundColor: "transparent",
                        padding: "6px 2px",width:"100%",color: "#881E00",fontSize: "12px",
                        fontFamily: "sans-serif",border: "none",cursor: "pointer",gap: "8px"}}>
                            <span style={{display: "flex",alignItems: "center",justifyContent: "center",width: "25px",
                                height: "25px",borderRadius: "50px",backgroundColor: "#000"}}>
                                <KdButtonAngleRightIcon style={{width: "15px",height: "15px",color: "#fff"}}/>
                        </span>
                        <span style={{color:"#2A2A36",}}>Read More</span>
                        
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "10px",backgroundColor: "#fff",padding: "6px 2px",width:"100%", color: "#7069E8",fontSize: "12px",
                        fontFamily: "sans-serif",border: "1px solid #7069E8",cursor: "pointer",gap:"8px"}}>
                        <span>Read More</span>
                        <KdButtonPlusIcon style={{color: "#7069E8"}}/>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <div style={{width:"100%", paddingRight:"0", paddingLeft: "2px", paddingBottom: "2px", border: "2px solid #5a5a5a",}}>
                        <button style={{marginTop:"-10px", marginRight:"-25px", display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "0px",backgroundColor: "#545454",padding: "8px 2px",width:"100%", color: "#fff",fontSize: "12px",
                            fontFamily: "sans-serif",border: "none",cursor: "pointer",gap:"8px",width:"100%",}}>
                            <span>Read More</span>                    
                        </button>
                    </div>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                                        <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "0",backgroundColor: "#2D83DD",padding: "8px 2px",width:"100%", color: "#fff",fontSize: "12px",
                                                fontFamily: "sans-serif",border: "none",cursor: "pointer",gap:"8px",WebkitClipPath: "polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)",clipPath: "polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)" }}>
                        <span>Read More</span>
                        <KdButtonPlusIcon style={{color: "#fff"}}/>
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                                        <button style={{display: "flex",alignItems: "center",justifyContent: "center",borderRadius: "0",backgroundColor: "#EE0382",padding: "8px 2px",width:"100%", color: "#fff",fontSize: "12px",
                                                fontFamily: "sans-serif",border: "none",cursor: "pointer",gap:"8px",clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
                        WebkitClipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)", }}>
                        <span>Read More</span>                        
                    </button>
                </div>
                <div style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#f1f1f1",border: "1px solid #f1f1f1",
                    boxShadow: "0px 0px 1px 0px #ccc",borderRadius: "5px",padding: "12px",overflow: "hidden",aspectRatio: "1 / 1",}}>
                    <button
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            border: "none",
                            padding: "8px 2px",
                            width: "100%",
                            height: "40px",

                            color: "#222",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            cursor: "pointer",
                            gap: "8px",

                            background: `linear-gradient(#222,#222) left top/15% 1px no-repeat, linear-gradient(#222,#222) right top/70% 1px no-repeat,
                            linear-gradient(#222,#222) left bottom/70% 1px no-repeat, linear-gradient(#222,#222) right bottom/20% 1px no-repeat,
                            linear-gradient(#222,#222) left top/1px 100% no-repeat, linear-gradient(#222,#222) right top/1px 100% no-repeat,
                            #fff`,}}
                        >
                        <span>Read More</span>
                        <KdButtonPlusIcon style={{ color: "#222" }} />
                        </button>
                </div>
            </div>
      </div>
      
    </div>
  );
}