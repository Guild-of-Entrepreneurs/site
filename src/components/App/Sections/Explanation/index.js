import React from "react"
import styled from "styled-components"
import { DollarSign, Search } from "react-feather"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import Heading from "../../../shared/styles/Heading"

const ExplanationStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
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

  p {
    max-width: 50rem;
  }

  .strong {
    color: var(--primary);
    font-weight: var(--strongWeight);
  }
`

// Info is the info icon and the info text
const InfoBlock = styled(Row)`
  --iconSize: 13rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: var(--strongWeight);
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
`

function Explanation() {
  return (
    <ExplanationStyles>
      <Content sd={2} ed={6} sm={3} em={9} sl={2} el={14}>
        <Heading>
          So, What is <span class="strong">The Guild of Entrepreneurs</span>?
        </Heading>
        <p>
          We are an independent, lean organisation that exists for the sole
          purpose of supporting entrepreneurs.
        </p>
      </Content>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={7}>
        <Search></Search>
        <h3>Transparent</h3>
        <p>All our financial information is open and available to everyone.</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
        <DollarSign></DollarSign>
        <h3>Profitable</h3>
        <p>We are bootstrapped and self-sufficient.</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={7}>
        <Search></Search>
        <h3>Decentralized</h3>
        <p>
          We don't have a central HQ, we are everywhere and nowhere. We operate
          on a democratic/decentralised decision making model.
        </p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
        <Search></Search>
        <h3>Community</h3>
        <p>
          We are a community of entrepreneurs, who are committed to building a
          deeply supportive entrepreneurial network.
        </p>
      </InfoBlock>
    </ExplanationStyles>
  )
}

export default Explanation
