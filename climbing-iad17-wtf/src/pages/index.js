import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="How Sport Climbing Works" keywords={[`climbing`, `sports`, `sport climbing`, `olympic`]} />
    <Intro />
  </Layout>
)

export default IndexPage
