"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@radix-ui/react-tooltip";

import Link from "next/link"
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "fullstack",
		title: "Cable Sizer",
		description: "Full stack web application that helps electrical engineers size cables and save calculations in projects. Icorporated Mpesa, Card payments and PayPal.",
		stack: [{ name: "Next Js" }, { name: "Django" }, { name: "Django Rest Framework" }],
		image: "/assets/work/cable.png",
		live: "https://cable-sizer.com",
	},
	{
		num: "02",
		category: "Fullstack",
		title: "DairyLink",
		description: "Dairy cooperative management application.",
		stack: [{ name: "Next Js" }, { name: "Supabase" }],
		image: "/assets/work/cow.png",
		live: "https://dairylink.jhubafrica.com",
	},
	{
		num: "03",
		category: "fullstack",
		title: "Threads clone",
		description: "A threads clone.",
		stack: [{ name: "Next Js" }, { name: "Tailwind Css" }, { name: "Mongo db" }],
		image: "/assets/work/threads.png",
		live: "https://threads-clone-ivory-eight.vercel.app/",
		github: "https://github.com/TeddyMuli/Threads-clone"
	},
	{
		num: "04",
		category: "fullstack",
		title: "CRM web app",
		description: "A customer relation management web application",
		stack: [{ name: "Django" }, { name: "MySql" }, { name: "Bootstrap" }],
		image: "/assets/work/crm.png",
		live: "",
		github: "https://github.com/TeddyMuli/Django-WebApp"
	},
	{
		num: "05",
		category: "fullstack",
		title: "AirBnB clone",
		description: "An AirBnB clone.",
		stack: [{ name: "Flask" }, { name: "MySql" }, { name: "SQLAlchemy" }, { name: "Html5" }, { name: "Css3" }, { name: "JavaScript" }],
		image: "/assets/work/hbnb_logo.png",
		live: "",
		github: "https://github.com/TeddyMuli/AirBnB_clone"
	},
	{
		num: "06",
		category: "systems programming",
		title: "Simple Shell",
		description: "A simple linux shell written in C.",
		stack: [{ name: "C" }],
		image: "/assets/work/shell.png",
		live: "",
		github: "https://github.com/TeddyMuli/simple_shell"
	},
]

const Work = () => {
	const [project, setProject] = useState(projects[0]);
	const [isFirst, setIsFirst] = useState(false)
	const [isLast, setIsLast] = useState(false)

	const handleSlideChange = (swiper: any) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;

		// updating project state on current slide index
		setProject(projects[currentIndex])
	}

	useEffect(() => {
		if (project.num === "01") {
			setIsFirst(true)
		} else if (project.num === "06") {
			setIsLast(true)
		} else {
			setIsFirst(false)
			setIsLast(false)
		}
	}, [project.num])

	return (
		<motion.section
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn"
				}
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
	  >
		<div className="container mx-auto">
			<div className="flex flex-col xl:flex-row xl:gap-[30px]">
				<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
					<div className="flex flex-col gap-[30px] h-[50%]">
						<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
						<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
							{project.title}
						</h2>
						<h2 className="text-[16px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
							{project.category} project
						</h2>
						{/** project description */}
						<p className="text-white/60">{project.description}</p>
						<ul className="flex gap-4">
							{project.stack.map((item, index) => {
								return (
									<li key={index} className="text-xl text-accent">
										{item.name}
										{/** remove the last comma */}
										{index !== project.stack.length -1 && ","}
									</li>
								)
							})}
						</ul>
						{/** border */}
						<div className="border border-white/20"></div>
						{/** buttons */}
						<div className="flex items-center gap-4">
							{/** live project button */}
							{project.live && (
							<a target="_blank" rel="noopener noreferrer" href={project.live}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
											<BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:-rotate-45 transition-all" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Live project</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</a>
							)}
							{/** project github */}
							{project.github && (
							<a target="_blank" href={project.github}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
											<BsGithub className="text-white text-3xl group-hover:text-accent" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Github repository</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</a>
							)}
						</div>
					</div>
				</div>
				<div className="w-full xl:w-[50%]">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						className="xl:h-[520px] mb-12"
						onSlideChange={handleSlideChange}
					>
						{projects.map((item, index) => {
							return (
								<SwiperSlide key={index}>
									<div className="h-[460px] relative group flex justify-center items-center">
										<div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
										<div className="relative">
											<Image
												src={item.image}
												alt="project image"
												width={460}
												height={460}
											/>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
						{/** button */}
						<WorkSliderBtns
							containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
							btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
							isFirst={isFirst}
							isLast={isLast}
							iconStyles=""
						/>
					</Swiper>
				</div>
			</div>
		</div>
		</motion.section>
	);
}

export default Work;
