import Header from './components/Header';
import styled from 'styled-components'
import Page from "./components/Page/Page";
import {useEffect, useState} from "react";

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

const App = () => {
    // const stateCreator =  useState('BLOG_PAGE')
    // const ACTIVE_PAGE = stateCreator[0]
    // const setActivePage = stateCreator[1]
    const [ACTIVE_PAGE, setActivePage ] = useState('BLOG_PAGE')
    const [message, setMessage] = useState('test')
    useEffect(()=>{
      setMessage(`Page changed to ${ACTIVE_PAGE}`)
    }
    ,[ACTIVE_PAGE])

    useEffect(()=>{
      setTimeout(()=>{
        setMessage()
      },1000)
    },[message])

    return (<Wrapper>
      {message && (<div>{message}</div>)}
        <Container>
            <Header activePage={ACTIVE_PAGE} setActivePage = {setActivePage} />
            <Page activePage={ACTIVE_PAGE} />
        </Container>
    </Wrapper>)
}
export default App;
