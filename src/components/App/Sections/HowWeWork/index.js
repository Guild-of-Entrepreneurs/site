import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import humanOne from "../../../../images/human-one.svg"
import humanTwo from "../../../../images/human-two.svg"
import humanThree from "../../../../images/human-three.svg"
import ContentBlock from "./ContentBlock"

const HowWeWorkStyles = styled(FullWidthSection)`
  /* min-height: var(--sectionHeight); */

  background: var(--black);
  padding: 20rem 0;
  text-align: center;
  position: relative;

  // Top Divider
  .custom-shape-divider-top-1631239164 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1631239164 svg {
    position: relative;
    display: block;
    width: calc(110% + 1.3px);
    height: 126px;
  }

  .custom-shape-divider-top-1631239164 .shape-fill {
    fill: #fff;
  }

  // Bottom Divider
  .custom-shape-divider-bottom-1631239274 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1631239274 svg {
    position: relative;
    display: block;
    width: calc(144% + 1.3px);
    height: 126px;
  }

  .custom-shape-divider-bottom-1631239274 .shape-fill {
    fill: #ffffff;
  }
`

const Headline = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5rem;

  @media ${props => props.theme.breakpoints.m} {
    margin-bottom: 8rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    margin-bottom: 10rem;
  }
`

const ContentRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 5rem 0;

  @media ${props => props.theme.breakpoints.l} {
    margin: 5rem 0;
  }
`

function HowWeWork() {
  return (
    <HowWeWorkStyles>
      <div class="custom-shape-divider-top-1631239164">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <H2 light>
          Here's <span className="strong">How We Work</span>
        </H2>
      </Headline>
      <ContentRow sd={2} ed={6} sm={4} em={8} sl={2} el={6}>
        <ContentBlock
          src={humanOne}
          title="It’s Ours"
          content="As we build this community together, we have the opportunity to create and share valuable content, deeper conversations, and online events."
        />
      </ContentRow>
      <ContentRow sd={2} ed={6} sm={4} em={8} sl={6} el={10}>
        <ContentBlock
          src={humanTwo}
          title="We Bring Content
And Community Together"
          content="Together, we will create new, fresh ideas and best practices that you can implement into your venture."
        />
      </ContentRow>
      <ContentRow sd={2} ed={6} sm={4} em={8} sl={10} el={14}>
        <ContentBlock
          src={humanThree}
          title="Meet Others"
          content="Entrepreneurship is lonely. You are venturing out and doing something most people don't understand. We get it. We are here to help each other."
        />
      </ContentRow>
      <div class="custom-shape-divider-bottom-1631239274">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </HowWeWorkStyles>
  )
}

export default HowWeWork
