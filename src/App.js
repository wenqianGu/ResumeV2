import Header from './components/Header';
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const App = () => (
  <Wrapper>
    <Header />
  </Wrapper>
)

/**
 * 所有component的首字母都要大写 
 * 首字母小写的时HTML 标签
 * HTML 不是一个program language， 写错之后不会报错；
 * JSX不会帮你去修复一些标签语法错误，比如忘记</> 关tag 
 * @returns 
 */
// const Header = () => {
//   return(
//     <header>Header</header>
//   )
// }

// const Body = () => {
//   return (
//     <div>Body</div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }


// const App = () =>{
//   return (
//     <div>
//       <Header/>
//       <Body/>
//       <Footer/>
//     </div>
//   )
// }

export default App;
