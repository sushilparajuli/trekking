import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
const blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
    </Layout>
  )
}

// Page Query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
export default blog
