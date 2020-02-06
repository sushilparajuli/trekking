import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops! it's dead end">
          <AniLink paintDrip hex="#3fd0d4" to="/" className="btn-white">
            Back to homepage{" "}
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
