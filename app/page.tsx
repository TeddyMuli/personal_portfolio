"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full mb-12">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left gap-4 order-2 xl:order-none">
            <TypeAnimation
              className="text-xl" 
              sequence={[
                'Full Stack Software Engineer '
              ]}
              wrapper="span"
              speed={10}
              cursor={true}
            />
            <h1 className="h1 my-4">
              Hi, I'm <div className="mt-2 text-accent">Teddy Muli<span className="text-white">.</span></div>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and 
              I am profecient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://docs.google.com/document/d/1IWgQKpPoQ9s950hgpe-4rvjnD1bZkrDO_1wsjguPKXk/export?format=pdf" download>
                <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all hover:duration-500"
                />
              </div>
            </div>
          </div>

          {/**photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}

export default Home;
