import styled from 'styled-components'

/**
 * 如果一个Layout和另外一个Layout相邻，& ~ & {margin-top: 64px }
 * 这样的话，margin只在My Service 和Client之间；
 * 这样只有一个layout的时候，上面不会有margin top
 * */
const Wrapper = styled.div`
  & ~ & {
    margin-top: 64px;
  }
`

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`
const Content = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
`

const Layout = ({
                    title,
                    children
                }) => (
    <Wrapper>
        <Title> {title} </Title>
        <Content> {children} </Content>
    </Wrapper>
)


export default Layout