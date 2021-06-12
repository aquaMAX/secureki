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

const IndexPage = ({data}) => (
  <>
  <Navigation></Navigation>
  <Article />
  <ThreePrinciplesSection />
  <Slider />
  <DetailedOffer />
  <SecondDetailedOffer />
  <DetailsWithPictures />
  <Stories />

  </>
)

export default IndexPage




