import React from "react"
import Layout from "../components/Layout"
//import Images from "../examples/Images"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"
import { graphql } from "gatsby"
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
      <BlogList />
    </Layout>
  )
}

// Page Query
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `
export default blog

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
