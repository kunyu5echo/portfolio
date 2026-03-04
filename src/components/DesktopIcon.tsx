"use client";

import React, { useState } from "react";
import { useDesktopStore } from "@/store/useDesktopStore";

interface DesktopIconProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    onOpen: () => void;
}

export function DesktopIcon({ id, icon, title, onOpen }: DesktopIconProps) {
    const [isSelected, setIsSelected] = useState(false);

    // Handle single click to select
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsSelected(true);
    };

    // Handle double click to open window
    const handleDoubleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsSelected(false);
        onOpen();
    };

    return (
        <div
            className={`flex flex-col items-center justify-start w-20 p-2 m-2 cursor-pointer select-none group ${isSelected ? "bg-blue-800/40 border border-dotted border-blue-400" : "border border-transparent"
                }`}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            title={title}
        >
            <div className={`w-12 h-12 flex items-center justify-center mb-1 ${isSelected ? "opacity-80" : ""}`}>
                {icon}
            </div>
            <div
                className={`text-center text-xs leading-tight font-vt323 tracking-wide px-1 ${isSelected ? "bg-blue-800 text-white" : "text-white"
                    }`}
                style={{ textShadow: "1px 1px 1px #000" }}
            >
                {title}
            </div>
        </div>
    );
}
