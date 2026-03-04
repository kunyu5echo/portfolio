"use client";

import React, { useEffect, useState } from "react";
import { useDesktopStore } from "@/store/useDesktopStore";

export function Taskbar() {
    const { windows, activeWindowId, focusWindow, restoreWindow, minimizeWindow } = useDesktopStore();
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleTaskClick = (w: any) => {
        if (w.isMinimized) {
            restoreWindow(w.id);
        } else if (activeWindowId === w.id) {
            // If clicking the active window button, minimize it
            minimizeWindow(w.id);
        } else {
            // Focus it
            focusWindow(w.id);
        }
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] flex items-center px-1 z-50 shadow-[inset_0_1px_#fff,inset_0_2px_#dfdfdf]" style={{ borderTop: "2px solid #fff", borderLeft: "2px solid #fff" }}>
            {/* Start Button */}
            <button className="flex items-center space-x-1 px-3 py-1 font-bold text-black border-2 border-r-[#000] border-b-[#000] border-t-[#fff] border-l-[#fff] bg-[#c0c0c0] active:border-r-[#fff] active:border-b-[#fff] active:border-t-[#000] active:border-l-[#000] active:pl-[13px] active:pt-[5px]">
                <img src="/window.svg" alt="Start" className="w-5 h-5 mix-blend-multiply" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <span className="font-pixelify tracking-wider">Start</span>
            </button>

            {/* Taskbar Divider */}
            <div className="mx-2 h-7 w-px border-l border-[#808080] border-r border-[#ffffff]"></div>

            {/* Open Windows Tabs */}
            <div className="flex-1 flex items-center space-x-1 overflow-x-auto pr-2">
                {windows.map((w) => {
                    const isActive = activeWindowId === w.id && !w.isMinimized;
                    return (
                        <button
                            key={w.id}
                            onClick={() => handleTaskClick(w)}
                            className={`flex items-center max-w-[150px] min-w-[80px] px-2 py-1 text-sm text-black border-2 bg-[#c0c0c0] truncate ${isActive
                                ? "border-t-[#000] border-l-[#000] border-r-[#fff] border-b-[#fff] bg-[#e0e0e0] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]"
                                : "border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000]"
                                }`}
                        >
                            {w.icon && <span className="mr-1 inline-block w-4 h-4">{w.icon}</span>}
                            <span className="truncate font-pixelify">{w.title}</span>
                        </button>
                    );
                })}
            </div>

            {/* System Tray */}
            <div className="flex items-center px-3 py-1 border-2 border-t-[#808080] border-l-[#808080] border-r-[#fff] border-b-[#fff] text-black">
                <span className="font-pixelify text-sm">{time}</span>
            </div>
        </div>
    );
}
