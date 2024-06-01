"use client"

import {
    FaHtml5,
    FaCss3,
    FaJs, 
    FaPython,
    FaReact, 
    FaFigma,
    FaNode
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiDjango,
    SiNextdotjs,
    SiDocker,
    SiLinux,
    SiGit,
    SiPostgresql,
    SiMongodb,
    SiCplusplus,
    SiTypescript
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    info: [
        { fieldName: "Name", fieldValue: "Teddy Muli" },
        { fieldName: "Phone", fieldValue: "(+254) 799 957 459" },
        { fieldName: "Experience", fieldValue: "2+ Years" },
        { fieldName: "Nationality", fieldValue: "Kenyan" },
        { fieldName: "Email", fieldValue: "tmuli974@gmail.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Kiswahili"}
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    items: [
        {
            company: 'Cable Sizer',
            position: "Full Stack Developer",
            duration: "2024"
        },
    ],
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    items: [
        {
            institution: 'Jomo Kenyatta University of Agriculture and Technology',
            degree: "B.Sc. Computer Science",
            duration: "2022 - 2026"
        },
        {
            institution: 'ALX Africa',
            degree: "Software Engineering",
            duration: "2022 - 2024"
        },
    ],
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    skillList: [
        { icon: <FaHtml5 />, name: "html 5" },
        { icon: <FaCss3 />, name: "html 5" },
        { icon: <FaJs />, name: "html 5" },
        { icon: <FaPython />, name: "html 5" },
        { icon: <FaReact />, name: "html 5" },
        { icon: <FaFigma />, name: "html 5" },
        { icon: <FaNode />, name: "html 5" },
        { icon: <SiTailwindcss />, name: "html 5" },
        { icon: <SiDjango />, name: "html 5" },
        { icon: <SiNextdotjs />, name: "html 5" },
        { icon: <SiDocker />, name: "html 5" },
        { icon: <SiLinux />, name: "html 5" },
        { icon: <SiGit />, name: "html 5" },
        { icon: <SiPostgresql />, name: "html 5" },
        { icon: <SiMongodb />, name: "html 5" },
        { icon: <SiCplusplus />, name: "html 5" },
        { icon: <SiTypescript />, name: "html 5" },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/** content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
