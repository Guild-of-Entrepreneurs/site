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
  --iconSize: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  transition: var(--cubeTransition);
  border-radius: 20px;
  padding: 4rem 5rem;
  box-shadow: var(--e1);

  cursor: normal;

  h3,
  p,
  svg {
    transition: var(--cubeTransition);
  }

  /* margin-bottom: 5rem; */

  h3 {
    font-weight: 600;
    /* font-size: */
    margin: 1rem 0 1.5rem 0;
  }

  p {
    max-width: 35rem;
  }

  svg {
    width: var(--iconSize);
    height: var(--iconSize);
    stroke-width: 1px;
    color: var(--gray-1);
  }

  user-select: none;
  cursor: default;

  @media ${props => props.theme.breakpoints.s} {
    --iconSize: 5rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    --iconSize: 7rem;

    /* color: var(--gray-1); */

    &:hover {
      color: var(--black);
      box-shadow: var(--e3);
      transform: translateY(-2px);

      svg {
        color: var(--black);
        stroke-width: 1.5px;
      }
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    h3 {
      font-size: 3.2rem;
    }
    /* margin-bottom: 6rem; */
  }
`

function Explanation({ data: { primary, items } }) {
  return (
    <ExplanationStyles>
      <Content sd={2} ed={6} sm={3} em={9} sl={2} el={14}>
        <H2>
          {primary.explanation_title.text}
          <br className="temp" />
          <span className="strong">{primary.explanation_title_2.text}</span>
        </H2>
        <p>{primary.explanation_content.text}</p>
      </Content>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={8}>
        <Search></Search>
        <H3>{items[0].explanation_card_title.text}</H3>
        <p>{items[0].explanation_card_content.text}</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={8} el={13}>
        <DollarSign></DollarSign>
        <H3>{items[1].explanation_card_title.text}</H3>
        <p>{items[1].explanation_card_content.text}</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={2} em={6} sl={3} el={8}>
        <Aperture></Aperture>
        <H3>{items[2].explanation_card_title.text}</H3>
        <p>{items[2].explanation_card_content.text}</p>
      </InfoBlock>
      <InfoBlock sd={2} ed={6} sm={6} em={10} sl={8} el={13}>
        <Users></Users>
        <H3>{items[3].explanation_card_title.text}</H3>
        <p>{items[3].explanation_card_content.text}</p>
      </InfoBlock>
    </ExplanationStyles>
  )
}

export default Explanation
