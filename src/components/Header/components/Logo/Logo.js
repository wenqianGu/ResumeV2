import styled from 'styled-components'
import Highlight from "../../../Highlight";

const Wrapper = styled.div`
   font-size: 1.5rem;
   font-weight: 500;
 `
const Logo = React.memo(
  () => (
    <Wrapper>
      <Highlight>Lisa</Highlight>
      GU
    </Wrapper>
  )
)

export default Logo;