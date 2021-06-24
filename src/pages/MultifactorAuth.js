import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { MFAHeader } from "../components/MFA/Header"
import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import { Offer } from "../components/MFA/Offer.js"
import { ChartOffer } from "../components/MFA/ChartOffer.js"
import { LastOffer } from "../components/MFA/LastOffer.js"
import StickyNav from "../components/navbar/StickyNav.js"
import Slider from '../components/body/Slider/Slider.js'

const MultifactorAuth = () => (
  <>
    
    <MFAHeader />
    <Slider />
    <ChartOffer />
    <Offer />
    <LastOffer />
    <GetStarted />
    <Footer />
    <StickyNav />
  </>
)

export default MultifactorAuth;


