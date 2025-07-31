import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import AOS styles

// --- SVG Icon Components (replaces lucide-react) ---
const Zap = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);
const Power = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><path d="M12 2v10"/></svg>
);
const Code = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const Moon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);
const Sun = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
const Menu = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const X = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const ShieldCheck = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const Rocket = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.2-.86-3.15.05z"/><path d="m12 15-3-3a9 9 0 0 1 3-12h5.5a9 9 0 0 1 1.81 1.81l-3 3-2.5-2.5-2.5 2.5z"/><path d="m21.5 21.5-3-3-2.5 2.5-2.5-2.5 3-3 2.5 2.5z"/></svg>
);


// Main App Component
const App = () => {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('dark'); // Default to dark
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true,      // Whether animation should happen only once
        });
    }, []);

    const toggleTheme = () => {
        // Theme toggling is disabled for a forced dark theme as requested.
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full font-sans selection:bg-green-500/30 selection:text-green-300 overflow-x-hidden">
            <CursorGlow />
            <BackgroundParticles />
            <div className="relative z-10">
                <Navbar theme={theme} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <HeroSection />
                <FeaturesSection />
                <TestimonialsSection />
                <CtaSection />
                <Footer />
            </div>
        </div>
    );
};

// --- Sub-components ---

// Cursor Glow Effect
const CursorGlow = () => {
    const [position, setPosition] = useState({ x: -300, y: -300 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setPosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            style={{
                background: `radial-gradient(800px at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.2), transparent 80%)`
            }}
        />
    );
};

// Animated Background with Particles
const BackgroundParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;

        const particles = [];
        const mathChars = ['Σ', '∫', '∂', '√', 'π', '∞', 'ƒ', '≈', '≠', '≤', '≥', '∇', '∴', '∵'];

        const createParticle = (x, y) => ({
            x: x || Math.random() * canvas.width,
            y: y || Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            char: Math.random() > 0.9 ? mathChars[Math.floor(Math.random() * mathChars.length)] : '•',
            color: `rgba(45, 212, 191, ${Math.random() * 0.6 + 0.1})`,
        });

        for (let i = 0; i < 150; i++) particles.push(createParticle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }
                ctx.fillStyle = p.color;
                ctx.font = `${p.size * 10}px monospace`;
                ctx.fillText(p.char, p.x, p.y);
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50" />;
};

// Subtle Floating Characters
const FloatingCharacters = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const characters = "10@#$%&";
        const particles = [];
        const particleCount = 75;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * 0.6 - 0.3,
                vy: Math.random() * 0.6 - 0.3,
                char: characters.charAt(Math.floor(Math.random() * characters.length)),
                size: Math.random() * 10 + 10,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x > canvas.width + p.size) p.x = -p.size;
                else if (p.x < -p.size) p.x = canvas.width + p.size;
                if (p.y > canvas.height + p.size) p.y = -p.size;
                else if (p.y < -p.size) p.y = canvas.height + p.size;
                
                ctx.font = `${p.size}px monospace`;
                ctx.fillStyle = `rgba(20, 184, 166, 0.2)`;
                ctx.fillText(p.char, p.x, p.y);
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    
    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-4 pointer-events-none" />;
};


// Animated Star Shower for Hero Section
const StarShower = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const stars = [];
        const numStars = 250;

        const createStar = () => {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 0.5;
            return {
                x: canvas.width / 2,
                y: canvas.height / 2,
                radius: Math.random() * 2 + 0.5,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0,
                maxLife: Math.random() * 100 + 80
            };
        };

        for (let i = 0; i < numStars; i++) stars.push(createStar());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#14b8a6';

            stars.forEach((star, index) => {
                star.x += star.vx;
                star.y += star.vy;
                star.life++;
                
                const opacity = Math.max(0, 1 - (star.life / star.maxLife));
                
                if (opacity === 0) {
                    stars[index] = createStar();
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(45, 212, 191, ${opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none" />;
};


// Navigation Bar
const Navbar = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (headerRef.current) {
                headerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const navItems = ['Home', 'Features', 'Testimonials', 'Contact'];

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 nav-v-light">
            <div className="container mx-auto px-4 py-3">
                <div className="relative bg-black/30 backdrop-blur-lg rounded-full border border-teal-500/20 shadow-lg shadow-teal-900/40 p-2">
                    <div className="flex items-center justify-between px-4">
                        <a href="#" className="text-2xl font-bold text-teal-300 flex items-center gap-2">
                            <Zap className="w-6 h-6 animate-pulse text-teal-400" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400">Glow</span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-2 relative">
                            {navItems.map(item => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm text-slate-300 hover:text-teal-300 transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="hidden md:inline-block px-4 py-2 text-sm bg-teal-500 text-slate-900 rounded-full hover:bg-teal-400 transition-all duration-300 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-400/30 transform hover:-translate-y-0.5">
                                Get Started
                            </button>
                            <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 px-4 pb-4 flex flex-col items-center space-y-4">
                            {navItems.map(item => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="block w-full text-center py-2 text-slate-300 hover:text-teal-300 transition-colors duration-300 rounded-md hover:bg-teal-400/10" onClick={() => setIsMenuOpen(false)}>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
            <style jsx global>{`
                .nav-v-light::after {
                    content: '';
                    position: fixed;
                    top: 5rem; 
                    left: var(--mouse-x, 50%);
                    width: 1px;
                    height: 100vh;
                    background: linear-gradient(
                        to bottom,
                        rgba(20, 184, 166, 0.5) 0%,
                        rgba(20, 184, 166, 0) 50%
                    );
                    transform: translateX(-50%);
                    pointer-events: none;
                    opacity: 0.5;
                    transition: opacity 0.3s;
                }
                .nav-v-light:hover::after {
                    opacity: 1;
                }
            `}</style>
        </header>
    );
};

// Hero Section (UPDATED with custom animation)
const HeroSection = () => (
    <main id="home" className="relative container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center pt-24 overflow-hidden">
        <FloatingCharacters />
        <StarShower />
        <div className="relative z-10 flex flex-col items-center">
            {/* --- Style block for the new animation --- */}
            <style jsx>{`
                .at-item {
                    animation-name: focus-in-contract;
                    animation-duration: 1.5s;
                    animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
                    animation-fill-mode: backwards; /* Start in the 'from' state before delay */
                }
                @keyframes focus-in-contract {
                    0% {
                        letter-spacing: 0.5em;
                        filter: blur(12px);
                        opacity: 0;
                    }
                    100% {
                        filter: blur(0);
                        opacity: 1;
                    }
                }
            `}</style>
    
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6">
                {/* The user's requested animation is applied to the spans below */}
                <div className='at-container'>
                    <span className="at-item block" style={{ animationDelay: '0.2s' }}>
                        No Time Limit Prop Firm
                    </span>
                    <span 
                        className="at-item block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500 mt-2" 
                        style={{ animationDelay: '0.7s' }}
                    >
                        Conquer the Market
                    </span>
                </div>
            </h1>

            <p data-aos="fade-up" data-aos-delay="1500" className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
                We craft digital experiences that glow with creativity and innovation, designed to captivate and drive results.
            </p>
            <div data-aos="fade-up" data-aos-delay="1700" className="flex flex-wrap gap-4 justify-center">
                <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-teal-400 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md hover:shadow-teal-400/40">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
                        <Code className="w-6 h-6" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-teal-400 transition-all duration-300 transform group-hover:translate-x-full ease">Explore Work</span>
                    <span className="relative invisible">Explore Work</span>
                </button>

               <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-amber-400 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md hover:shadow-amber-400/40">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                        <Code className="w-6 h-6" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-amber-400 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Know More
                    </span>
                    <span className="relative invisible">Know More</span>
                </button>
            </div>
        </div>
    </main>
);

// Features Section (UPDATED with AOS)
const FeaturesSection = () => (
    <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto lg:max-w-none">
                <div className="text-center">
                    <h2 data-aos="zoom-in-up" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Everything you need to deploy your app</h2>
                    <p data-aos="zoom-in-up" data-aos-delay="150" className="mt-4 text-lg text-slate-400">We've built a platform that's ready for anything.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                    <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col items-center text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-teal-500/50 transition-colors duration-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-lg font-medium text-white">Blazing Fast</h3>
                        <p className="mt-2 text-base text-slate-400">Our infrastructure is optimized for speed, ensuring your users have a seamless experience.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col items-center text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-teal-500/50 transition-colors duration-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-lg font-medium text-white">Secure & Reliable</h3>
                        <p className="mt-2 text-base text-slate-400">With enterprise-grade security, your data and applications are always protected.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500" className="flex flex-col items-center text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-teal-500/50 transition-colors duration-300">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                            <Rocket className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-lg font-medium text-white">Scales with You</h3>
                        <p className="mt-2 text-base text-slate-400">From small projects to large-scale applications, our platform grows with your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Testimonials Section (UPDATED with AOS)
const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto lg:max-w-4xl">
                <figure className="text-center" data-aos="fade-up">
                    <blockquote className="text-xl font-medium text-white sm:text-2xl">
                        <p>“Glow transformed our digital presence. Their attention to detail and creative vision is unparalleled. The results were simply spectacular.”</p>
                    </blockquote>
                    <figcaption className="mt-10" data-aos="zoom-in" data-aos-delay="300">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-green-600 p-1">
                            <img className="w-full h-full rounded-full bg-slate-900 object-cover" src="https://placehold.co/96x96/0a0a0a/34d399?text=AV" alt="Avatar" />
                        </div>
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">Jane Doe</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-slate-500">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-slate-400">CEO of InnovateX</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
);

// Call to Action Section (UPDATED with AOS)
const CtaSection = () => (
    <section id="contact" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div data-aos="zoom-in-up" className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl shadow-teal-900/50 rounded-3xl sm:px-16 border border-slate-800">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to ignite your project?</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">Let's build something extraordinary together. Reach out to us and see how we can illuminate your ideas.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="px-8 py-3 text-base font-semibold leading-7 text-slate-900 bg-teal-400 rounded-full hover:bg-teal-300 transition-colors duration-300">Get a free quote</button>
                </div>
                <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stopColor="#14b8a6" />
                            <stop offset="1" stopColor="#34d399" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </section>
);

// Footer Section (UPDATED with AOS)
const Footer = () => (
    <footer className="container mx-auto px-4 py-8 text-center text-slate-500">
        <div data-aos="fade-up" className="border-t border-slate-800/50 pt-8">
            <p>&copy; {new Date().getFullYear()} Glow Inc. All rights reserved.</p>
            <p className="text-xs mt-2">Crafted with <Power className="inline h-3 w-3 text-teal-500" /> and passion.</p>
        </div>
    </footer>
);

export default App;
