import React from 'react'
import './RoadMap.css'
export default function RoadMap() {
    return (
        <div className='whole_road_map' style={{ paddingBottom: 100 }}>
            <div className='text-center' style={{ marginTop: 70, paddingTop: 50 }}>
                <h1 className='heading_two'>Road Map</h1>
            </div>
            <section id="cd-timeline" className="cd-container">
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Build Drug Cipher Smart Contract</h2>
                        <p>Our certified Near developer will come up with the architecture and build the smart contract using Rust/AssemblyScript.</p>
                        <span className="cd-date">29th September, 2021</span>
                    </div>
                </div>
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-movie">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Complete The Workflow and Technical Test</h2>
                        <p>In this phase, we are going to complete flow and the technical phase to create a token on Near.</p>
                        <span className="cd-date">10th December, 2021</span>
                    </div>
                </div>
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Preparing Marketing Materials</h2>
                        <p>In this phase, marketing and branding the application will begin to take place by having business cards, flyers, adverts, funnel page and sponsored posts.</p>
                        <span className="cd-date">11th February, 2022</span>
                    </div>
                </div>
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Finalize UI/UX  Version 1.0</h2>
                        <p>In this phase, our UI/UX engineers will come up the first version of the project.</p>
                        <span className="cd-date">Jan 18</span>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Smart contract audit</h2>
                        <p>So, this phase is to audit our smart contract and make sure its stable.</p>
                        <span className="cd-date">Jan 18</span>
                    </div>
                </div>
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-movie">
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Partnership(s)/lauching</h2>
                        <p>In this phase we are going to partiner with approate bodies and lauch the project.</p>
                        <span className="cd-date">Jan 18</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
