import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from '../components/body/Article.js'
import Slider from '../components/body/Slider/Slider.js'
import '../fonts/typography.css';

import { ThreePrinciplesSection } from "../components/body/ThreePrinciplesSection";
import { DetailedOffer } from "../components/body/DetailedOffer";
import { SecondDetailedOffer } from "../components/body/SecondDetailedOffer";
import { DetailsWithPictures } from "../components/body/DetailsWithPictures";
import Stories from "../components/body/Stories";
import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import StickyNav from "../components/navbar/StickyNav.js"

const IndexPage = ({data}) => (
  <>
   
  <Article />
  <ThreePrinciplesSection />

  <Slider />
  <DetailedOffer />
  <SecondDetailedOffer />
  <DetailsWithPictures />
  <Stories />
  <GetStarted />
  
  <Footer />

  <StickyNav />
  </>
)

export default IndexPage




