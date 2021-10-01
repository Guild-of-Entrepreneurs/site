import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Hero } from "../components/App/Sections"
import { v4 as uuidv4 } from "uuid"

const PageSlices = ({ slices }) => {
  return (
    <>
      {slices.map(slice => {
        switch (slice.slice_type) {
          case "hero":
            return <Hero data={slice} key={uuidv4()}></Hero>
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
        }
      }
    }
  }
`
