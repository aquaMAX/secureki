import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navigation from "../components/navbar/Navigation"

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
  <div>
  <Navigation>test</Navigation>
    <ul>
      {data.allStrapiArticles.edges.map(articles => (
        <li key={articles.id}>{articles.node.id}</li>
      ))}
    </ul>
  </div>
)

export default IndexPage




