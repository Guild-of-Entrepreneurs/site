import styled from "styled-components"

const Heading = styled.h2`
  font-weight: var(--lightWeight);
  color: ${props => (props.light ? "var(--white)" : "var(--dark)")};

  span,
  .strong {
    color: var(--primary);
    font-weight: var(--strongWeight);
  }
`

export default Heading
