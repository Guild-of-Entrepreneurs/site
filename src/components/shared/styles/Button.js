import styled from "styled-components"
import { Link } from "gatsby"

// A styled component for the button with primary background color and pill shape
const Button = styled.a`
  background: ${props =>
    props.light ? "none" : props.alternate ? "var(--white)" : "var(--primary)"};
  border-radius: 50px;
  color: ${props =>
    props.light
      ? "var(--white)"
      : props.alternate
      ? "var(--primary)"
      : "var(--white)"};
  font-size: var(--buttonFontSize);
  font-weight: 800;
  padding: 1.5rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: var(--cubeTransition);
  border: ${props =>
    props.light
      ? "3px solid var(--white)"
      : props.alternate
      ? "3px solid var(--primary)"
      : "3px solid var(--primary)"};
  cursor: pointer;
  margin: 0.8rem 0;

  width: 20rem;

  box-shadow: var(--e1);

  // hover animations
  &:hover {
    box-shadow: var(--e5);
    background: var(--purple-4);
    background: ${props => (props.light ? "var(--white)" : "var(--purple-2)")};
    color: ${props => (props.light ? "var(--primary)" : "var(--white)")};
    border: 3px solid var(--purple-2);
    border: ${props =>
      props.light ? "3px solid var(--white)" : "3px solid var(--purple-2)"};
    // move button up on hover
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: var(--e3);
  }

  @media ${props => props.theme.breakpoints.s} {
    width: 22rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    margin: 1.5rem 2rem;
  }
`

export default Button
