import React from "react";
import logodoctor from "../assets/doctorlogo.png"


const LOGO = "https://ext.same-assets.com/4197587327/52350043.png";
const iconList = [
    {
        label: "Facebook",
        url: "https://facebook.com/weclinicin",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
    },
    {
        label: "LinkedIn",
        url: "https://linkedin.com/company/weclinic",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    },
    {
        label: "Instagram",
        url: "https://instagram.com/weclinicin",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    },
    {
        label: "YouTube",
        url: "https://youtube.com/@WeClinicHomeopathy",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
    },
];

export default function BottomFooter() {
    return (
        <footer className="bg-[#222] text-gray-200 pt-12 pb-20  px-20">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
                {/* About/Logo */}
                <div>
                    <div className="flex items-center space-x-2">
                        <img src={logodoctor} alt="Maitri Wellness Logo" className="h-10 w-auto" />
                        <span className="font-bold text-lg text-brand-white tracking-tight">Maitri Wellness Clinic</span>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed">
                    Maitri Wellness Clinic Homeopathy is india's fastest growing Homeopathy Clinic.<br />
                        We offer our services through Physical Clinic and TeleClinic.
                    </p>
                    <div className="flex space-x-3 mt-3">
                        {iconList.map(icon => (
                            <a
                                key={icon.label}
                                href={icon.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#333] rounded-lg w-10 h-10 flex justify-center items-center transition hover:bg-brand-blue"
                                aria-label={icon.label}
                            >
                                <img src={icon.icon} alt={icon.label} className="w-6 h-6 opacity-80" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2"><span>📍</span>AMW House,KH-6/172,Mangalpuri Colony,Kharagpur Gomtinagar Extension Sec -6 ,Lucknow</li>
                        <li className="flex items-start gap-2"><span>📱</span>+91 7081920300</li>
                        <li className="flex items-start gap-2"><span>✉️</span>info@maitriclinic.in</li>
                        <li><a href="#about" className="hover:text-brand-yellow">About Us</a></li>
                        <li><a href="#contact" className="hover:text-brand-yellow">Contact Us</a></li>
                        <li><a href="#consult" className="hover:text-brand-yellow">Appointment</a></li>
                    </ul>
                </div>

                {/* Disease */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Disease</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Piles Fistula Fissure</li>
                        <li>Male & Sexual Disorders</li>
                        <li>Gout, Sciatica, Cervical</li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">More</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-brand-yellow">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-brand-yellow">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-brand-yellow">Refund Policy</a></li>
                        <li><a href="#" className="hover:text-brand-yellow">We Are Hiring</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
