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
import Seo from "../components/shared/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to the Guild of Entrepreneurs. Join us to connect with like-minded individuals and grow your business."
    />
    <Hero></Hero>
    <Leading></Leading>
    <ArrowDivider></ArrowDivider>
    <Explanation></Explanation>
    <HowWeWork></HowWeWork>
    <Benefits></Benefits>
    <Members></Members>
    <ArrowDivider></ArrowDivider>
    <Join></Join>
  </Layout>
)

export default IndexPage
