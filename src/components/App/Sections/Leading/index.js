import React from "react"
import styled from "styled-components"

import FullWidthSection from "../../../Layout/FullWidthSection"
import Heading from "./Heading.js"
import Content from "./Content.js"

const LeadingStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
  width: 100%;

  background: var(--white);

  align-content: center;
`

function Leading() {
  return (
    <LeadingStyles>
      <Heading></Heading>
      <Content
        paragraphHeading="Being an entrepreneur is tough."
        paragraph="We are often in situations where we don't know what to do and we struggle to even know what to Google or who to ask."
      ></Content>
      <Content
        paragraphHeading="We need to support each other."
        paragraph="We believe that entrepreneurship is a powerful force for positive change. To increase the chances of successfully making this change we need help which is best when it comes from fellow entrepreneurs."
      ></Content>
    </LeadingStyles>
  )
}

export default Leading
