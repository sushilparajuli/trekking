// Use Static query
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>{siteMetadata.title}</h1>
      <h1>{siteMetadata.author}</h1>
    </div>
  )
}

export default Header
