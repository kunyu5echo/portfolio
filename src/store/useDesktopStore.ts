import { create } from "zustand";
import React from "react";

export interface WindowData {
    id: string;
    title: string;
    icon?: React.ReactNode;
    component: React.ReactNode;
    isMinimized: boolean;
    zIndex: number;
}

interface DesktopStore {
    windows: WindowData[];
    activeWindowId: string | null;
    openWindow: (id: string, title: string, component: React.ReactNode, icon?: React.ReactNode) => void;
    closeWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
    focusWindow: (id: string) => void;
}

let topZIndex = 10;

export const useDesktopStore = create<DesktopStore>((set) => ({
    windows: [],
    activeWindowId: null,

    openWindow: (id, title, component, icon) => set((state) => {
        // If window is already open, focus it
        const existingWindow = state.windows.find((w) => w.id === id);
        if (existingWindow) {
            topZIndex += 1;
            return {
                windows: state.windows.map((w) =>
                    w.id === id ? { ...w, isMinimized: false, zIndex: topZIndex } : w
                ),
                activeWindowId: id,
            };
        }

        // Otherwise, open a new window
        topZIndex += 1;
        const newWindow: WindowData = {
            id,
            title,
            component,
            icon,
            isMinimized: false,
            zIndex: topZIndex,
        };
        return {
            windows: [...state.windows, newWindow],
            activeWindowId: id,
        };
    }),

    closeWindow: (id) => set((state) => ({
        windows: state.windows.filter((w) => w.id !== id),
        activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

    minimizeWindow: (id) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, isMinimized: true } : w
        ),
        activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

    restoreWindow: (id) => set((state) => {
        topZIndex += 1;
        return {
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, isMinimized: false, zIndex: topZIndex } : w
            ),
            activeWindowId: id,
        };
    }),

    focusWindow: (id) => set((state) => {
        const w = state.windows.find((w) => w.id === id);
        if (!w || w.isMinimized) return state; // Only focus unminimized windows

        // Don't step up zIndex if already highest?
        // Let's just step it up to be safe
        topZIndex += 1;
        return {
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, zIndex: topZIndex } : w
            ),
            activeWindowId: id,
        };
    }),
}));
