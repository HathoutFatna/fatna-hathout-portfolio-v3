import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function SocialNetworks() {
  return (
    <div className="hidden md:flex">
      <div className="fixed bottom-0 left-[3%] space-y-5 flex flex-col justify-center items-center">
        <Link
          href={"https://www.linkedin.com/in/hathout-fatna/"}
          target="_blank"
        >
          <Linkedin className="social-network-icon" />
        </Link>
        <Link href={"https://github.com/HathoutFatna"} target="_blank">
          <Github className="social-network-icon" />
        </Link>{" "}
        <Link href={"mailto:fatnahathout@gmail.com"} target="_blank">
          <Mail className="social-network-icon" />
        </Link>
        <div className="h-[100px] border-l border-gray-400"></div>
      </div>
      <div className="fixed bottom-0 right-[3%] space-y-5 flex flex-col justify-center items-center">
        <p className="[writing-mode:vertical-rl] text-xs text-gray-300">
          fatnahathout@gmail.com
        </p>
        <div className="h-[100px] border-l border-gray-400 ml-4.5 mt-5"></div>
      </div>
    </div>
  );
}

export default SocialNetworks;
