"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Homesection1 from "@/components/Homesection1";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Homesection4 from "@/components/Homesection4";
import Homesection5 from "@/components/Homesection5";
import { useRef } from "react";

export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null); // Specify type
  const aboutRef = useRef<HTMLDivElement | null>(null); // Specify type
  const projectsRef = useRef<HTMLDivElement | null>(null); // Specify type
  const contactRef = useRef<HTMLDivElement | null>(null); // Specify type


  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div ref={homeRef} id="home-section">
        <Homesection1 />
      </div>

      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>

      <div ref={projectsRef} id="projects-section">
        <Projects />
      </div>
      <div ref={contactRef} id="contact-section">
        <Homesection4 />
      </div>
      <Homesection5 />
    </div>
  );
}
