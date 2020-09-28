import React from "react"
import { Link } from "gatsby"

import videoMP4 from '../../video/background_movie.mp4'
import videoWEBM from '../../video/background_movie.webm'
import Logo from '../../images/logo.svg'
import './Video.scss'

const Video = () => (
    <>
        <video className="background-video"  autoPlay loop muted>
            <source src={videoMP4} type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"></source>
            <source src={videoWEBM}  type="video/ogg"></source>
        </video>
        <div className="filter">
            <img src={Logo} alt="logo" className="filter__video-logo"/>
            <Link to="/o-mnie" className="filter__video-button">Poznaj mnie...</Link>
        </div>
    </>
)


export default Video