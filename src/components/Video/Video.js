import React from "react"
import { Link } from "gatsby"

import video from '../../video/background_movie.mp4'
import Logo from '../../images/logo.svg'
import './Video.scss'

const Video = () => (
    <>
        <video className="background-video"  autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
        <div className="filter">
            <img src={Logo} alt="logo" className="video-logo"/>
            <Link to="/o-mnie" className="video-button">Poznaj mnie...</Link>
        </div>
    </>
)

export default Video