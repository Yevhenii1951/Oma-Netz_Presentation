import { motion } from 'framer-motion'

const HeroSection = () => (
	<section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
		{/* Floating background shapes */}
		<div className='absolute inset-0 pointer-events-none overflow-hidden'>
			<div className='absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-accent/10 animate-float blur-3xl' />
			<div className='absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-primary/8 animate-float-delayed blur-3xl' />
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[100px]' />
		</div>

		<div className='section-container relative z-10 text-center'>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}
				className='mb-8 inline-flex'
			>
				<div className='w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-primary flex items-center justify-center shadow-lg'>
					<span className='text-primary-foreground font-heading font-bold text-5xl md:text-6xl'>
						O
					</span>
				</div>
			</motion.div>

			<motion.h1
				className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-4'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				Oma Netz Kassel
			</motion.h1>

			<motion.p
				className='text-lg md:text-xl text-accent font-semibold mb-6'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				Präsentation des Abschlussprojekts – DCI Full-Stack Bootcamp
			</motion.p>

			<motion.div
				className='max-w-xl mx-auto mb-10 space-y-2'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				<p className='text-sm text-muted-foreground font-medium uppercase tracking-wider'>
					Entwickler:
				</p>
				<p className='text-lg md:text-xl text-foreground font-semibold'>
					Yevhenii Riabokon & Valeriia Kovalenko
				</p>
				<p className='text-sm text-muted-foreground leading-relaxed'>
					Ein Studentenprojekt im Rahmen der Full-Stack-Entwicklung (DCI)
					<br />
					Kassel, Deutschland 2026
				</p>
			</motion.div>

			<motion.div
				className='flex flex-wrap gap-4 justify-center'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.55 }}
			>
				<a
					href='https://oma-netz-final-project-valerija-yev.vercel.app/landing'
					target='_blank'
					rel='noopener noreferrer'
					className='gradient-btn px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide'
				>
					Live Demo →
				</a>
				<a
					href='#techstack'
					className='px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide border border-border bg-card text-foreground hover:bg-muted transition-colors'
				>
					Tech Stack ansehen
				</a>
			</motion.div>
		</div>
	</section>
)

export default HeroSection
