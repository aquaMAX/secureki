import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import CareersHeader from "../components/careers/Header"

import { Footer } from "../components/body/Footer"

import StickyNav from "../components/navbar/StickyNav.js"

import { Join } from "../components/about/Join"
import { Body } from "../components/careers/Body"
import Openings from "../components/careers/Openings"


const Careers = () => (
  <>
    <CareersHeader />
    <Body />
    <Openings />
    <Join />
    <Footer />
    <StickyNav />
  </>
)

export default Careers;