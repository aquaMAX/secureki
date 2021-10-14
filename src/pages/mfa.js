import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { MFAHeader } from "../components/mfa/Header"
import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import { Offer } from "../components/mfa/Offer.js"
import { ChartOffer } from "../components/mfa/ChartOffer.js"
import { LastOffer } from "../components/mfa/LastOffer.js"
import { WhatsNew } from "../components/mfa/WhatsNew"
import StickyNav from "../components/navbar/StickyNav.js"
import Slider from '../components/body/Slider/Slider.js'

const MFA = () => (
  <>
    
    <MFAHeader />
    <Slider />
    <ChartOffer />
    <Offer />
    <LastOffer />
    <WhatsNew />
    <GetStarted />
    <Footer />
    <StickyNav />
  </>
)

export default MFA;


