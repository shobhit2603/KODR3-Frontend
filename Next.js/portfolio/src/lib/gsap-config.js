/**
 * GSAP Configuration — single plugin registration entry point.
 * ALL components should import { gsap, ScrollTrigger, useGSAP } from here.
 * Never call gsap.registerPlugin() anywhere else.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
