import React from "react"
import Layout from "../components/Layout"
//import SimpleHero from "../components/SimpleHero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="This is title"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        >
          <AniLink paintDrip hex="#3fd0d4" to="/tours" className="btn-white">
            {" "}
            Explore Tours{" "}
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </>
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
