import AnerkennungPraemienSection from '@/components/AnerkennungPraemienSection'
import ApiSection from '@/components/ApiSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import AuthSection from '@/components/AuthSection'
import ChallengesSection from '@/components/ChallengesSection'
import DatabaseSection from '@/components/DatabaseSection'
import DeploymentSection from '@/components/DeploymentSection'
import FeaturesSection from '@/components/FeaturesSection'
import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import OverviewSection from '@/components/OverviewSection'
import TechStackSection from '@/components/TechStackSection'

const Index = () => (
	<div className='min-h-screen bg-background'>
		<Navbar />
		<HeroSection />
		<OverviewSection />
		<TechStackSection />
		<ArchitectureSection />
		<AuthSection />
		<FeaturesSection />
		<AnerkennungPraemienSection />
		<ApiSection />
		<DatabaseSection />
		<DeploymentSection />
		<ChallengesSection />
		<FooterSection />
	</div>
)

export default Index
