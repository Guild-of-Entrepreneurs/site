import React from "react"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import styled from "styled-components"

const TextStyles = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  p {
    max-width: 58rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
`

const Text = ({ primary }) => (
  <TextStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <H2>
      <span className="strong">{primary.join_title.text}</span>
    </H2>
    <p>{primary.join_content.text}</p>
  </TextStyles>
)

export default Text
