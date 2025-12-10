"use client";

import React from "react";
import blogsData from "../../../data/blogs.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const BlogPreview = () => {
  const topBlogs = blogsData.slice(0, 3); // Showing 3 for better grid

  return (
    <section className="py-24 bg-background w-full relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-2 text-primary font-medium"
                 >
                    <PenTool className="w-5 h-5" />
                    <span>Thinking out loud</span>
                 </motion.div>
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    Latest <span className="text-primary underline decoration-wavy underline-offset-4">Writings</span>
                 </motion.h2>
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg"
                >
                    Exploring the intersection of code, design, and user experience.
                 </motion.p>
            </div>
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <Button variant="outline" asChild className="hidden md:flex gap-2 group">
                    <Link href="/blogs">
                        Read all articles 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
             </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topBlogs.map((blog, index) => (
            <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
            >
                <Link href={blog.url} target="_blank" className="block h-full">
                    <Card className="h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary/50 backdrop-blur-sm border-t-4 border-t-transparent hover:border-t-primary">
                        <CardHeader>
                            <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground mb-3 uppercase">
                                <span>{blog.platform}</span>
                                <span>{blog.date}</span>
                            </div>
                            <CardTitle className="text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors">
                                {blog.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground line-clamp-3">
                                {blog.description}
                            </p>
                        </CardContent>
                        <CardFooter className="pt-0 text-primary font-medium flex items-center gap-2">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </CardFooter>
                    </Card>
                </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
             <Button variant="outline" size="lg" asChild className="w-full">
                <Link href="/blogs">View All Blogs</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
