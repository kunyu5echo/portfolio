"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";
import { useDesktopStore } from "@/store/useDesktopStore";

interface WindowFrameProps {
    id: string;
}

export function WindowFrame({ id }: WindowFrameProps) {
    const { windows, activeWindowId, closeWindow, focusWindow, minimizeWindow } = useDesktopStore();
    const windowData = windows.find((w) => w.id === id);
    const nodeRef = useRef(null);

    if (!windowData || windowData.isMinimized) return null;

    const isActive = activeWindowId === id;

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".title-bar"
            bounds="parent"
            onMouseDown={() => focusWindow(id)}
        >
            <div
                ref={nodeRef}
                className="window absolute bg-[#c0c0c0]"
                style={{
                    zIndex: windowData.zIndex,
                    width: "auto",
                    minWidth: "300px",
                    maxWidth: "1200px",
                    left: "20%",
                    top: "20%",
                }}
                onClick={() => focusWindow(id)}
            >
                <div className={`title-bar ${isActive ? "" : "inactive"} cursor-pointer`}>
                    <div className="title-bar-text flex items-center">
                        {windowData.icon && <span className="mr-1 inline-block w-4 h-4">{windowData.icon}</span>}
                        <span className="font-pixelify tracking-wide">{windowData.title}</span>
                    </div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}></button>
                        <button aria-label="Maximize" disabled></button>
                        <button aria-label="Close" onClick={(e) => { e.stopPropagation(); closeWindow(id); }}></button>
                    </div>
                </div>
                <div className="window-body">
                    {windowData.component}
                </div>
            </div>
        </Draggable>
    );
}
