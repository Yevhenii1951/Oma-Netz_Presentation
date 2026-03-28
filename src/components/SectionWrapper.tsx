import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
	id: string
	children: ReactNode
	className?: string
}

const SectionWrapper = ({
	id,
	children,
	className = '',
}: SectionWrapperProps) => (
	<motion.section
		id={id}
		className={`py-20 md:py-28 ${className}`}
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: '-80px' }}
		transition={{ duration: 0.6, ease: 'easeOut' }}
	>
		<div className='section-container'>{children}</div>
	</motion.section>
)

export const SectionTitle = ({
	children,
	subtitle,
}: {
	children: ReactNode
	subtitle?: string
}) => (
	<div className='mb-12 md:mb-16 text-center'>
		<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4'>
			{children}
		</h2>
		{subtitle && (
			<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
				{subtitle}
			</p>
		)}
	</div>
)

export default SectionWrapper
