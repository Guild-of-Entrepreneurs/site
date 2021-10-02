import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import Testimonial from "./Testimonial"

import bruce from "../../../../images/bruce.jpeg"
import gemma from "../../../../images/gemma.jpeg"
import elizabeth from "../../../../images/elizabeth.jpeg"
import chris from "../../../../images/chris.jpeg"
import leigh from "../../../../images/leigh.jpeg"
import billie from "../../../../images/billie.jpeg"

const MembersStyles = styled(FullWidthSection)`
  padding: var(--sectionPadding);
  text-align: center;

  .testimonials {
  }

  @media ${props => props.theme.breakpoints.l} {
    .testimonials {
      column-count: 3;
    }
  }
`

const Headline = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 2rem;
  }

  margin-bottom: 3rem;

  @media ${props => props.theme.breakpoints.m} {
    margin-bottom: 6rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    p {
      margin-top: 3.5rem;
    }
  }
`

const Testimonials = styled(Row)`
  overflow-y: visible;

  column-gap: 3.7rem;
  column-count: 1;

  @media ${props => props.theme.breakpoints.m} {
    column-count: 2;
  }
  @media ${props => props.theme.breakpoints.m} {
    column-count: 3;
  }
`

function Members({ data: { primary, items } }) {
  return (
    <MembersStyles>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <H2>
          <span className="stong">{primary.members_title.text}</span>
        </H2>
        <p>{primary.members_content.text}</p>
      </Headline>
      <Testimonials sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        {items.map(item => {
          return <Testimonial key={uuid()} item={item} />
        })}
      </Testimonials>
    </MembersStyles>
  )
}

export default Members
