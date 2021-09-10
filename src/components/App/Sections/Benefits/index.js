import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2, H3 } from "../../../shared/styles/Heading"
import sceneOne from "../../../../images/scene-one.svg"
import sceneTwo from "../../../../images/scene-two.svg"
import sceneThree from "../../../../images/scene-three.svg"

const BenefitsStyles = styled(FullWidthSection)`
  padding: var(--sectionPadding);
  text-align: center;
`

const Headline = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Benefit = styled(FullWidthSection)`
  padding-top: 5rem;
  align-content: center;

  @media ${props => props.theme.breakpoints.m} {
    padding-top: 7rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    padding-top: 10rem;
  }
`

const Content = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    line-height: calc(2.5 * var(--h3));
  }

  p {
    max-width: 40rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    text-align: left;
    align-items: flex-start;
  }
`

const ImageWrapper = styled(Row)`
  img {
    max-width: min(500px, 100%);
  }

  @media ${props => props.theme.breakpoints.l} {
    img {
      max-width: 100%;
    }
  }
`

function Benefits() {
  return (
    <BenefitsStyles>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <H2>
          <span className="strong">Benefits and Features</span>
        </H2>
      </Headline>
      <Benefit>
        <ImageWrapper sd={2} ed={6} sm={2} em={10} sl={7} el={14}>
          <img src={sceneOne} alt="Learning Scene" />
        </ImageWrapper>
        <Content
          rd={2}
          rm={2}
          rl={1}
          sd={2}
          ed={6}
          sm={2}
          em={10}
          sl={3}
          el={7}
        >
          <H3>Learn</H3>
          <p>
            Learn from like-minded entrepreneurs with their own unique insights
            and stories. Grow your business through actionable advice and
            support.
          </p>
        </Content>
      </Benefit>
      <Benefit>
        <ImageWrapper sd={2} ed={6} sm={2} em={10} sl={2} el={9}>
          <img src={sceneTwo} alt="Study Scene" />
        </ImageWrapper>
        <Content
          rd={2}
          rm={2}
          rl={1}
          sd={2}
          ed={6}
          sm={2}
          em={10}
          sl={9}
          el={13}
        >
          <H3>Connect</H3>
          <p>
            Grow your network of like-minded entrepreneurs and mentors that you
            can support and call on for advice.
          </p>
        </Content>
      </Benefit>
      <Benefit>
        <ImageWrapper sd={2} ed={6} sm={2} em={10} sl={7} el={14}>
          <img src={sceneThree} alt="Brainstorm Scene" />
        </ImageWrapper>
        <Content
          rd={2}
          rm={2}
          rl={1}
          sd={2}
          ed={6}
          sm={2}
          em={10}
          sl={3}
          el={7}
        >
          <H3>Collaborate</H3>
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
