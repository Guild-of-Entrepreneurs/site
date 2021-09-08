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
  <HeadingStyles sd={2} ed={6} sm={2} em={10} sl={4} el={12}>
    <h2>
      If you want to be, are or support entrepreneurs,{" "}
      <span className="highlight">The Guild is for you.</span>
    </h2>
  </HeadingStyles>
)

export default Heading
