import React from 'react'

import { PAMHeader } from "../components/PAM/Header.js"
import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import { Offer } from "../components/PAM/Offer.js"
import { Features } from "../components/PAM/Features.js"
import { LastOffer } from "../components/MFA/LastOffer.js"
import { WhatsNew } from "../components/MFA/WhatsNew"
import StickyNav from "../components/navbar/StickyNav.js"
import Slider from '../components/body/Slider/Slider.js'

const pam = () => {
    return (
        <>
            <PAMHeader />
            <Slider />
            <Offer />
            <Features />
            <WhatsNew />
            <GetStarted />
            <Footer />
            <StickyNav />
        </>
    )
}

export default pam;
