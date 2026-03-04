"use client";

import React from "react";
import { useDesktopStore } from "@/store/useDesktopStore";
import { FolderOpen, Layout } from "lucide-react";
import { ProjectDetailWindow } from "./ProjectDetailWindow";

const PROJECTS = [
    {
        id: "enerchi",
        title: "EnerChi.exe",
        name: "EnerChi (海外风水AI工具)",
        role: "Solo Builder (Product & Dev)",
        period: "2025.06 - 至今",
        iconSrc: "/EnerChi/enerchi-icon.png",
        mediaSrc: "/EnerChi/EnerChi.mp4",
        mediaType: "video",
        tech: ["Vibe Coding", "Web Development", "Reddit Growth", "0 to 1"],
        whatIDid: [
            "MVP产品设计：投入六周仅1人通过 AI coding 搭建完整的 Web 产品并成功上线。",
            "产运冷启动：投入两周仅1人通过 Reddit 种草和邮件营销获得 300+ 活跃种子用户，并在社区验证了 PMF。"
        ],
    },
    {
        id: "zhilu",
        title: "Zhilu Tantan.exe",
        name: "职路探探 (国内面经AI助手)",
        role: "MVP Product Manager",
        period: "2025.06 - 至今",
        iconSrc: "/ZhiLuTanTan/职路探探icon.png",
        mediaSrcs: ["/ZhiLuTanTan/首页.png", "/ZhiLuTanTan/搜索结果.png", "/ZhiLuTanTan/发布.png"],
        mediaType: "image",
        tech: ["Prompt Engineering", "RAG Optimization", "Xiaohongshu Seeding"],
        whatIDid: [
            "MVP产品设计：深度参与核心功能（AI搜、看、写）框架设计，通过定性访谈等验证需求；上线后核心功能使用率达 67%，次留约 20%。",
            "RAG效果优化：评测混合检索方案使准确率提升 40%；协同重构核心 Prompt 弥补重排能力，内容生成质量提升超 30%。",
            "产运冷启动：小红书矩阵号运营，两周内孵化 90 人高净值测款群，邀约使用验证 PMF。"
        ],
    },
    {
        id: "bizboom",
        title: "BizBoom.exe",
        name: "BizBoom.ai (B端电商视频剪辑工具)",
        role: "Product & Market Operation",
        period: "2024.06 - 2025.05",
        iconSrc: "/BizBoom/BizBoom_logo_cropped.png",
        mediaSrc: "/BizBoom/BizBoom.ai General Tutorial.mov",
        mediaType: "video",
        tech: ["B2B SaaS", "Google SEO/SEM", "Email Marketing", "User Research"],
        whatIDid: [
            "产品策划：向 300+ 试用用户邮件调研并深访行业从业者，输出方案并上线（如 AE 动效模板）。",
            "SEO与增长：从头搭建 Google SEO，获取 1000+ 外链；有机搜索曝光周均增长 29.26%。",
            "付费投放与联盟：主站付费转化率达 10.2%，CPC 低于同行 50%；开拓 20+ TikTok等联盟伙伴。",
            "邮件营销：收拢潜客并有效触达 335 个商家 KP，邮件点击率达 20.9%。"
        ],
    },
    {
        id: "animate",
        title: "Animate AI.exe",
        name: "Animate AI (动画生成工具内容站)",
        role: "Product Manager (Growth)",
        period: "2026.01 - 2026.02",
        iconSrc: "/AnimateAI/animate-ai-logo.gif",
        mediaSrc: "/AnimateAI/首页展示页.jpg",
        mediaType: "image",
        tech: ["SEO Infrastructure", "Content-Led Growth"],
        whatIDid: [
            "站点策划与SEO：通过 WordPress 实现博客撰写和同步，内链数量达 9000+；1个月页面收录增长 8 倍，总曝光量增长 20%。",
            "内容驱动增长：结合时下热门模型（如 Seedance）和热门主题（如儿童字母歌）搭建 Feature 落地页，累计曝光达 60W。"
        ],
    }
];

export function ProjectsExplorerWindow() {
    const { openWindow } = useDesktopStore();

    const handleOpenProject = (project: any) => {
        openWindow(
            `project-${project.id}`,
            project.title,
            <ProjectDetailWindow project={project} />,
            project.iconSrc ? <img src={project.iconSrc} alt="icon" className="w-4 h-4 object-contain" /> : <Layout size={16} />
        );
    };

    return (
        <div className="bg-white min-h-[500px] w-full max-w-[800px] md:w-[800px] h-full flex flex-col">
            {/* File menu mockup */}
            <div className="border-b border-gray-300 bg-[#c0c0c0] px-2 py-1 text-sm flex gap-4">
                <span className="cursor-pointer hover:bg-blue-800 hover:text-white px-1"><u>F</u>ile</span>
                <span className="cursor-pointer hover:bg-blue-800 hover:text-white px-1"><u>E</u>dit</span>
                <span className="cursor-pointer hover:bg-blue-800 hover:text-white px-1"><u>V</u>iew</span>
                <span className="cursor-pointer hover:bg-blue-800 hover:text-white px-1"><u>H</u>elp</span>
            </div>

            {/* Address bar mockup */}
            <div className="border-b border-gray-300 bg-[#c0c0c0] px-2 py-1 flex items-center gap-2">
                <span className="text-sm">Address</span>
                <div className="bg-white border-2 border-l-[#808080] border-t-[#808080] border-r-[#fff] border-b-[#fff] flex-1 px-1 text-sm flex items-center">
                    <FolderOpen size={14} className="mr-1 text-yellow-600" /> C:\Portfolio\Projects
                </div>
            </div>

            {/* Explorer Content */}
            <div className="flex-1 p-4 flex flex-wrap gap-8 items-start content-start">
                {PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col items-center justify-start w-28 p-2 cursor-pointer select-none group focus:bg-blue-800/20 active:bg-blue-800/40 border border-transparent hover:border-dotted hover:border-gray-400"
                        onDoubleClick={() => handleOpenProject(project)}
                    >
                        <div className="w-16 h-16 mb-2 flex justify-center items-center text-blue-900 overflow-hidden">
                            {project.iconSrc ? (
                                <img src={project.iconSrc} alt={`${project.name} logo`} className="w-full h-full object-contain drop-shadow-md" />
                            ) : (
                                <Layout size={32} />
                            )}
                        </div>
                        <div className="text-center text-sm leading-tight font-vt323 tracking-wide px-1 group-active:bg-blue-800 group-active:text-white">
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Status bar mockup */}
            <div className="border-t border-gray-400 bg-[#c0c0c0] px-2 py-[2px] text-xs flex shadow-[inset_0_1px_#fff]">
                <span>4 object(s)</span>
            </div>
        </div>
    );
}
