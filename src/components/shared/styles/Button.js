import styled from "styled-components"
import { Link } from "gatsby"

// A styled component for the button with primary background color and pill shape
const Button = styled(Link)`
  background: ${props => (props.light ? "none" : "var(--primary)")};
  border-radius: 50px;
  color: ${props => (props.light ? "var(--white)" : "var(--white)")};
  font-size: var(--buttonFontSize);
  font-weight: 800;
  padding: 1.5rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: var(--cubeTransition);
  border: ${props =>
    props.light ? "3px solid var(--white)" : "3px solid var(--primary)"};
  cursor: pointer;
  margin: 0.8rem 0;

  width: 18rem;

  &:hover {
    box-shadow: var(--level-3);
  }

  @media ${props => props.theme.breakpoints.s} {
    width: 22rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    margin: 1.5rem 2rem;
  }
`

export default Button
