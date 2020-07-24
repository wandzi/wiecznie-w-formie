import React from "react"

import video from '../../video/background_movie.mp4'
import './Video.scss'

const Video = () => (
    <>
        <video className="background-video"  autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
    </>
)

export default Video