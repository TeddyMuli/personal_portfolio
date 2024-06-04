"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { title } from "process";

const info = [
    { icon: <FaPhoneAlt />, title: "Phone", description: "+254 799 957 459" },
    { icon: <FaEnvelope />, title: "Email", description: "tmuli974@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Address", description: "Nairobi" },
]

import { motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container max-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/** form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flexx flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, atque? Blanditiis ad quasi temporibus.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstsname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email  address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/** select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/** text area */}
                            <Textarea className="h-[200px]" placeholder="Type your message" />

                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/** info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
