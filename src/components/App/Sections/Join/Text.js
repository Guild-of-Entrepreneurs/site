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

const Text = () => (
  <TextStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <H2>
      <span className="strong">How to Join</span>
    </H2>
    <p>
      Membership is free. The Guild of Entrepreneurs is a community for
      entrepreneurs that provides the tools, resources, and connections we all
      need in order to succeed.
    </p>
  </TextStyles>
)

export default Text
