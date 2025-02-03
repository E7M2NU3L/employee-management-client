import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import React from "react";
import {motion} from 'framer-motion'

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return <div className="py-24 overflow-x-clip bg-neutral-800 dark:bg-background">
        <div className="container">
            <h3 className="text-center text-white/80 text-xl">
                Already Chosen by these market leaders
            </h3>
            <div className="overflow-hidden flex mt-12 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0))]">
                <motion.div
                    className="flex flex-none gap-24 px-24"
                    animate={{ x: "-50%" }}
                    transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    }}
                >
                    {Array.from({ length: 2 }).map((_, i) => (
                    <React.Fragment key={i}>
                        {logos.map((logo) => (
                        <img src={logo.image} alt={logo.name} key={logo.name} />
                        ))}
                    </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    </div>;
}
