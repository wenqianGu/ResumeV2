import Logo from './components/Logo';
import Navigation from './components/Navigation';

import styled from 'styled-components'

const Wrapper = styled.header`
  padding: 15px 0;
  display: flex;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
`

const Header = ({
                    activePage,
                    setActivePage,
                }) => (
    <Wrapper>
        <Left>
            <Logo/>
        </Left>
        <Right>
            <Navigation activePage={activePage} setActivePage={setActivePage} />
        </Right>
    </Wrapper>
)
export default Header;