import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const Services = () => {
	const [visibleCards, setVisibleCards] = useState(new Set());
	const observerRef = useRef();

	const services = [
		{
			id: 1,
			title: "UI/UX Design",
			description:
				"Designing intuitive and visually striking interfaces that prioritize usability, accessibility, and user delight.",
			technologies: [
				"React",
				"Next.js",
				"Tailwind CSS",
				"ShadCN",
				"DaisyUI",
				"Framer Motion",
			],
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.5}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 4h18v16H3V4z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 8h18M7 8v12"
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: "Frontend Development",
			description:
				"Developing fast, responsive, and interactive frontends with modern frameworks and state management solutions.",
			technologies: [
				"React",
				"Next.js",
				"TypeScript",
				"Zustand",
				"Redux",
				"Context API",
				"API Integration (REST API)",
				"Zod",
			],
			icon: (
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
			),
		},
		{
			id: 3,
			title: "Backend Development",
			description:
				"Building scalable, secure, and high-performance backends with robust authentication and efficient APIs.",
			technologies: [
				"Node.js",
				"Express.js",
				"Authentication (JWT, OAuth, Clerk)",
				"API rate limiting & validation",
			],
			icon: (
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
						d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
					/>
				</svg>
			),
		},
		{
			id: 4,
			title: "Database Management",
			description:
				"Designing and optimizing databases to ensure data integrity, high availability, and seamless scalability.",
			technologies: [
				"MongoDB",
				"Mongoose",
				"Redis",
				"Vector DB",
				"Data Modeling & Relations",
				"Context API optimization",
			],
			icon: (
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
						d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
					/>
				</svg>
			),
		},
		{
			id: 5,
			title: "Full Stack Integration",
			description:
				"Delivering complete, production-ready applications with seamless integration of frontend, backend, and cloud services.",
			technologies: [
				"MERN stack projects",
				"Real-time features (Socket.io, WebSockets, WebRTC)",
				"Netlify",
				"Vercel",
				"Render",
				"SEO best practices",
				"AWS EC2",
				"S3",
			],
			icon: (
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
						d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
					/>
				</svg>
			),
		},
		{
			id: 6,
			title: "AI Integration / AI Products",
			description:
				"Creating intelligent solutions powered by AI, from chatbots to RAG pipelines, that enhance automation and decision-making.",
			technologies: [
				"OpenAI API",
				"LangChain",
				"Gemini API",
				"Vector Embeddings",
				"RAG Systems",
				"AI Chatbots",
			],
			icon: (
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
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
		},
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleCards(
							(prev) => new Set([...prev, entry.target.dataset.cardId])
						);
					}
				});
			},
			{ threshold: 0.1, rootMargin: "50px" }
		);

		observerRef.current = observer;

		const cards = document.querySelectorAll("[data-card-id]");
		cards.forEach((card) => observer.observe(card));

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	return (
		<section className="sm:px-10 px-5 my-20 relative">
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-6">
						Services
					</h2>
					<p className="text-l text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Here’s what I specialize in as a full-stack developer — blending
						design, functionality, and technology to deliver impactful
						solutions.
					</p>
				</div>

				{/* Services grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={service.id}
							data-card-id={service.id}
							className={`group relative transform transition-all duration-500 ease-out hover:-translate-y-2 ${
								visibleCards.has(service.id.toString())
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							{/* Card background with glassmorphism */}
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"></div>

							{/* Hover glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/10 to-[#8b4513]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>

							{/* Card content */}
							<div className="relative p-8 h-full flex flex-col transition-all duration-300 ease-out group-hover:shadow-[0_15px_35px_rgba(125,74,31,0.15)]">
								{/* Service icon */}
								<div className="mb-6 p-3 bg-gradient-to-br from-[#7d4a1f]/20 to-[#8b4513]/20 rounded-xl w-fit text-[#7d4a1f] group-hover:text-[#e99b63] transition-colors duration-300 ease-out">
									{service.icon}
								</div>

								{/* Service title */}
								<h3 className="text-2xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-4 group-hover:from-[#e99b63] group-hover:via-[#f4b87a] group-hover:to-[#e99b63] transition-all duration-300 ease-out">
									{service.title}
								</h3>

								{/* Service description */}
								<p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
									{service.description}
								</p>

								{/* Technologies list */}
								<div className="space-y-3">
									<div className="flex flex-wrap gap-2">
										{service.technologies.map((tech, techIndex) => (
											<div
												key={techIndex}
												className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-700/50 rounded-lg text-sm text-gray-300 group-hover:border-[#7d4a1f]/50 transition-all duration-300 ease-out"
											>
												{/* Gradient dot */}
												<div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7d4a1f] to-[#8b4513]"></div>
												<span className="text-xs">{tech}</span>
											</div>
										))}
									</div>
								</div>

								{/* Decorative gradient line at bottom */}
								<div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
							</div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div className="text-center mt-16">
					<p className="text-gray-400 mb-6">
						Ready to start your project? Let's discuss how I can help bring your
						ideas to life.
					</p>
					<Link
						to="/contact"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7d4a1f] to-[#a8551a] text-white font-medium px-8 py-3 rounded-lg hover:from-[#8b4513] hover:to-[#b85c1e] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(125,74,31,0.3)] group"
					>
						Let's Work Together
						<svg
							className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
