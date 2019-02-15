import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Intro from "../components/intro"
import Image from "../components/image"
import HatefulSix from "../components/hatefulsix"
import SEO from "../components/seo"
import Disciplines from "../components/disciplines"

const IndexPage = () => (
  <Layout>
    <SEO title="How Sport Climbing Works" keywords={[`climbing`, `sports`, `sport climbing`, `olympic`]} />
    <Intro />
    <Disciplines />
    <HatefulSix />
  </Layout>
)

export default IndexPage
