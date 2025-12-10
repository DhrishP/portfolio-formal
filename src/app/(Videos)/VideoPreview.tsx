"use client";

import React from "react";
import videosData from "../../../data/videos.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Maximize2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const VideoPreview = () => {
  const topVideos = videosData.slice(0, 2);

  return (
    <section className="py-24 bg-zinc-950 text-white w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                 <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500"
                 >
                    Recent Demos
                 </motion.h2>
                 <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-400 text-lg max-w-xl"
                 >
                    Visual walkthroughs of my latest projects and technical implementations.
                 </motion.p>
            </div>
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <Button variant="ghost" asChild className="hidden md:flex text-white hover:text-white hover:bg-white/10 gap-2">
                    <Link href="/videos">
                        Browse Gallery <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {topVideos.map((video, index) => (
            <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
            >
                <Link href={video.videoUrl} target="_blank">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-2xl transition-all duration-500 group-hover:ring-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <Image 
                            src={video.thumbnail} 
                            alt={video.title} 
                            fill 
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{video.title}</h3>
                            <p className="text-zinc-300 line-clamp-1 text-sm md:text-base">{video.description}</p>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </Link>
            </motion.div>
          ))}
        </div>
        
         <div className="mt-12 flex justify-center md:hidden">
             <Button variant="outline" className="w-full bg-transparent border-zinc-700 text-white hover:bg-zinc-800" asChild>
                <Link href="/videos">View All Videos</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
