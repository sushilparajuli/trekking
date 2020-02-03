import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <>
      <SimpleHero>
        <Banner
          title="This is title"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        >
          <Link to="/tours" className="btn-white">
            {" "}
            Explore Tours{" "}
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </>
  </Layout>
)
