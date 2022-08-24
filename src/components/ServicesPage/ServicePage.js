import styled from 'styled-components'
import MyServices from "./components/MyServices";
import Clients from "./components/Clients";

const Wrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
const Title = styled.h2`
  margin:0;
  font-size: 44px;
  color: #fff;
  text-align: center;
  background-color: #2eca7f;
  padding: 32px 64px;
`
const Content = styled.div`
  padding: 32px 64px;
`

const ServicePage = () => (
    <Wrapper>
        <Title>Services</Title>
        <Content>
            <MyServices />
            <Clients />
        </Content>
    </Wrapper>
)

export default ServicePage