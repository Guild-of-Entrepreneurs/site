import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  Hero,
  Leading,
  Explanation,
  HowWeWork,
  Benefits,
  Members,
  Join,
} from "../components/App/Sections"
import { v4 as uuidv4 } from "uuid"
import ArrowDivider from "../components/App/Sections/ArrowDivider"

const PageSlices = ({ slices }) => {
  return (
    <>
      {slices.map(slice => {
        switch (slice.slice_type) {
          case "hero":
            return <Hero data={slice} key={uuidv4()}></Hero>
          case "leading":
            return <Leading data={slice} key={uuidv4()}></Leading>
          case "arrow_divider":
            return <ArrowDivider data={slice} key={uuidv4()}></ArrowDivider>
          case "arrow_divider1":
            return <ArrowDivider data={slice} key={uuidv4()}></ArrowDivider>
          case "explanation":
            return <Explanation data={slice} key={uuidv4()}></Explanation>
          case "how_we_work":
            return <HowWeWork data={slice} key={uuidv4()}></HowWeWork>
          case "benefits":
            return <Benefits data={slice} key={uuidv4()}></Benefits>
          case "members":
            return <Members data={slice} key={uuidv4()}></Members>
          case "join":
            return <Join data={slice} key={uuidv4()}></Join>
          default:
            return <h1>unrecogised watermelon slice</h1>
        }
      })}
    </>
  )
}

export default function SinglePage({ data: { prismicPage } }) {
  return (
    <Layout>
      <PageSlices slices={prismicPage.data.body}></PageSlices>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($slug: String) {
    prismicPage(uid: { eq: $slug }) {
      data {
        body {
          ... on PrismicPageDataBodyHero {
            slice_type
            primary {
              button_1_text {
                text
              }
              button_2_text {
                text
              }
            }
          }
          ... on PrismicPageDataBodyLeading {
            slice_type
          }
          ... on PrismicPageDataBodyMembers {
            slice_type
          }
          ... on PrismicPageDataBodyJoin {
            slice_type
          }
          ... on PrismicPageDataBodyHowWeWork {
            slice_type
          }
          ... on PrismicPageDataBodyExplanation {
            slice_type
          }
          ... on PrismicPageDataBodyBenefits {
            slice_type
          }
          ... on PrismicPageDataBodyArrowDivider {
            slice_type
          }
          ... on PrismicPageDataBodyArrowDivider1 {
            slice_type
          }
        }
      }
    }
  }
`
