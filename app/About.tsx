import React from "react";
import { services } from "@/data.";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { fadeInUp, stagger } from "@/animations";

const About = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        My name is Henok Alemu, I&apos;m a skilled full-stack developer with
        expertise in building modern, responsive web applications. My focus is
        on React for the frontend, Node.js for the backend, and Next.js for
        server-side rendering. I enjoy creating visually appealing, functional
        web apps with attention to detail, and I excel in both team
        collaborations and independent work.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
