import React from "react"
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader-background">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}


export default Loader