import Header from './components/Header';
import styled from 'styled-components'
import ServicePage from "./components/ServicesPage";

const Wrapper = styled.div`
  background-color: #f5f5f5;;
`
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const App = () => (
    <Wrapper>
        <Container>
            <Header/>
            <ServicePage/>
        </Container>
    </Wrapper>
)
export default App;
