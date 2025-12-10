"use client";

import React from "react";
import blogsData from "../../../data/blogs.json";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../(Header)/Navbar";
import { Badge } from "@/components/ui/badge";
import AppNavbar from "@/components/app-navbar";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <div className="font-sans">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden font-serif">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm tracking-widest uppercase font-sans">
                    Thoughts & Reflections on Tech
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-sans">
                    Thinking <span className="italic font-serif text-primary">Out Loud</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Writing is my way of debugging my thoughts. Here, I explore the concepts, and the philosophy behind the systems present around us.
                </p>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-xl mx-auto mb-12 relative"
                >
                    <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/20 rotate-180" />
                    <p className="text-lg italic text-muted-foreground/80">
                    "My pencil and I are smarter than I am."
                    </p>
                    <span className="block mt-2 text-sm text-muted-foreground font-sans">— Albert Einstein</span>
                </motion.div>

            </motion.div>

            {/* Separator */}
            <motion.div 
                className="w-full max-w-[200px] mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 font-sans">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogsData.map((blog, index) => (
                <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                >
                <Link href={blog.url} target="_blank" className="group block h-full">
                    <article className="h-full p-8 rounded-sm bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] relative overflow-hidden group-hover:bg-secondary/20">
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                                    // {blog.platform}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                <span className="text-xs text-muted-foreground font-mono">{blog.date}</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors font-serif leading-tight">
                                {blog.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm md:text-base">
                                {blog.description}
                            </p>
                            
                            <div className="flex items-center text-primary text-sm font-medium tracking-wide uppercase group-hover:underline underline-offset-4">
                                Read Reflection <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </article>
                </Link>
                </motion.div>
            ))}
            </div>

            {/* External Platform Links */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >
                <h3 className="text-2xl font-serif italic mb-8 text-muted-foreground">More philosophical takes on...</h3>
                <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-6">
                    <Button variant="ghost" size="lg" className="text-base sm:text-lg hover:bg-transparent hover:text-primary underline-offset-4 hover:underline px-2 sm:px-8" asChild>
                        <Link href="https://substack.com" target="_blank">
                            Substack
                        </Link>
                    </Button>
                    <span className="text-muted-foreground/30 text-xl sm:text-2xl">/</span>
                    <Button variant="ghost" size="lg" className="text-base sm:text-lg hover:bg-transparent hover:text-primary underline-offset-4 hover:underline px-2 sm:px-8" asChild>
                        <Link href="https://medium.com" target="_blank">
                            Medium
                        </Link>
                    </Button>
                    <span className="text-muted-foreground/30 text-xl sm:text-2xl">/</span>
                    <Button variant="ghost" size="lg" className="text-base sm:text-lg hover:bg-transparent hover:text-primary underline-offset-4 hover:underline px-2 sm:px-8" asChild>
                        <Link href="https://streams.place/whycurious101" target="_blank">
                            Streams
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>
      <AppNavbar />
    </div>
  );
};

export default BlogsPage;
