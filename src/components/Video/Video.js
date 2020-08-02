import React from "react"
import { Link } from "gatsby"

import video from '../../video/background_movie.mp4'
import './Video.scss'

const Video = () => (
    <>
        <video className="background-video"  autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
        <Link to="/o-mnie" className="video-button">Poznaj mnie...</Link>
        <div className="filter"></div>
    </>
)

export default Video