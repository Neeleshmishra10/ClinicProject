import React from "react";
import logodoctor from "../assets/doctorlogo.png"

 export function Footer() {
    return (
      <footer className="bg-brand-navy py-8 px-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between text-brand-gray">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logodoctor} alt="Maitri Wellness Clinic Footer Logo" className="h-9 w-auto mr-3" />
            <span className="font-bold text-lg tracking-tight">Maitri Wellness Clinic™ Homeopathy</span>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Maitri Wellness Clinic™ Homeopathy. All rights reserved.</div>
        </div>
      </footer>
    );
  }