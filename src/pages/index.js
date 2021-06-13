import * as React from "react"
import { Link, graphql } from "gatsby"
import Navigation from "../components/navbar/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Article from '../components/body/Article.js'
import Slider from '../components/body/Slider/Slider.js'
import '../css/typography.css';
import { ThreePrinciplesSection } from "../components/body/ThreePrinciplesSection";
import { DetailedOffer } from "../components/body/DetailedOffer";
import { SecondDetailedOffer } from "../components/body/SecondDetailedOffer";
import { DetailsWithPictures } from "../components/body/DetailsWithPictures";
import { Stories } from "../components/body/Stories";
import { GetStarted } from "../components/body/GetStarted"
import { Footer } from "../components/body/Footer"
import { ControlledCarousel } from "../components/body/Carousel.js";

const IndexPage = ({data}) => (
  <>
  <Navigation></Navigation>
  <Article />
  <ThreePrinciplesSection />
  <ControlledCarousel />
  <Slider />
  <DetailedOffer />
  <SecondDetailedOffer />
  <DetailsWithPictures />
  <Stories />
  <GetStarted />
  <Footer />

  </>
)

export default IndexPage




