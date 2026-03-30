import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
	{ label: 'Übersicht', href: '#overview' },
	{ label: 'Tech Stack', href: '#techstack' },
	{ label: 'Architektur', href: '#architecture' },
	{ label: 'Features', href: '#features' },
	{ label: 'API', href: '#api' },
	{ label: 'Prämien', href: '#anerkennung-praemien' },
]

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 40)
		window.addEventListener('scroll', handler)
		return () => window.removeEventListener('scroll', handler)
	}, [])

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : ''}`}
			initial={{ y: -80 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='section-container flex items-center justify-between h-16'>
				<a href='#' className='flex items-center gap-2'>
					<div className='w-9 h-9 rounded-lg bg-primary flex items-center justify-center'>
						<span className='text-primary-foreground font-heading font-bold text-lg'>
							O
						</span>
					</div>
					<span className='font-heading font-semibold text-foreground text-lg hidden sm:inline'>
						Oma Netz
					</span>
				</a>

				<div className='hidden md:flex items-center gap-1'>
					{links.map(l => (
						<a
							key={l.href}
							href={l.href}
							className='px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors'
						>
							{l.label}
						</a>
					))}
				</div>

				<button
					className='md:hidden p-2 text-foreground'
					onClick={() => setOpen(!open)}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						className='md:hidden glass-nav border-t border-border'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						<div className='section-container py-4 flex flex-col gap-2'>
							{links.map(l => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className='px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors'
								>
									{l.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	)
}

export default Navbar
