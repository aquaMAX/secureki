import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { AboutHeader } from "../components/about/Header"
import { Customers } from "../components/about/Customers"
import { Footer } from "../components/body/Footer"
import Culture from "../components/about/Culture"
import StickyNav from "../components/navbar/StickyNav.js"
import Pictures from "../components/about/Pictures"
import { Join } from "../components/about/Join"


const About = () => (
  <>
    <AboutHeader />
    <Customers />
    <Culture />
    <Pictures />
    <Join />
    <Footer />
    <StickyNav />
  </>
)

export default About;