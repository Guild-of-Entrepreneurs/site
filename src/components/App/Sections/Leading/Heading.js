import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const HeadingStyles = styled(Row)`
  text-align: center;
  h2 {
    font-weight: 200;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .highlight {
    color: var(--primary);
    font-weight: 700;
  }
`

const Heading = () => (
  <HeadingStyles sd={2} ed={6} sm={1} em={11} sl={1} el={15}>
    <h2>If you want to be, are or support entrepreneurs,</h2>
    <h2 className="highlight">The Guild is for you.</h2>
  </HeadingStyles>
)

export default Heading
