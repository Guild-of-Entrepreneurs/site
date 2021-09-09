import React from "react"
import styled from "styled-components"

import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import Content from "./Content.js"

const LeadingStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
  width: 100%;

  background: var(--white);

  align-content: center;
  text-align: center;
`

const Headline = styled(Row)``

function Leading() {
  return (
    <LeadingStyles>
      <Headline sd={2} ed={6} sm={1} em={11} sl={1} el={15}>
        <H2>
          If you want to be, are or support entrepreneurs,
          <br />
          <span className="strong">The Guild is for you.</span>
        </H2>
      </Headline>
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
