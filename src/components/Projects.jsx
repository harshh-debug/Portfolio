import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

const Projects = () => {
	const [visibleCards, setVisibleCards] = useState(new Set());
	const observerRef = useRef();

const projects = [
  {
    id: 1,
    name: "Unseen Note",
    image: "/images/projects/unseen-note.png", 
    description:
      "Anonymous messaging platform to collect honest feedback via shared links, with secure authentication, a simple dashboard, and AI-driven suggestions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "ShadCN/UI",
      "Gemini API",
    ],
    liveDemo: "https://unseennote-blond.vercel.app/",
    githubRepo: "https://github.com/harshh-debug/UnseenNote",
  },
];


	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleCards(prev => new Set([...prev, entry.target.dataset.cardId]));
					}
				});
			},
			{ threshold: 0.1, rootMargin: '50px' }
		);

		observerRef.current = observer;

		const cards = document.querySelectorAll('[data-card-id]');
		cards.forEach(card => observer.observe(card));

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
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-6 p-3">
						Featured Projects
					</h2>
					<p className="text-l text-gray-400 max-w-3xl mx-auto leading-relaxed">
						A showcase of my work, featuring full-stack applications I’ve built while learning and exploring new ideas
					</p>
				</div>

				{/* Projects grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={project.id}
							data-card-id={project.id}
							className={`group relative transition-opacity duration-700 hover:-translate-y-1 hover:transition-transform hover:duration-200 ${
								visibleCards.has(project.id.toString()) 
									? 'translate-y-0 opacity-100' 
									: 'translate-y-8 opacity-0'
							}`}
							style={{ 
								transitionDelay: `${index * 100}ms`,
								transitionProperty: visibleCards.has(project.id.toString()) ? 'opacity, transform' : 'opacity, transform'
							}}
						>
							{/* Card background with glassmorphism */}
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-[#7d4a1f]/30 transition-all duration-500 ease-out"></div>
							
							{/* Hover glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#7d4a1f]/5 to-[#8b4513]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>

							{/* Card content */}
							<div className="relative rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_rgba(125,74,31,0.1)]">
								
								{/* Project image */}
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-full object-cover "
										onError={(e) => {
											// Fallback to placeholder if image doesn't exist
											e.target.src = `data:image/svg+xml;base64,${btoa(`
												<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
													<rect width="100%" height="100%" fill="#1f2937"/>
													<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">
														Project Image
													</text>
												</svg>
											`)}`;
										}}
									/>
									{/* Gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
								</div>

								{/* Project details */}
								<div className="p-6 flex flex-col h-full">
									
									{/* Project name */}
									<h3 className="text-xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-3 group-hover:from-[#e99b63] group-hover:via-[#f4b87a] group-hover:to-[#e99b63] transition-all duration-500 ease-out">
										{project.name}
									</h3>

									{/* Project description */}
									<p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
										{project.description}
									</p>

									{/* Technology tags */}
									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-2.5 py-1 bg-gray-900/60 border border-gray-700/50 rounded-md text-xs text-gray-300 group-hover:border-[#7d4a1f]/30 group-hover:text-gray-200 transition-all duration-500 ease-out"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Action buttons */}
									<div className="flex items-center justify-between gap-3 mt-auto">
										{/* Live demo button */}
										<a
											href={project.liveDemo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-[#7d4a1f] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#8b4513] transition-all duration-300 hover:shadow-[0_5px_15px_rgba(125,74,31,0.3)] group/button flex-1 justify-center"
										>
											Live Demo
											<svg className="w-3 h-3 group-hover/button:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>

										{/* GitHub repo button (optional) */}
										{project.githubRepo && (
											<a
												href={project.githubRepo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 hover:text-[#7d4a1f] hover:border-[#7d4a1f]/30 transition-all duration-300 group/github"
												aria-label="View source code"
											>
												<svg className="w-4 h-4 group-hover/github:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
												</svg>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div className="text-center mt-16">
					<p className="text-gray-400 mb-6">
						Want to see more of my work or discuss a custom project?
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 bg-[#7d4a1f] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#8b4513] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(125,74,31,0.2)] group"
						>
							Get In Touch
							<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
						<a
							href="https://github.com/harshh-debug"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium px-8 py-3 rounded-lg hover:text-[#7d4a1f] hover:border-[#7d4a1f]/30 transition-all duration-300 group"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							View All Projects
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;