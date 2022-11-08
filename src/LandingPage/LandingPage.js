import React from 'react'
import Navbar from './Navbar'
import './LandingPage.css'
import Section1 from './Section1'
import TeamSection from './TeamSection'
import SectionDivider from './SectionDivider'
import RoadMap from './RoadMap'
import Footer from './Footer'
import IntroSection from './IntroSection'
import HeaderInfo from './HeaderInfo'
import MVV from './MVV'
import WhyDrugCipher from './WhyDrugCipher'
import MobileNavbar from './MobileNavbar'
import NewsLetter from './NewsLetter'
export default function LandingPage() {
    return (
            <div className='m-0 p-0'>
                <HeaderInfo />
                <Navbar />
                <MobileNavbar />
                <Section1 />
                <IntroSection />
                <WhyDrugCipher />
                <SectionDivider />
                <MVV/>
                <SectionDivider />
                <TeamSection />
                <RoadMap />
                <NewsLetter />
                <SectionDivider />
                <Footer />
            </div>
    )
}
