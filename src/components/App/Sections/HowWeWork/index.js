import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import Heading from "../../../shared/styles/Heading"

const HowWeWorkStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);

  background: var(--black);
  text-align: center;
`

const Headline = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`

function HowWeWork() {
  return (
    <HowWeWorkStyles>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <Heading light>
          Here's <span className="strong">How We Work</span>
        </Heading>
      </Headline>
    </HowWeWorkStyles>
  )
}

export default HowWeWork
