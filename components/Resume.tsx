"use client";
import React from "react";
import { ContainerScroll } from "./ui/Container-scroll-animation";
import { HoverBorderGradient } from "./ui/Hover-border-gradient";
import Image from "next/image";
import ResumeSS from "../public/Resume-SS.png";

// import ResumePdf from "../public/FaisalDilshadResume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between " id="resume">
      <div>
        <ContainerScroll titleComponent={"Checkout my "}>
          <ResumeImage />
        </ContainerScroll>
      </div>
      <div className="flex justify-center items-center">
        <HoverBorderGradient>
          <DownloadButton />
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Resume;

const ResumeImage = () => {
  return (
    <div>
      <Image src={ResumeSS} alt="Resume" />
    </div>
  );
};

const DownloadButton = () => {
  return (
    <a
      href="/ResumeFaisalDilshad.pdf"
      download="FaisalDilshadResume.pdf"
      className="text-white hover:text-gray-900 px-4 py-2 rounded-md">
      Download Resume
    </a>
  );
};
