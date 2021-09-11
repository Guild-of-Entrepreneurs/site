import React from "react"
import styled from "styled-components"

const TestimonialStyles = styled.div`
  break-inside: avoid-column;
  width: 100%;
  background: var(--white);

  padding: 3.5rem 4rem;
  border-radius: 10px;

  margin-bottom: 3.7rem;
  text-align: left;
  box-shadow: var(--e1);

  transition: var(--cubeTransition);

  p,
  span,
  .about,
  img {
    transition: var(--cubeTransition);
    user-select: none;
    cursor: default;
  }

  &:hover {
    /* box-shadow: var(--e2); */

    p {
      color: var(--black);
    }

    img {
      border: 6px solid var(--primary);
    }
  }

  p {
    color: var(--gray-1);
    margin-bottom: 2rem;
  }

  span {
    font-weight: 200;
    font-size: 13px;
  }

  .about {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    background: var(--primary);
    object-fit: cover;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin-right: 1rem;
    border: 6px solid var(--gray-4);
  }
`

function Testimonial({ data: { content, name, subheading, src } }) {
  return (
    <TestimonialStyles>
      <p>{content}</p>
      <div className="about">
        <img src={src} alt="profile" />
        <div className="text">
          <h6>{name}</h6>
          <span>{subheading}</span>
        </div>
      </div>
    </TestimonialStyles>
  )
}

export default Testimonial
