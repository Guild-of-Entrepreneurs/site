import * as React from "react"

import Layout from "../components/Layout/"
import {
  Hero,
  Leading,
  Explanation,
  HowWeWork,
  Benefits,
  Members,
  Join,
} from "../components/App/Sections"
import ArrowDivider from "../components/App/Sections/ArrowDivider"
// import Seo from "../components/shared/Seo"

const IndexPage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <Hero></Hero>
    <Leading></Leading>
    <ArrowDivider></ArrowDivider>
    <Explanation></Explanation>
    <HowWeWork></HowWeWork>
    <Benefits></Benefits>
    <Members></Members>
    <Join></Join>
  </Layout>
)

export default IndexPage
