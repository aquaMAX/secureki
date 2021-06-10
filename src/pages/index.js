import * as React from "react"
import { Link, graphql } from "gatsby"
import Navigation from "../components/navbar/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export const query = graphql`
  {
    allStrapiArticles {
      edges {
        node {
          id
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <>
  <Navigation></Navigation>

  </>
)

export default IndexPage




