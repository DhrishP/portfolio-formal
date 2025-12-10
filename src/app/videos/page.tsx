"use client";

import React, { useEffect, useState } from "react";
import videosData from "../../../data/videos.json";
import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "../(Header)/Navbar";
import Image from "next/image";
import AppNavbar from "@/components/app-navbar";
import { fetchLoomMetadata, formatDuration } from "@/lib/loom";

const VideoCard = ({ video, index }: { video: typeof videosData[0]; index: number }) => {
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    async function load() {
      const meta = await fetchLoomMetadata(video.videoUrl);
      if (meta && meta.duration) {
        setDuration(formatDuration(meta.duration));
      }
    }
    load();
  }, [video.videoUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card group">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
            <Clock className="w-3 h-3 mr-1" /> {duration}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg line-clamp-1">{video.title}</CardTitle>
          <CardDescription className="line-clamp-2 mt-2">
            {video.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto pt-0">
          <Button asChild variant="secondary" className="w-full">
            <Link href={video.videoUrl} target="_blank">
              Watch Video
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-primary-foreground">
      <Navbar />
      <div className="container mx-auto pt-32 pb-10 px-4">
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Video Demos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            If you do not want to read and just want to watch, here are some videos that I have made revolving around my projects and my journey as a software engineer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
      <AppNavbar />
    </div>
  );
};

export default VideosPage;
