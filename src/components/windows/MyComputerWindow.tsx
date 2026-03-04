"use client";

import React from "react";

export function MyComputerWindow() {
    return (
        <div className="p-4 flex flex-col md:flex-row gap-6 bg-[#c0c0c0]">
            {/* Avatar / System Info */}
            <div className="flex flex-col items-center gap-2 md:w-1/3">
                <div className="w-32 h-32 bg-[#008080] border-2 border-t-[#808080] border-l-[#808080] border-b-[#fff] border-r-[#fff] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-1">
                    {/* Avatar Image */}
                    <div className="w-full h-full bg-white flex items-center justify-center border border-[#808080] overflow-hidden">
                        <img src="/selfie.jpg" alt="Kunyu Chen Avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center font-bold">Kunyu Chen</div>
                <div className="text-center text-sm">Product Manager</div>
            </div>

            {/* Bio and Skills */}
            <div className="flex-1">
                <fieldset className="mb-4">
                    <legend className="px-1 font-bold">System Information</legend>
                    <p className="text-sm leading-relaxed">
                        擅长利用大模型（Claude/Gemini）进行 <strong>Vibe Coding</strong>，实现从敏捷业务洞察、MVP 研发到产运冷启动的 <strong>0 到 1 破局</strong>。具备全栈化探索能力。懂 AI 的全栈产品人。
                    </p>
                </fieldset>

                <fieldset>
                    <legend className="px-1 font-bold">Core Capabilities (System Resources)</legend>
                    <div className="space-y-3 mt-2 text-sm max-w-sm">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Prompt Engineering & RAG</span>
                                <span>95%</span>
                            </div>
                            <div className="w-full bg-[#fff] border-[1.5px] border-l-[#808080] border-t-[#808080] border-r-[#dfdfdf] border-b-[#dfdfdf] h-4">
                                <div className="bg-[#000080] h-full" style={{ width: "95%" }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span>AI Coding & Agentic Engineer</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-[#fff] border-[1.5px] border-l-[#808080] border-t-[#808080] border-r-[#dfdfdf] border-b-[#dfdfdf] h-4">
                                <div className="bg-[#000080] h-full" style={{ width: "85%" }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span>PMF Validation & Growth</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-[#fff] border-[1.5px] border-l-[#808080] border-t-[#808080] border-r-[#dfdfdf] border-b-[#dfdfdf] h-4">
                                <div className="bg-[#000080] h-full" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
