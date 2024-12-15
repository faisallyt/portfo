"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import leetcodeSubmissions from "../public/Leetcode-submits.png";
import leetcode from "../public/Leetcode.png";
import githubContributions from "../public/github-contributions.png";
import gfgContributions from "../public/GfgContributions.png";
import githubStreak from "../public/github-streak.png";
import codeStudio from "../public/codeStudio.png";
import Image from "next/image";

const Profiles = () => {
  return (
    <div id="profiles">
      <BentoGrid className="max-w-4xl  md:auto-rows-[11rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            //   description={item.description}
            header={item.header}
            className={item.className}
            //   icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Profiles;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Github Contributions",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Image
        src={githubContributions}
        alt="Github Contributions"
        className="rounded-xl"
        // width={400}
        height={800}
      />
    ),
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Github Streak",
    // description: "Dive into the transformative power of technology.",
    header: (
      <Image
        src={githubStreak}
        alt="Github Contributions"
        className="rounded-xl"
        // width={400}
        height={800}
      />
    ),
    className: "md:col-span-1 items-center justify-center",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leetcode Solutions",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        src={leetcode}
        alt="LeetCode Submissions"
        className="rounded-xl"
        // width={400}
        height={800}
      />
    ),
    className: "md:col-span-1 items-center justify-center",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "LeetCode Submissions",
    // description:
    //   "Understand the impact of effective communication in our lives.",
    header: (
      <Image
        src={leetcodeSubmissions}
        alt="LeetCode Submissions"
        className="rounded-xl"
        // width={400}
        height={800}
      />
    ),
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "GFG Contributions",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Image
        src={gfgContributions}
        alt="LeetCode Submissions"
        className="rounded-xl h-[9rem]"
        // width={400}
        height={300}
      />
    ),
    className: "md:col-span-2 items-center justify-center ",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leetcode Solutions",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        src={codeStudio}
        alt="LeetCode Submissions"
        className="rounded-xl h-[9rem] w-[15rem]"
        // width={400}
        height={800}
      />
    ),
    className: "md:col-span-1 items-center justify-center",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
