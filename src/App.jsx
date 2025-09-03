import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Aboutgrid from "./components/Aboutgrid";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
export default function App() {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true,
		});
	});
	return (
		<>
		 <Analytics />
			<Header></Header>
			  <ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<main>
							{/* gradient img */}
							<img
								className="absolute top-0 right-0 opacity-60 -z-10"
								src="/images/gradient.png"
								alt="gradient img"
							/>
							{/* Blur effect */}
							<div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] z-100"></div>
							<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
								<Hero />
								<Aboutgrid />
							</div>
              <CallToAction />
						</main>
					}
				></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/services" element={<Services />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/about" element={<AboutMe />}></Route>
			</Routes>
			<Footer />
		</>
	);
}
