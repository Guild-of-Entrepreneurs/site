import styled from "styled-components"
import Row from "../../../Layout/Row"

const ContentBlockStyles = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentBlock = ({ children }) => {
  return <ContentBlockStyles>{children}</ContentBlockStyles>
}
