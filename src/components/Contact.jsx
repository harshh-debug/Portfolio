import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Toast Component
const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === 'success';
  
  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className={`
        relative max-w-sm w-full bg-gradient-to-br backdrop-blur-sm rounded-xl border shadow-2xl p-4
        ${isSuccess 
          ? 'from-green-900/90 to-emerald-900/90 border-green-800/50 shadow-[0_0_30px_0_rgba(34,197,94,0.2)]' 
          : 'from-red-900/90 to-rose-900/90 border-red-800/50 shadow-[0_0_30px_0_rgba(239,68,68,0.2)]'
        }
      `}>
        <div className="flex items-start gap-3">
          <div className={`
            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
            ${isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'}
          `}>
            {isSuccess ? (
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium ${isSuccess ? 'text-green-200' : 'text-red-200'}`}>
              {isSuccess ? 'Message Sent!' : 'Something went wrong!'}
            </p>
            <p className="text-xs text-gray-300 mt-1">
              {message}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className={`
              flex-shrink-0 p-1 rounded-full transition-colors duration-200
              ${isSuccess 
                ? 'hover:bg-green-800/50 text-green-300 hover:text-green-200' 
                : 'hover:bg-red-800/50 text-red-300 hover:text-red-200'
              }
            `}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className={`
          absolute bottom-0 left-0 h-1 bg-gradient-to-r rounded-b-xl animate-shrink
          ${isSuccess 
            ? 'from-green-400 to-emerald-400' 
            : 'from-red-400 to-rose-400'
          }
        `} style={{
          width: '100%',
          animation: 'shrink 4s linear forwards'
        }} />
      </div>
    </div>
  );
};

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

	const showToast = (message, type = 'success') => {
		setToast({ isVisible: true, message, type });
	};

	const hideToast = () => {
		setToast(prev => ({ ...prev, isVisible: false }));
	};

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async () => {
		if (!form.name || !form.email || !form.message) {
			showToast("Please fill in all fields.", 'error');
			return;
		}
		
		setLoading(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					from_email: form.email,
					message: form.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);
			setLoading(false);
			showToast("Your message has been sent successfully! I'll get back to you soon.", 'success');
			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			setLoading(false);
			console.log(error);
			showToast("Failed to send message. Please try again or contact me directly.", 'error');
		}
	};

	const socialLinks = [
		{
			name: "Email",
			href: "mailto:harshcode0907@gmail.com?subject=Let%27s%20Collaborate&body=Hi%20Harsh%2C%0A%0AI%27d%20like%20to%20discuss...",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			description: "Drop me a line anytime",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/harsh-joshi-5a21a0328",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
			description: "Connect professionally",
		},
		{
			name: "GitHub",
			href: "https://github.com/harshh-debug",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			),
			description: "Check out my code",
		},
		{
			name: "X",
			href: "https://x.com/HarshJoshi92674",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M17.05 3h3.65l-7.95 9.08L21.5 21h-6.4l-4.57-5.72L5.25 21H1.6l8.63-9.86L2.5 3h6.45l4.11 5.18L17.05 3z" />
				</svg>
			),
			description: "Follow my thoughts",
		},
	];

	return (
		<>
			<style jsx>{`
				@keyframes shrink {
					from { width: 100%; }
					to { width: 0%; }
				}
				
				@keyframes slide-in-from-top-2 {
					from {
						transform: translateY(-0.5rem);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
				
				.animate-in {
					animation-fill-mode: both;
				}
				
				.slide-in-from-top-2 {
					animation-name: slide-in-from-top-2;
				}
				
				.duration-300 {
					animation-duration: 300ms;
				}
				
				.animate-shrink {
					animation: shrink 4s linear forwards;
				}
			`}</style>
			
			<Toast 
				message={toast.message}
				type={toast.type}
				isVisible={toast.isVisible}
				onClose={hideToast}
			/>
			
			<section className="sm:px-10 px-5 my-20 relative">
				{/* Background glow effects */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] rounded-full opacity-10 blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#a8551a] via-[#e99b63] to-[#b85c1e] rounded-full opacity-10 blur-3xl"></div>
				</div>

				<div className="relative min-h-screen flex items-center justify-center">
					<div className="max-w-7xl w-full relative z-10">
						{/* Main heading */}
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent mb-5">
								Let's Connect
							</h2>
							<p className="text-l text-gray-400 max-w-2xl mx-auto">
								Ready to bring your ideas to life? Let's start a conversation and
								create something amazing together.
							</p>
						</div>

						{/* Two column layout */}
						<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
							{/* Left column - Social Links */}
							<div className="space-y-8">
								<div>
									<h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
										Get in touch
									</h3>
									<p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
										I'm always excited to discuss new opportunities, creative
										projects, or just chat about technology. Feel free to reach
										out through any of these channels.
									</p>
								</div>

								<div className="space-y-6">
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-black/60 to-gray-900/60 border border-gray-800/50 hover:border-[#7d4a1f]/50 transition-all duration-300 hover:shadow-[0_0_20px_0_#7d4a1f]/10"
										>
											<div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
												{social.icon}
											</div>
											<div>
												<h4 className="text-white font-medium text-lg group-hover:bg-gradient-to-r group-hover:from-[#b85c1e] group-hover:via-[#e99b63] group-hover:to-[#a8551a] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-3000">
													{social.name}
												</h4>
												<p className="text-gray-400 text-sm">
													{social.description}
												</p>
											</div>
											<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<svg
													className="w-5 h-5 text-[#7d4a1f]"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</div>
										</a>
									))}
								</div>

								{/* Decorative gradient line */}
								<div className="h-px bg-gradient-to-r from-transparent via-[#e99b63] to-transparent opacity-50"></div>

								<div className="text-center lg:text-left">
									<p className="text-gray-500 text-sm">
										Prefer email? Just use the form—I usually reply within a day.
									</p>
								</div>
							</div>

							{/* Right column - Contact Form */}
							<div className="relative">
								{/* Form background with subtle glow */}
								<div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-2xl blur-xl"></div>

								<div className="relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 shadow-[0_0_50px_0_rgba(233,155,99,0.1)]">
									<div className="space-y-6">
										<div className="space-y-2">
											<label
												htmlFor="name"
												className="text-sm font-medium text-gray-300 uppercase tracking-wide"
											>
												Full Name
											</label>
											<input
												id="name"
												type="text"
												name="name"
												value={form.name}
												onChange={handleChange}
												required
												className="w-full bg-black/60 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e99b63]/50 focus:border-[#e99b63]/50 transition-all duration-300"
												placeholder="Enter your full name"
											/>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="email"
												className="text-sm font-medium text-gray-300 uppercase tracking-wide"
											>
												Email Address
											</label>
											<input
												id="email"
												type="email"
												name="email"
												value={form.email}
												onChange={handleChange}
												required
												className="w-full bg-black/60 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e99b63]/50 focus:border-[#e99b63]/50 transition-all duration-300"
												placeholder="Enter your email address"
											/>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="message"
												className="text-sm font-medium text-gray-300 uppercase tracking-wide"
											>
												Your Message
											</label>
											<textarea
												id="message"
												name="message"
												value={form.message}
												onChange={handleChange}
												required
												rows={5}
												className="w-full bg-black/60 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e99b63]/50 focus:border-[#e99b63]/50 transition-all duration-300 resize-none"
												placeholder="Tell me about your project or just say hello..."
											/>
										</div>

										<button
											type="button"
											onClick={handleSubmit}
											disabled={loading}
											className="group relative w-full bg-[#7d4a1f] text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:bg-[#8b4513] disabled:opacity-50 disabled:cursor-not-allowed "
										>
											<span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
												{loading ? (
													<>
														<svg
															className="animate-spin h-5 w-5"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
														>
															<circle
																className="opacity-25"
																cx="12"
																cy="12"
																r="10"
																stroke="currentColor"
																strokeWidth="4"
															></circle>
															<path
																className="opacity-75"
																fill="currentColor"
																d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
															></path>
														</svg>
														Sending...
													</>
												) : (
													<>
														Send Message
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
															/>
														</svg>
													</>
												)}
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;