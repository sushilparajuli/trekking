import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
export default function error() {
  return (
    <main>
      <Layout>
        <header className={styles.error}>
          <Banner title="Oops! it's dead end">
          <Link to="/" className="btn-white">Back to homepage </Link>
        </Banner>
        </header>
      </Layout>
    </main>
  )
}
