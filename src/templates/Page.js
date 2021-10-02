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
              button_1_link {
                url
              }
              button_2_link {
                url
              }
            }
          }
          ... on PrismicPageDataBodyLeading {
            slice_type
            primary {
              leading_title {
                text
              }
              leading_title_pt_2 {
                text
              }
              paragraph_1_content {
                text
              }
              paragraph_1_heading {
                text
              }
              paragraph_2_content {
                text
              }
              paragraph_2_heading {
                text
              }
            }
          }
          ... on PrismicPageDataBodyHowWeWork {
            id
            primary {
              how_we_work_title {
                text
              }
              how_we_work_title_2 {
                text
              }
            }
            slice_type
            items {
              how_we_work_card_content {
                text
              }
              how_we_work_card_title {
                text
              }
            }
          }
          ... on PrismicPageDataBodyJoin {
            id
            slice_type
            primary {
              button_1_link {
                url
              }
              button_1_text {
                text
              }
              button_2_link {
                url
              }
              button_2_text {
                text
              }
              join_content {
                text
              }
              join_title {
                text
              }
            }
          }
          ... on PrismicPageDataBodyMembers {
            id
            items {
              member_description {
                text
              }
              member_name {
                text
              }
              member_photo {
                url
              }
              member_testimonial {
                text
              }
            }
            primary {
              members_content {
                text
              }
              members_title {
                text
              }
            }
            slice_type
          }
          ... on PrismicPageDataBodyBenefits {
            id
            slice_type
            primary {
              benefits_title {
                text
              }
            }
            items {
              benefit_content {
                text
              }
              benefit_title {
                text
              }
            }
          }
          ... on PrismicPageDataBodyExplanation {
            id
            primary {
              explanation_content {
                text
              }
              explanation_title {
                text
              }
              explanation_title_2 {
                text
              }
            }
            slice_type
            items {
              explanation_card_content {
                text
              }
              explanation_card_title {
                text
              }
            }
          }
          ... on PrismicPageDataBodyArrowDivider {
            id
            slice_type
          }
          ... on PrismicPageDataBodyArrowDivider1 {
            id
            slice_type
          }
        }
      }
    }
  }
`
