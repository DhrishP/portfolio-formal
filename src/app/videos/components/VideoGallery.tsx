"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VideoData {
  id: number;
  title: string;
  description: string;
  loomUrl: string;
  embedId: string;
  category: "project" | "personal" | "tutorial";
  duration: string;
  date: string;
  thumbnail?: string;
}

const videoData: VideoData[] = [
  {
    id: 1,
    title: "Forge Commerce - E-commerce Dashboard Demo",
    description: "Complete walkthrough of the e-commerce admin dashboard with payment integration, product management, and analytics features.",
    loomUrl: "https://www.loom.com/share/your-video-id-1",
    embedId: "your-video-id-1",
    category: "project",
    duration: "8:45",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Forge Store - Frontend Template Showcase",
    description: "Demonstration of the responsive e-commerce frontend with filtering, cart functionality, and payment processing.",
    loomUrl: "https://www.loom.com/share/your-video-id-2",
    embedId: "your-video-id-2",
    category: "project",
    duration: "6:30",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "RAGVault CLI Tool - Local RAG Implementation",
    description: "Deep dive into the RAGVault CLI tool showing local vector database setup, embeddings, and query processing.",
    loomUrl: "https://www.loom.com/share/your-video-id-3",
    embedId: "your-video-id-3",
    category: "project",
    duration: "12:15",
    date: "2024-02-05",
  },
  {
    id: 4,
    title: "My Development Journey & Philosophy",
    description: "Personal story about my transition into full-stack development, challenges faced, and lessons learned.",
    loomUrl: "https://www.loom.com/share/your-video-id-4",
    embedId: "your-video-id-4",
    category: "personal",
    duration: "15:20",
    date: "2024-02-10",
  },
  {
    id: 5,
    title: "Building Scalable React Applications",
    description: "Tutorial on best practices for structuring large React applications with TypeScript and modern tooling.",
    loomUrl: "https://www.loom.com/share/your-video-id-5",
    embedId: "your-video-id-5",
    category: "tutorial",
    duration: "18:45",
    date: "2024-02-20",
  },
  {
    id: 6,
    title: "Working with AI APIs - Real-world Examples",
    description: "Practical examples of integrating various AI APIs into web applications, including cost optimization strategies.",
    loomUrl: "https://www.loom.com/share/your-video-id-6",
    embedId: "your-video-id-6",
    category: "tutorial",
    duration: "14:30",
    date: "2024-03-01",
  },
];

const VideoCard = ({ video, onPlay }: { video: VideoData; onPlay: (video: VideoData) => void }) => {
  const categoryColors = {
    project: "bg-blue-500",
    personal: "bg-purple-500",
    tutorial: "bg-green-500",
  };

  const categoryLabels = {
    project: "Project Demo",
    personal: "Personal",
    tutorial: "Tutorial",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            onClick={() => onPlay(video)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          </motion.button>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`${categoryColors[video.category]} text-white text-xs px-2 py-1 rounded-full font-medium`}>
            {categoryLabels[video.category]}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          <Clock className="inline h-3 w-3 mr-1" />
          {video.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(video.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => onPlay(video)}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Play className="h-3 w-3 mr-1" />
              Watch
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <a href={video.loomUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoModal = ({ 
  video, 
  isOpen, 
  onClose 
}: { 
  video: VideoData | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {video.title}
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </Button>
          </div>
        </div>
        
        <div className="aspect-video">
          <iframe
            src={`https://www.loom.com/embed/${video.embedId}`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {video.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(video.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {video.duration}
              </span>
            </div>
            <Button asChild variant="outline">
              <a href={video.loomUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Loom
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "personal" | "tutorial">("all");

  const filteredVideos = videoData.filter(video => 
    activeFilter === "all" || video.category === activeFilter
  );

  const filterButtons = [
    { key: "all", label: "All Videos", count: videoData.length },
    { key: "project", label: "Projects", count: videoData.filter(v => v.category === "project").length },
    { key: "personal", label: "Personal", count: videoData.filter(v => v.category === "personal").length },
    { key: "tutorial", label: "Tutorials", count: videoData.filter(v => v.category === "tutorial").length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Video Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Watch project demonstrations, tutorials, and personal insights about my development journey
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className="rounded-full"
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={setSelectedVideo}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No videos found for the selected category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default VideoGallery;