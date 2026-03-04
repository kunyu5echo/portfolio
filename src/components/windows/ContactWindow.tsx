"use client";

import React, { useState } from "react";

export function ContactWindow() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("chris7chan@163.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-4 bg-[#c0c0c0] w-full max-w-md mx-auto flex flex-col gap-4">
            <div className="flex gap-4 items-center border-b border-gray-400 pb-4">
                <img src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" alt="Email" className="w-12 h-12" />
                <div>
                    <h2 className="text-lg font-bold">Compose New Message</h2>
                    <p className="text-sm text-gray-700">Looking for a versatile Agentic Product Manager?</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex border-2 border-t-[#808080] border-l-[#808080] border-r-[#fff] border-b-[#fff] bg-white text-sm">
                    <div className="bg-[#c0c0c0] px-2 py-1 border-r border-[#808080] text-gray-700 min-w-[60px]">To:</div>
                    <div className="px-2 py-1 font-bold">chris7chan@163.com</div>
                </div>

                <div className="flex border-2 border-t-[#808080] border-l-[#808080] border-r-[#fff] border-b-[#fff] bg-white text-sm">
                    <div className="bg-[#c0c0c0] px-2 py-1 border-r border-[#808080] text-gray-700 min-w-[60px]">Subject:</div>
                    <div className="px-2 py-1 text-gray-500 italic">Let's build something awesome</div>
                </div>

                <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-[#fff] border-b-[#fff] p-2 min-h-[100px] text-sm">
                    Hi Kunyu,<br /><br />
                    I saw your impressive portfolio and would love to connect to discuss...
                </div>
            </div>

            <div className="flex justify-end gap-2 mt-2">
                <button className="px-6 py-1 font-bold" onClick={handleCopy}>
                    {copied ? "Address Copied!" : "Copy Email to Send"}
                </button>
            </div>
        </div>
    );
}
