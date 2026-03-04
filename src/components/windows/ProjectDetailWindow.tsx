"use client";

import React from "react";

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        name: string;
        role: string;
        period?: string;
        tech: string[];
        whatIDid: string[];
        iconSrc?: string;
        mediaSrc?: string;
        mediaSrcs?: string[];
        mediaType?: string;
    };
}

export function ProjectDetailWindow({ project }: ProjectDetailProps) {
    return (
        <div className="p-4 bg-[#c0c0c0] flex flex-col md:flex-row gap-6 max-h-[80vh] overflow-y-auto">
            {/* Visual / Screenshot Area */}
            <div className="flex-1 md:w-1/2 flex flex-col gap-2">
                <div className="w-full min-h-[300px] bg-[#000] border-4 border-[#808080] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)] relative flex flex-col items-center justify-start group overflow-y-auto p-2 gap-4">
                    {project.mediaSrcs && project.mediaSrcs.length > 0 ? (
                        project.mediaSrcs.map((src: string, i: number) => (
                            project.mediaType === "video" ? (
                                <video
                                    key={i}
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full object-contain mb-2"
                                />
                            ) : (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`${project.name} preview ${i + 1}`}
                                    className="w-full object-contain"
                                />
                            )
                        ))
                    ) : project.mediaType === "video" ? (
                        <video
                            src={project.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    ) : project.mediaType === "image" ? (
                        <img
                            src={project.mediaSrc}
                            alt={`${project.name} preview`}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="text-green-500 font-vt323 text-lg animate-pulse tracking-widest text-center px-4 my-auto">
                            [ NO MEDIA FOUND ]
                        </div>
                    )}
                </div>

                {/* Tech Stack Tags via 98.css buttons style */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-[#c0c0c0] border-2 border-t-[#fff] border-l-[#fff] border-b-[#808080] border-r-[#808080] shadow-[1px_1px_0_#000]">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Description Area */}
            <div className="flex-1 md:w-1/2 flex flex-col">
                <h2 className="text-xl font-bold mb-1 border-b-2 border-gray-400 pb-1">{project.name}</h2>
                <div className="text-sm font-bold text-blue-900 mb-4 tracking-wide">
                    Role: <span className="text-black font-normal mr-4">{project.role}</span>
                    {project.period && (
                        <>
                            Time: <span className="text-black font-normal">{project.period}</span>
                        </>
                    )}
                </div>

                <fieldset className="flex-1">
                    <legend className="px-1 font-bold">What I Did</legend>
                    <ul className="list-disc pl-5 mt-2 space-y-3 text-sm pr-2">
                        {project.whatIDid.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">
                                {point}
                            </li>
                        ))}
                    </ul>
                </fieldset>
            </div>
        </div>
    );
}
