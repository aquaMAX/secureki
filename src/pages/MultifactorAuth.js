import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import StickyNav from "../components/navbar/StickyNav.js"
import Slider from '../components/body/Slider/Slider.js'

const MultifactorAuth = () => (
  <>
    <Slider />
    <GetStarted />
    <Footer />
    <StickyNav />
  </>
)

export default MultifactorAuth;


