import Navbar from "@/components/myui/Navbar";
import { Separator } from "@/components/ui/separator";
import { MyProjects, MySkills } from "../../../public/data/config";
import { CalendarClock, Component, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import { Meteors } from "@/components/magicui/meteors";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  function getPath(skill: string) {
    return MySkills.content
      .map(
        (group) => group.content.find((item) => item.name === skill)?.imgpath
      )
      .toSorted()[0];
  }
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Meteors />
      <ScrollArea className="h-[calc(100%-45px)] animate-fadein">
        <ScrollBar className="" />
        <main
          className={`my-10 w-full flex justify-center transition-all duration-1000`}
        >
          <div className="flex px-4 md:px-14 justify-center flex-col">
            <h1 className="text-7xl font-bold flex justify-center mb-5">
              Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-y-2 md:gap-x-2">
              {MyProjects.content.map((item, index) => {
                return (
                  <section
                    key={index}
                    className="flex md:flex-1 flex-col w-full h-auto md:min-w-[300px] md:max-w-[300px] p-5 hover:scale-110 transition-all duration-500 shadow-2xl rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
                  >
                      {item.Logo ? (
                        <Image src={item.Logo} alt="" width={50} height={50} />
                      ) : (
                        <></>
                      )}
                      <div className="font-bold text-lg mt-4 flex items-center">
                        {item.title}
                        <Link
                          href={item.link}
                          className="hover:bg-slate-200 transition-all duration-100 rounded-lg ml-2"
                        >
                          <ExternalLink className="scale-[60%]" />
                        </Link>
                      </div>
                      <Separator className="my-4" />
                      <div className="text-sm text-slate-500 flex items-center mb-2">
                        <Component className="scale-[70%]" />
                        {item.type}
                      </div>
                      <div className="text-sm text-slate-500 flex items-center mb-4">
                        <CalendarClock className="scale-[70%]" />
                        {item.startDate === ""
                          ? "Planning"
                          : item.startDate + " - " + item.endDate}
                      </div>
                      <div className="text-sm text-slate-500 flex flex-1 mb-4">
                        {item.description}
                      </div>
                      <Separator className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((item, index) => (
                          <HoverCard openDelay={50} closeDelay={50} key={index}>
                            <HoverCardTrigger asChild>
                              <div className="w-10 h-10 border border-black rounded-md flex justify-center items-center hover:bg-slate-200 hover:scale-110 transition-all duration-100">
                                <Image
                                  src={`${getPath(item)}`}
                                  alt=""
                                  width={20}
                                  height={1}
                                />
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent
                              className="w-auto p-[2px] px-3 text-sm"
                              side="top"
                            >
                              {item}
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </ScrollArea>
    </div>
  );
}
