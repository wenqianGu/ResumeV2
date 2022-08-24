
import styled from 'styled-components'

 const Wrapper = styled.div`
   font-size: 1.5rem;
   font-weight: 500;
 `
 const Highlight = styled.span`
   color: #9a3737;
   margin-right: 0.5rem;
 `
const Logo = () => (
    <Wrapper>
        <Highlight>Lisa</Highlight>
         GU
    </Wrapper>
)

export default Logo;