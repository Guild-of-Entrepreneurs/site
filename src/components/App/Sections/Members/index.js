import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"

const MembersStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
  text-align: center;

  .test {
    background: red;
    margin-bottom: 10px;
  }

  .testimonials {
    column-count: 1;
  }

  @media ${props => props.theme.breakpoints.m} {
    .testimonials {
      column-count: 2;
    }
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
`

const testData = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor amet porro eum rerum deserunt aut placeat enim labore! Ipsa minima asperiores repellat amet fuga in adipisci corrupti, quisquam ipsum eligendi dolores. Suscipit voluptatum laboriosam a commodi nobis! Minus hic in reiciendis, ea rem quaerat commodi deleniti ducimus quisquam soluta.",
  "bye",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis iste animi, pariatur officiis nisi rerum sequi, eaque aut facere asperiores fuga magni adipisci quasi fugiat ratione officia quas? Eligendi, iste?",
  "what",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum totam alias odit vero iste quos saepe accusamus inventore tempore?",
  "up",
  "dude",
]

const breakpoints = [
  {
    sd: 2,
    ed: 6,
    sm: 2,
    em: 6,
    sl: 2,
    el: 6,
  },
  {
    sd: 2,
    ed: 6,
    sm: 2,
    em: 6,
    sl: 6,
    el: 10,
  },
  {
    sd: 2,
    ed: 6,
    sm: 6,
    em: 10,
    sl: 10,
    el: 14,
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
      <Row className="testimonials" sd={2} ed={6} sm={2} em={10} sl={2} el={14}>
        {testData.map((item, index) => {
          // const { sd, ed, sm, em, sl, el } = breakpoints[index % 3]
          return (
            <div
              className="test"
              key={index}
              // sd={sd}
              // ed={ed}
              // sm={sm}
              // em={em}
              // sl={sl}
              // el={el}
            >
              <p>{item}</p>
            </div>
          )
        })}
      </Row>
    </MembersStyles>
  )
}

export default Members
