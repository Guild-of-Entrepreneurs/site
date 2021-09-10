import React from "react"
import styled from "styled-components"
import { Aperture, DollarSign, Search, Users } from "react-feather"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2, H3 } from "../../../shared/styles/Heading"

const ExplanationStyles = styled(FullWidthSection)`
  /* min-height: var(--sectionHeight); */
  padding: var(--sectionPadding);
  /* background: red; */

  align-content: center;
  text-align: center;
`

// Content is the Title and paragraph
const Content = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 5rem;

  p {
    max-width: 50rem;
    margin-top: 3rem;
  }

  .strong {
    color: var(--primary);
    font-weight: var(--strongWeight);
  }

  @media ${props => props.theme.breakpoints.m} {
    margin-bottom: 8rem;

    .temp {
      display: none;
    }
  }

  @media ${props => props.theme.breakpoints.l} {
  }
`

// Info is the info icon and the info text
const InfoBlock = styled(Row)`
  --iconSize: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5rem;

  h3 {
    font-weight: var(--strongWeight);
    margin: 1rem 0 2rem 0;
  }

  p {
    max-width: 30rem;
  }

  svg {
    width: var(--iconSize);
    height: var(--iconSize);
    stroke-width: 1.5px;
    color: var(--gray-1);
  }
  @media ${props => props.theme.breakpoints.s} {
    --iconSize: 8rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    --iconSize: 10rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    margin-bottom: 8rem;
  }
`

function Explanation() {
  return (
    <ExplanationStyles>
      <Content sd={2} ed={6} sm={3} em={9} sl={2} el={14}>
        <H2>
          So, What is <br className="temp" />{" "}
          <span className="strong">The Guild of Entrepreneurs</span>?
        </H2>
        <p>
          We are an independent, lean organisation that exists for the sole
          purpose of supporting entrepreneurs.
        </p>
      </Content>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={7}>
        <Search></Search>
        <H3>Transparent</H3>
        <p>All our financial information is open and available to everyone.</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
        <DollarSign></DollarSign>
        <H3>Profitable</H3>
        <p>We are bootstrapped and self-sufficient.</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={7}>
        <Aperture></Aperture>
        <H3>Decentralized</H3>
        <p>
          We don't have a central HQ, we are everywhere and nowhere. We operate
          on a democratic/decentralised decision making model.
        </p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
        <Users></Users>
        <H3>Community</H3>
        <p>
          We are a community of entrepreneurs, who are committed to building a
          deeply supportive entrepreneurial network.
        </p>
      </InfoBlock>
    </ExplanationStyles>
  )
}

export default Explanation
