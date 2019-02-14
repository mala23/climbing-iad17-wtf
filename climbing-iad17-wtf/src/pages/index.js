import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"
import Disciplines from "../components/disciplines"

const IndexPage = () => (
  <Layout>
    <SEO title="How Sport Climbing Works" keywords={[`climbing`, `sports`, `sport climbing`, `olympic`]} />
    <h1></h1>
    <p>Sport Climbing will be an olympic discipline in 2020. Athletes will have to demonstrate their strength in three disciplines to achieve gold. How this works and what the requirements are is explained here.</p> 
    <p>Speed, Boulder and Lead: these are the three disciplines constituting the «Olympic Combined» and are affording gold. Partaking in the qualifications are all athletes (20 women, 20 men). The six best athletes are qualifying for the finals.</p>
  <Disciplines />
  </Layout>
)

export default IndexPage
