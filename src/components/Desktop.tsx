"use client";

import React from "react";
import { useDesktopStore } from "@/store/useDesktopStore";
import { Taskbar } from "./Taskbar";
import { DesktopIcon } from "./DesktopIcon";
import { WindowFrame } from "./WindowFrame";
import { User, Folder, Mail, FileText } from "lucide-react";

import { MyComputerWindow } from "./windows/MyComputerWindow";
import { ProjectsExplorerWindow } from "./windows/ProjectsExplorerWindow";
import { ContactWindow } from "./windows/ContactWindow";
import { ResumeWindow } from "./windows/ResumeWindow";

export default function Desktop() {
    const { windows, openWindow } = useDesktopStore();

    return (
        <main className="relative w-screen h-screen overflow-hidden bg-[#008080] selection:bg-blue-800 selection:text-white">
            {/* Desktop Icons Area */}
            <div className="absolute top-0 left-0 bottom-10 right-0 flex flex-col flex-wrap content-start p-2 gap-4">
                <DesktopIcon
                    id="my-computer"
                    title="My Computer"
                    icon={<User size={32} color="white" />}
                    onOpen={() => openWindow("my-computer", "My Computer", <MyComputerWindow />, <User size={16} />)}
                />
                <DesktopIcon
                    id="projects"
                    title="Projects Explorer"
                    icon={<Folder size={32} color="white" />}
                    onOpen={() => openWindow("projects", "Projects Explorer", <ProjectsExplorerWindow />, <Folder size={16} />)}
                />
                <DesktopIcon
                    id="contact"
                    title="Contact.exe"
                    icon={<Mail size={32} color="white" />}
                    onOpen={() => openWindow("contact", "Contact.exe", <ContactWindow />, <Mail size={16} />)}
                />
                <DesktopIcon
                    id="resume"
                    title="Resume.pdf"
                    icon={<FileText size={32} color="white" />}
                    onOpen={() => openWindow("resume", "Resume.pdf", <ResumeWindow />, <FileText size={16} />)}
                />
            </div>

            {/* Render Open Windows */}
            {windows.map((w) => (
                <WindowFrame key={w.id} id={w.id} />
            ))}

            {/* Taskbar */}
            <Taskbar />
        </main>
    );
}
