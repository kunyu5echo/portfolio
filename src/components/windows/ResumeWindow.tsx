"use client";

import React from "react";
import { Download } from "lucide-react";

export function ResumeWindow() {
    return (
        <div className="p-4 bg-[#c0c0c0] flex flex-col items-center justify-center text-center max-w-sm mx-auto">
            <div className="w-24 h-24 mb-4 bg-white border-2 border-l-[#808080] border-t-[#808080] border-r-[#dfdfdf] border-b-[#dfdfdf] flex items-center justify-center shadow-inner">
                <Download size={48} className="text-[#000080]" />
            </div>

            <h2 className="text-xl font-bold font-vt323 tracking-wide mb-2">Kunyu_Chen_Resume</h2>

            <p className="text-sm mb-6 px-4">
                Download my full resume to learn more about my experience driving 0 to 1 product growth and Vibe Coding.
            </p>

            <div className="flex flex-col gap-3 w-full px-8">
                <a
                    href="/Kunyu_Chen_Resume_202603.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-between items-center px-4 py-2 font-bold text-sm border-2 border-t-[#fff] border-l-[#fff] border-b-[#000] border-r-[#000] bg-[#c0c0c0] active:border-t-[#000] active:border-l-[#000] active:border-b-[#fff] active:border-r-[#fff] active:pt-[9px] active:pl-[17px] active:pb-[7px] active:pr-[15px]"
                >
                    <span>English Version (PDF)</span>
                    <Download size={16} />
                </a>

                <a
                    href="/陈鲲宇简历_202603.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-between items-center px-4 py-2 font-bold text-sm border-2 border-t-[#fff] border-l-[#fff] border-b-[#000] border-r-[#000] bg-[#c0c0c0] active:border-t-[#000] active:border-l-[#000] active:border-b-[#fff] active:border-r-[#fff] active:pt-[9px] active:pl-[17px] active:pb-[7px] active:pr-[15px]"
                >
                    <span>中文版简历 (PDF)</span>
                    <Download size={16} />
                </a>
            </div>
        </div>
    );
}
