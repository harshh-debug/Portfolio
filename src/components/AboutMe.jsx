import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
	const [isVisible, setIsVisible] = useState(false);
	const observerRef = useRef();
	const sectionRef = useRef();

	const skills = [
		"React",
		"Next.js",
		"Tailwind CSS",
		"ShadCN",
		"Node.js",
		"MongoDB",
		"Express.js",
		"C++",
		"Python",
		"Java",
		"C",
		"Git",
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1, rootMargin: "50px" }
		);

		observerRef.current = observer;

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	return (
		<section ref={sectionRef} className="sm:px-10 px-5 my-20 relative">
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header Section */}
				<div
					className={`text-center mb-16 transform transition-all duration-700 ease-out ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-6">
						About Me
					</h2>
					<p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
						A curious learner and passionate developer, always exploring how
						technology can make life simpler and smarter.
					</p>
				</div>

				{/* Two-column layout */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
					{/* Left column - Profile Image */}
					<div
						className={`lg:col-span-1 flex justify-center transform transition-all duration-700 ease-out ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: "200ms" }}
					>
						<div className="group relative">
							{/* Card background with glassmorphism */}
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"></div>

							{/* Hover glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/10 to-[#8b4513]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>

							<div className="relative p-8 transition-all duration-300 ease-out group-hover:shadow-[0_15px_35px_rgba(125,74,31,0.15)]">
								<div className="w-60 h-60 mx-auto rounded-xl overflow-hidden flex items-center justify-center text-white text-5xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300">
									<img
										srcSet="images/myimg1x.png 1x,images/myimg2x.png 2x"
										alt="Harsh Joshi"
										className="w-full h-full object-cover object-center"
							
									/>
								</div>
								<div className="text-center">
									<h3 className="text-xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-2">
										Harsh Joshi
									</h3>
									<p className="text-[#e99b63] font-medium">
										Software Developer
									</p>
									<div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/40 to-transparent"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Right column - Content */}
					<div className="lg:col-span-2 space-y-8">
						{/* Introduction */}
						<div
							className={`group relative transform transition-all duration-700 ease-out ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: "400ms" }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/10 to-[#8b4513]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>

							<div className="relative p-8 transition-all duration-300 ease-out group-hover:shadow-[0_15px_35px_rgba(125,74,31,0.15)]">
								<div className="mb-4 p-3 bg-gradient-to-br from-[#7d4a1f]/20 to-[#8b4513]/20 rounded-xl w-fit text-[#7d4a1f] group-hover:text-[#e99b63] transition-colors duration-300 ease-out">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<p className="text-gray-400 leading-relaxed text-base">
									Hi, I'm{" "}
									<span className="text-[#e99b63] font-semibold">
										Harsh Joshi
									</span>
									, a 19-year-old BTech IT student at KIET Group of Institutions
									and a passionate Full-Stack Developer. I love building clean,
									scalable applications that merge functionality with design.
									From crafting sleek interfaces with React, Next.js, and
									Tailwind to developing solid backends with Node.js and
									MongoDB, I enjoy turning ideas into real-world digital
									solutions. I’m always exploring new technologies, learning
									modern frameworks, and expanding my developer toolkit. Beyond
									coding, I find inspiration in music, movies, and fitness —
									things that help me stay creative and balanced.
								</p>
								<div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
							</div>
						</div>

						{/* Skills Section */}
						<div
							className={`group relative transform transition-all duration-700 ease-out ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: "600ms" }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/10 to-[#8b4513]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>

							<div className="relative p-8 transition-all duration-300 ease-out group-hover:shadow-[0_15px_35px_rgba(125,74,31,0.15)]">
								<div className="flex items-center mb-6">
									<div className="p-3 bg-gradient-to-br from-[#7d4a1f]/20 to-[#8b4513]/20 rounded-xl mr-4 text-[#7d4a1f] group-hover:text-[#e99b63] transition-colors duration-300 ease-out">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
											/>
										</svg>
									</div>
									<h3 className="text-2xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent group-hover:from-[#e99b63] group-hover:via-[#f4b87a] group-hover:to-[#e99b63] transition-all duration-300 ease-out">
										Skills & Technologies
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{skills.map((skill, index) => (
										<div
											key={index}
											className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:border-[#7d4a1f]/50 hover:bg-[#7d4a1f]/10 transition-all duration-300 ease-out cursor-default"
										>
											<div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7d4a1f] to-[#8b4513]"></div>
											<span className="text-xs">{skill}</span>
										</div>
									))}
								</div>
								<div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
							</div>
						</div>

						{/* Education Section */}
						<div
							className={`group relative transform transition-all duration-700 ease-out ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: "800ms" }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/10 to-[#8b4513]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>

							<div className="relative p-8 transition-all duration-300 ease-out group-hover:shadow-[0_15px_35px_rgba(125,74,31,0.15)]">
								<div className="flex items-center mb-6">
									<div className="p-3 bg-gradient-to-br from-[#7d4a1f]/20 to-[#8b4513]/20 rounded-xl mr-4 text-[#7d4a1f] group-hover:text-[#e99b63] transition-colors duration-300 ease-out">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M12 14l9-5-9-5-9 5 9 5z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
											/>
										</svg>
									</div>
									<h3 className="text-2xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent group-hover:from-[#e99b63] group-hover:via-[#f4b87a] group-hover:to-[#e99b63] transition-all duration-300 ease-out">
										Education
									</h3>
								</div>
								<div className="space-y-6">
									<div className="flex items-start group/item">
										<span className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
											🎓
										</span>
										<div>
											<h4 className="text-white font-semibold text-lg mb-1">
												BTech in Information Technology
											</h4>
											<p className="text-gray-400">
												KIET Group of Institutions (2024 – 2028)
											</p>
											<p className="text-gray-400">CGPA: 9/10</p>
										</div>
									</div>
									<div className="flex items-start group/item">
										<span className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
											🏫
										</span>
										<div>
											<h4 className="text-white font-semibold text-lg mb-1">
												Class 12
											</h4>
											<p className="text-gray-400">
												Aryaman Vikram Birla Institute of Learning
											</p>
											<p className="text-gray-400">Percentage: 95%</p>
										</div>
									</div>
									<div className="flex items-start group/item">
										<span className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
											🏫
										</span>
										<div>
											<h4 className="text-white font-semibold text-lg mb-1">
												Class 10
											</h4>
											<p className="text-gray-400">
												Aryaman Vikram Birla Institute of Learning
											</p>
											<p className="text-gray-400">Percentage: 94%</p>
										</div>
									</div>
								</div>
								<div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Closing Text */}
				<div
					className={`mt-16 text-center transform transition-all duration-700 ease-out ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
					style={{ transitionDelay: "1000ms" }}
				>
					<p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
						I'm always open to collaborations, internships, and exciting
						projects where I can grow and contribute. Let's connect and create
						something impactful together{" "}
						<span className="inline-block animate-pulse">🚀</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
