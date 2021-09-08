import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const ContentStyles = styled(Row)`
  text-align: center;
  margin-top: 5rem;
  h3 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`

const Content = props => (
  <ContentStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <h3>{props.paragraphHeading}</h3>
    <p>{props.paragraph}</p>
  </ContentStyles>
)

export default Content
