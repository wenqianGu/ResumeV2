import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #9a3737 1px solid;

`

const Icon = styled.img`
  height: 64px;
`

const Title = styled.div`

`

const Content = styled.div`

`

const Service = ({
                     imgSrc,
                     alt,
                     title,
                     children,
                 }) => (
    <Wrapper>
        <Icon src={imgSrc} alt={alt} />
        <Title>{title}</Title>
        <Content>{children}</Content>
    </Wrapper>
)
export default Service