import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const HeadingStyles = styled(Row)`
  text-align: center;
`

const Heading = () => (
  <HeadingStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <h2>
      If you want to be, are or support entrepreneurs, <span>The Guild is for you.</span>
    </h2>
  </HeadingStyles>
)

export default Heading;