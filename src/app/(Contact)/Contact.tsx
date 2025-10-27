"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  File,
  Mail,
  Calendar,
  SendIcon,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <motion.div
        id="contact"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 0, opacity: 0 }}
        transition={{ type: "tween", duration: 3 }}
        viewport={{ once: true }}
        className="text-xl text-center "
      >
        Contact
      </motion.div>
      <div className="text-center space-y-1 mb-8 md:mb-12 px-4">
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-semibold capitalize md:mt-0">
          Let&apos;s Build Something Amazing Together
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Reach out and let's start a conversation
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl overflow-y-scroll md:overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background/30 backdrop-blur-sm rounded-xl shadow-xl border border-muted/40 p-4 md:p-8 mb-28 md:mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 inline-block border-b-2 border-primary pb-1">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <motion.a
                  href="mailto:parekhdhrish.pg@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Me</h3>
                    <p className="text-sm text-muted-foreground">
                      Drop me a line anytime
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://cal.com/whycurious101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Schedule a Meeting</h3>
                    <p className="text-sm text-muted-foreground">
                      Let's find a time to chat
                    </p>
                  </div>
                </motion.a>
              </div>

              <div className="pt-2 md:pt-4">
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                  Connect with Me
                </h3>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <a
                      href="https://github.com/dhrishp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <a
                      href="https://twitter.com/whycurious101"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <a
                      href="https://linkedin.com/in/dhrish-parekh-89a845262/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <a
                      href="https://dhrish-resume.tiiny.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Resume"
                    >
                      <File className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold inline-block border-b-2 border-primary pb-1">
                  Send a Message
                </h2>

                <div className="md:hidden mt-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white dark:text-black w-full group"
                    type="submit"
                    form="contact-form"
                    size="sm"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send
                      <SendIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              <form
                id="contact-form"
                action="https://formsubmit.co/cc9e32fafc72f282ca8d7e86196eeefb"
                method="POST"
                className="space-y-5 md:space-y-6"
              >
                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    name="email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary-foreground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    name="name"
                    id="name_of_person"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="name_of_person"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary-foreground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-500 dark:text-gray-400 mb-1 block"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="info"
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project, ideas, or questions..."
                    className="w-full p-3 md:p-4 text-sm border border-gray-300 rounded-lg bg-background focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none"
                    required
                  />
                </div>
                <div className="pt-2 hidden md:block">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white dark:text-black w-full group"
                    type="submit"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Send Message
                      <SendIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
