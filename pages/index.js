// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { gsap } from "gsap";
// SECTIONS //
import HomeHero from "@/sections/home/HomeHero";
import Founder from "@/sections/home/Founder";
import OurProjects from "@/sections/home/Our_Projects";

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";
import Service from "@/sections/home/Services";

/** Home Page */
export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={`${styles.index_page} bg_secondary`}>
				<HomeHero />
				<Service />
				<OurProjects />
				<Founder />
			</main>
			<Footer />
		</div>
	);
}