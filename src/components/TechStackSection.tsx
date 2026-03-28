import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

interface Tech {
	name: string
	version?: string
	reason: string
}

interface Category {
	title: string
	emoji: string
	items: Tech[]
}

const categories: Category[] = [
	{
		title: 'Frontend',
		emoji: '🎨',
		items: [
			{
				name: 'React',
				version: '19.2.3',
				reason: 'Neueste Features, Server Components, optimale Performance',
			},
			{
				name: 'Next.js',
				version: '16.1.6',
				reason: 'SSR/SSG, App Router, optimiertes Routing, SEO',
			},
			{
				name: 'TypeScript',
				version: '5',
				reason: 'Type Safety, bessere DX, weniger Runtime Errors',
			},
			{
				name: 'Tailwind CSS',
				version: '4',
				reason: 'Utility-First, konsistentes Design System',
			},
			{
				name: 'Framer Motion',
				version: '12',
				reason: 'Fluessige Animationen, Gestensteuerung',
			},
			{ name: 'Lucide & Iconify', reason: 'Konsistente Iconografie' },
		],
	},
	{
		title: 'Backend & DB',
		emoji: '⚙️',
		items: [
			{ name: 'Node.js', reason: 'Fullstack JS via Next.js API Routes' },
			{
				name: 'Prisma',
				version: '6.19',
				reason: 'Type-safe ORM, Migrationen, DX',
			},
			{
				name: 'PostgreSQL (Neon)',
				reason: 'Serverless, kostenlos, skalierbar, ACID',
			},
		],
	},
	{
		title: 'Auth & Security',
		emoji: '🔐',
		items: [
			{ name: 'NextAuth.js 5', reason: 'JWT Sessions, Prisma Adapter, RBAC' },
			{ name: 'Bcrypt', reason: 'Secure Password Hashing (Salt Rounds: 10)' },
		],
	},
	{
		title: 'Real-Time & AI',
		emoji: '⚡',
		items: [
			{
				name: 'Pusher',
				reason: 'WebSocket Chat, Notifications, Auto-Reconnect',
			},
			{
				name: 'Groq API',
				reason: 'LPU-basierte schnelle Inference, Streaming',
			},
			{ name: 'Vercel AI SDK', reason: 'Streaming-Responses fuer KI-Chat' },
		],
	},
	{
		title: 'Utilities',
		emoji: '🧰',
		items: [
			{
				name: 'Zod',
				version: '4.3',
				reason: 'Schema Validation fuer Forms & API',
			},
			{
				name: 'React Leaflet',
				version: '5.0',
				reason: 'Interaktive Karte fuer Hilfsangebote',
			},
			{
				name: 'clsx & tailwind-merge',
				reason: 'Conditional Styling Utilities',
			},
		],
	},
]

const TechStackSection = () => {
	const [active, setActive] = useState(0)

	return (
		<SectionWrapper id='techstack' className='bg-card/50'>
			<SectionTitle subtitle='Moderne Technologien fuer eine robuste, skalierbare Plattform'>
				Tech Stack
			</SectionTitle>

			<div className='flex flex-wrap gap-2 justify-center mb-10'>
				{categories.map((c, i) => (
					<button
						key={i}
						onClick={() => setActive(i)}
						className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
							active === i
								? 'gradient-btn'
								: 'bg-muted text-muted-foreground hover:text-foreground'
						}`}
					>
						{c.emoji} {c.title}
					</button>
				))}
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={active}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					transition={{ duration: 0.25 }}
					className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
				>
					{categories[active].items.map((t, i) => (
						<div key={i} className='card-warm p-5 group'>
							<div className='flex items-baseline gap-2 mb-2'>
								<h4 className='font-semibold text-foreground'>{t.name}</h4>
								{t.version && (
									<span className='text-xs font-mono text-accent'>
										v{t.version}
									</span>
								)}
							</div>
							<p className='text-sm text-muted-foreground leading-relaxed'>
								{t.reason}
							</p>
						</div>
					))}
				</motion.div>
			</AnimatePresence>
		</SectionWrapper>
	)
}

export default TechStackSection
