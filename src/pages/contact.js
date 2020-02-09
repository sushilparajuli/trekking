import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"
const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default contact
