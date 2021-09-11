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

const testData = [
  {
    content:
      "The Guild has been instrumental in moving emu-health forward on a positive trajectory. The education, networking opportunities, and accountability have been a way to keep us on track, which has been a key to us securing funding. The biggest catalyst for change for me personally has been the Guild Gather sessions - totally changed the way I operate! Thank you!",
    name: "Leigh Sherry",
    subheading: "Founder of DeskCoach",
    src: leigh,
  },
  {
    content:
      "Having a place to network with those within the startup ecosystem is essential to a startups success, and even more, founder support. The guild is the place where founder find other founders, and companies find their feet.",
    name: "Gemma Colbran",
    subheading: "Founder of dARTbase",
    src: gemma,
  },
  {
    content:
      "The Guild of Entrepreneurs offers a unique proposition; peer to peer sharing of innovative ideas, experience and expertise within a supportive community of like minded individuals focused on collaboration not self promotion.",
    name: "Bruce Tulloch",
    subheading: "Founder of --",
    src: bruce,
  },
  {
    content:
      "The Guild of Entrepreneurs is an amazing community of like-minded founders, industry experts, and passionate mentors who collaborate to build the startup ecosystem like no other. The Guild has allowed us to build our brand awareness and new business opportunities, as well as meeting so many incredible founders!",
    name: "Elizabeth Van Rooyen",
    subheading: "Founder of Diligr",
    src: elizabeth,
  },
  {
    content:
      "As a first time founder, I am often facing new situations and challenges. The Guild of Entrepreneurs library and community is like a secret weapon, with a tonne of useful resources and advice all in one place!",
    name: "Billie Trinder",
    subheading: "Founder of Remindly",
    src: billie,
  },
  {
    content:
      "The Guild to me is like the X-men or Sense8 - we all have a special powers and we come together to help each other out when needed. I enjoyed connecting with like minded individuals who also wanting to be the change they would like to see.",
    name: "Chris K O",
    subheading: "Founder of Upzeez",
    src: chris,
  },
]

function Members() {
  return (
    <MembersStyles>
      <Headline sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        <H2>
          <span className="stong">Meet Our Members</span>
        </H2>
        <p>Here's what our members have to say.</p>
      </Headline>
      <Testimonials sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        {testData.map(data => {
          return <Testimonial key={uuid()} data={data} />
        })}
      </Testimonials>
    </MembersStyles>
  )
}

export default Members
