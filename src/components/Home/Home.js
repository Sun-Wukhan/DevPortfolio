import React from 'react'
import Button from "react-bootstrap/Button";
import './Home.css'


const Home = () => {
    return (
        <div className="page-container">
            <video src="https://player.vimeo.com/external/403653000.sd.mp4?s=066ac7d7f695399213a22b2f704348470ebfa2ff&profile_id=139&oauth2_token_id=57447761" autoPlay loop muted />
            <h1>Navid's</h1>
            <p>Developer Portfolio!</p>
            <div>
                <a className='mr2' href="https://mailchi.mp/8afb44ae0359/navthedev">
                    <Button className='btn ma1 mh0' variant="outline-light">Subscribe</Button>
                </a>
                <a href="/AliAbrarKhan-Resume.pdf" download>
                    <Button className='btn ma1 mh0 mr2' variant="outline-light">Resume</Button>
                </a>
            </div>
        </div>
    )
}

export default Home
