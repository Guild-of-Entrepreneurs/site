import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import Heading from "../../../shared/styles/Heading"

const BenefitsStyles = styled(FullWidthSection)`
  text-align: center;
`

const Headline = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Benefit = styled(FullWidthSection)``

const Content = styled(Row)``

function Benefits() {
  return (
    <BenefitsStyles>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <Heading>
          <span className="strong">Benefits and Features</span>
        </Heading>
      </Headline>
      <Benefit>
        <Content sd={2} ed={6} sm={2} em={10} sl={3} el={7}>
          <h3>Learn</h3>
          <p>
            Learn from like-minded entrepreneurs with their own unique insights
            and stories. Grow your business through actionable advice and
            support.
          </p>
        </Content>
      </Benefit>
      <Benefit>
        <Content sd={2} ed={6} sm={2} em={10} sl={9} el={13}>
          <h3>Connect</h3>
          <p>
            Grow your network of like-minded entrepreneurs and mentors that you
            can support and call on for advice.
          </p>
        </Content>
      </Benefit>
      <Benefit>
        <Content sd={2} ed={6} sm={2} em={10} sl={3} el={7}>
          <h3>Collaborate</h3>
          <p>
            Start collaborating with other members so you can get your ideas off
            the ground faster.
          </p>
        </Content>
      </Benefit>
    </BenefitsStyles>
  )
}

export default Benefits
