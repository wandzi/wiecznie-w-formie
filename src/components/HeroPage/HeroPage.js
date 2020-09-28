import React, { useState, useEffect } from "react"
import Loader from '../Loader/Loader'
import Video from '../Video/Video'
import './HeroPage.scss'

const HeroPage = () => {

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading((prevLoadingState) => !prevLoadingState)
    }, [])

    return loading ? <Video /> : <Loader />
    
}

export default HeroPage