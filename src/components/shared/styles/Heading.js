import styled from "styled-components"

export const H2 = styled.h2`
  font-weight: var(--lightWeight);
  color: ${props => (props.light ? "var(--white)" : "var(--dark)")};
  transition: var(--cubeTransition);

  span,
  .strong {
    color: var(--primary);
    font-weight: var(--strongWeight);
  }
`

export const H3 = styled.h3`
  font-weight: var(--strongWeight);
  font-size: var(--h3);
  transition: var(--cubeTransition);
`

export const H4 = styled.h4`
  font-weight: var(--strongWeight);
  line-height: 2.5rem;
  font-size: var(--h4);
  transition: var(--cubeTransition);
`
