import React, { useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
    // const navigate = useNavigate()
    // let account = window.walletConnection.account();
    // useEffect(() => {
    //     if (account) {
    //         navigate('/KYC')
    //     }
    // }, [])
    return (
        <>
            <div>
                <HeaderInfo />
                <Navbar />
                <MobileNavbar />
                <Section1 />
                <IntroSection />
                <WhyDrugCipher />
                <SectionDivider />
                <MVV />
                <SectionDivider />
                <TeamSection />
                <RoadMap />
                <NewsLetter />
                <SectionDivider />
                <Footer />
            </div>
        </>
    )
}
