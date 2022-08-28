# React Folder
## Component 划分度
* App
    * component
        * Header
            * component
                - Logo
                - Navigiation
                    - component
                        - Items
                          **Props**
* 当我们使用component时，相似的责任、UI会在
    * 不同的地方调用
    * 不同的形式调用

**JavaScript如何让一个function 满足不同的条件**
* sum 1+2 | 2+3
* arguments 通过传递参数的方法，让sum有不同的实现、业务场景
  **在JSX中**
* 在JSX中 花括号{} 里面的内容都是 JS
* 在JSX中，所有<>内的内容都被解释为HTML

* Item 可以接受参数
* props传参，就可以像HTML一样，传递数据给component，-》使compoent在不同的地方，渲染不同的责任
* props给我们一个类似于funciton传递参数的形式，->实现 在不同形式下，对相同的component进行多样化的渲染
* 在Item.js 内
```jsx
// const Item = (props) =>{
// <a className="navbar_item" href={props.href}>
// {props.text}
// </a>
// }

//解构赋值；
const Item = ({
    href,
    text,
}) =>{
<a className="navbar_item" href={href}>
{text}
</a>
}

```
* component传参
* 当我们使用html element时，相似的责任/UI会在 不同的地方调用，不同的形式调用
* attribute
```js
const sum = (...args) => args[0] + argos[1];
const sum = (a,b) => a+b;
sum(1,2);
```
* 在HTML中，我们使用attribute完成在不同地方，不同形式的调用
* key = value key value解构
* obj
* 在Navigation.js内：
```jsx
// <a id = "home" href="Home">Home </a>
const Navigation = () => (
<div className="navbar">
  <Item href="HOME" text="Home"/>
  <Item href="RESUME" text="Resume"/>
  <Item href="SERVICES" text="Services"/>
  <Item href="BLOG" text="Blog"/>
  <Item href="CONTACT" text="Contact"/>
</div>

)

```

## ESModule / CommonJS
| CommonJS(NodeJS nativ support)          | ESModule (webpack+babel)           | 
|-----------------------------------------|------------------------------------|
|const something = require('./something') | import something from './something'| 
| module.export = something               | export default something           |
| module.export = {x,y,z}                 | export const x                     |
|                                         | export const y                     |


# props / state 
* Navigation.js
```js
/**
 * props
 * 当我们使用HTML Element 时，相似的责任/UI会在
 * 不同的地方调用
 * 不同形式的调用
 * <a id="HOME" href="Home"> Home </a> -> <a>的责任时导航到不同的地方，通过传递id href （attributes）
 * 在JSX里面，是否可以像上面这样传递参数？
 * attribute的结构 key=value
 * obj
 *
 * 像HTML一样传递数据/参数（props） 给component; 使component(Item.js)实现在不同的地方以不同的形式，渲染不同的责任/UI
 * Props 给了我们类似与function传递参数一样的能力，在不同形式下，对相同的component进行不同的渲染；
 *
 * props 传值
 * - String的话，key=“value” ->为什么选择双引号？ JSX的初衷是在JS中写HTML，写法越接近原生HTML，越Readable Maintainable
 * - 布尔值 boolean 只要声明就代表true，不声明代表false
 * - {} 可以传递函数； 传递的时候 key = {}
 *
 */
const Navigation = () => (
    <div className="navbar">
        <Item href="HOME" text="Home" anything={()=> console.log('Hi')}/>
        <Item href="RESUME" text="Resume" active/>
        <Item href="SERVICES" text="Services"/>
        <Item href="BLOG" text="Blog"/>
        <Item href="CONTACT" text="Contact"/>
    </div>
)

export default Navigation;
```

* Item.js
```js
/**
 * props
 * 当我们使用component时，相似的责任/UI会在
 * 不同的地方调用
 * 不同形式的调用
 *
 *
 * Javascript 如何让一个function 满足不同的条件？
 * sum 1+2 / sum 2+3
 * Arguments 传参
 *
 * 在JSX中
 * 所有<>内的内容都被解释为HTML
 * 所有{}内的内容都被解释为JavaScript
 * */
// const Item = (props) => (
//     <a className="navbar__item" href={props.href}>{props.text}</a>
// )
// 结构赋值
const Item = ({
                  href,
                  text,
                  active = false,
                  anything,
              }) => {
    if (anything) {
        console.log(anything());
    }
    // console.log(href, active);
    let className = 'navbar__item'
    if (active) {
        className += ' navbar__item--active'
    }
    return (
        <a className={className} href={href}>{text}</a>
    )
}
// props 默认的API
// 或者在props里面直接赋 默认值
// Item.defaultProps = {
//     active: false,
// }
export default Item;
```

### 更像HTML的JSX写法  / children 
* self-close <Item/>
* 表现内容传递的区别：
```HTML
<a href = "HOME">
Home  // -> 表现内容在这里传递，而不是attribute传递
</a>
```
* 唯一不通过innerHTML来传递表现内容
    - only some tag 是通过value传递内容
```HTML
<input type="submit" value="Login" /> 
```

**Children**
* 在component的innerHTML里面传递的内容是children
```js
const Navigation = () => (
    <div className="navbar">
        <Item href="HOME"> Home </Item>
        <Item href="RESUME"> RESUME </Item>
        <Item href="SERVICES"> SERVICES </Item>
        <Item href="BLOG"> BLOG </Item>
        <Item href="CONTACT"> CONTACT </Item>
    </div>
)
```
* Item.js

```js
return (
    <a className={className} href={href}> {children} </a>
)
```
### 什么样的react是好的？ 
１. 书写React component的时候，尽量把component写更像native HTML
  - 比如 “” pass string props
  - 比如通过children 去pass innerHTML的text 而不是通过attributes 
  - 因为JSX的初衷就是在JS里面写ＨＴＭＬ　
２.　如何能不写5个＜Ｉｔｅｍ＞　
  - 在ＪＳ里面通过循环　减少重复书写
3. 什么是程序员 
    - 复杂的事情简单化，简单化的事情易用化 
    - 避免 over engineering

### Conditional className 实现方法
1. If-else 
2. 短路计算 
3. 短路计算 - 重复部分（navbar_item）提出来，后面做三元计算
4. 提取出来getClassName()方法，解决所有的conditional className的情况 
    - 后面遇到的所有confitional className拼接的问题，都可以通过这个方法解决 
    - 未来的reusable maintinable 
    - 要善于去观察代码里面的不足之处 
5. Google - react condition add className 
    - https://www.pluralsight.com/guides/applying-classes-conditionally-react
    - 提高自己学习的能力 
    - https://www.npmjs.com/package/classnames 



```jsx
const getClassName = (classNameCondition) => {
    const classNames = []
    Object.keys(classNameCondition).forEach((className) =>{
        if(!classNameCondition[className]){
            return
        }
        classNames.push(className)
    })
    return classNames.join(' ')
}

const Item = ({
                  href,
                  active = false,
                  children,
              }) => {
    // let className = 'navbar__item'
    // if (active) {
    //     className += ' navbar__item--active'
    // }
    // method 2
    // const className = active ? 'navbar__item navbar__item--active' : 'navbar__item' // navbar__item 重复？
   // method 3 -> 不易读
   //  const className = `navbar__item ${active ? ' navbar__item--active' : ''}`
    const className = getClassName({
        'navbar__item':true,
        'navbar__item--active':active,
    })
    return (
        <a className={className} href={href}>{children}</a>
    )
}

```
* Mthods 5 JS Package - 实现condition className.  
```jsx
import cx from "classnames"
const Item = ({
                  href,
                  active = false,
                  children,
              }) => {
const className = cx('navbar__item',{
        'navbar__item--active':active,
    })

    return (
        <a className={className} href={href}>{children}</a>
    )
              }
```

#### Module CSS
* CSS 只作用于当前的component 
* CSS module 你负责声明CSS，这个module负责关心全局性的问题 
* 解决了命名冲突的问题 
    - Item.js
    - Item.module.css -> 只针对于Item生效的一段Item 
    - 引入 import styles from './Item.module.css'
    - 引用的时候，是{} reference到一个object的key值保存起来 
    - <a className={styles.wrapper} href={href}>
            {children}
        </a>
    - 编译的时候，只关心 link到了styles.wrapper ->然后更名为其他random名字
    - 通过JavaScript的方法 解决了全局变量的问题 
* 在浏览器 render的元素： 
    <a class="Item_wrapper__XtcdE" href="HOME">Home</a>
* Google search -> className CSS module 

```jsx
import classNames from "classnames/bind"
import styles from './Item.module.css'

const cx = classNames.bind(styles);
const Item = ({
                  href,
                  active = false,
                  children,
              }) => {
    // ES6    'active': active, 赋值和变量同名，可以用省略写法
//    const className = cx('wrapper',{
//     'active': active,
//    })

    return (
        <a className={cx('wrapper',{active})} href={href}>
            {children}
        </a>
    )
}
export default Item;
```

## styled component 
* npm i styled-components 
  - https://styled-components.com/
* 可以重复复用的一段HTML+JS -> React component 
* 可以重复用的一段CSS代码，也可以设计为CSS component 

* Styled component <a>
```jsx
import styled from 'styled-components'

const Wrapper = styled.a`
    padding: 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: 0.6;
    display: block;
    transition: opacity 0.3s ease-in-out;

    ::after{
        content: "";
    width: 0;
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: width 0.3s ease-in-out;
    }

    :hover{
        opacity: 1;
    }
    :hover::after {
        width: 24px;
    }
    :last-of-type {
        padding-right: 0;
    }

    ${(props) => props.active &&`
    opacity: 1;

    ::after {
        width: 24px;
    }
    `}
`
const Item = ({
    href,
    active = false,
    children,
}) => (
    <Wrapper active={active} href={href}>
        {children}
    </Wrapper>
)
// 这里是把wrapper传进去 

``` 

* Item 和 Wrapper的关系 都有三个元素 href active children 
* 如果一个内容可以在多个地方复用的话，可以做成公用component

### Service 页面component划分 
- Services
  - My Services
    - Service
  - Clients
    - Client


### CSS 
* position:sticky 
* 在父DIV里面，如果子类覆盖了一些样式；可以使用 overflow:hidden

## TOP-Bottom
* 如何拆分component
* 复用的内容提出来做component 

## Single Page Application 
* Wikipedia 分页
  - 点击之后，整个页面重新加载
* React 官网 -SPA ->没有改动的内容，不需要再加载 
  - 质的性能提升，按需加载 

**SPA CSS实现方法**
```jsx
import React from 'react'
import styled, {css} from 'styled-components'

const Item = styled.div`
  display: none;
  ${({active}) => active && css`
    display: initial;
  `}
`
// single page application SPA ->单页应用

const Page = () => (
    <div>
        <Item active>Home Page</Item>
        <Item>Resume Page</Item>
        <Item>Service Page</Item>
        <Item>Blog Page</Item>
        <Item>Contact Page</Item>
    </div>
)

export default Page 
```
#### Navigation / Page 同步改变 切换页面 
1. Lifting  
   * 找到最小的共同父类 
* 页面结构 
  - App
    - Header 
      - Navigation {Active}
    - Page {Active}
    - Footer 

* 找到最小公用组件，从该组件作为 props 传递回来 
- App {ACTIVE_PAGE}
    - Header
        - Navigation 
    - Page 
    - Footer
* Navigation Page 的active值如何互相引用；
  * 把Page的Active Page的值 传给Navigation

**切换页面**
```js

const a = (activePage) => {
    activePage = 'HOME_PAGE'
    console.log(`a:${activePage}`)
} // copy by value  只传了值进来，不会修改外面的变量值- 独立于外面的let activePage 
const b = (activePage) => console.log(`b:${activePage}`)
// string copy by value; 改值之后，会影响之前的reference吗？  不会
// 改成 object之后，修改值可以影响之前的reference 

let activePage = 'RESUME_PAGE'

a(activePage) //a:HOME_PAGE
b(activePage) // b:RESUME_PAGE
```
* Copy by reference -> object (array是一种)
* Copy by value -> string number boolean undefined null 

**Copy/pass by Reference**
- a b 指向相同的object引用地址，修改内容是修改的object activePage本身；
- 
```js
const a = (activePage) => {
    activePage.value = 'HOME_PAGE'
    console.log(`a:${activePage.value}`)
} 
const b = (activePage) => console.log(`b:${activePage.value}`)


let activePage = {value:'RESUME_PAGE'}

a(activePage) //a:HOME_PAGE
b(activePage) // b:HOME_PAGE
```

#### 声明式变成是基于命令式变成做的二次开发 
* 计算机的底层开发，都是命令式的 
 - 在 Navigation里，Item里面onClick（）切换页面，并未实现
 - 比如再App里面更新了activePage的值，但是React并不知道要去更新页面
 - 可以再index.js里面增加 3s自动re-render一次，可以实现页面切换
 - Angular.js 是这个开发逻辑
   - index.js 里面 加 setInterval -> CPU占用不停，一直不停的render 页面

#### 按需刷新 （useState）
* React: 你只负责写逻辑，剩下交给React 
  - State 
  - 所有与UI相关的动态可变数据都需要作为 State 保存
  - React 根据最新的 state 动态刷新组件
- React API useState 

**App.js**
 - useState 参数时 initial state
 - 返回的值时一个array，第0个值时state, 第一个值时setState

```jsx
function App(){
    // const [] = useState('BLOG_PAGE') 是一个array 第0个值，是state本身；第一个值是stateSetter
    // const stateCreator = useState('BLOG_PAGE') // useState接受一个参数，作为一个state的初始值
    // const ACTIVE_PAGE=stateCreator[0] // 在什么都没做的时候，保存的值是BLOG_PAGE
    // const setActivePage = stateCreator[1] // 当需要更新state的时候，调用stateSetter来更新
    // 当setActivePage被调用的时候，React就知道，activePage发生了更新，就会brodcast告诉Header 
    const [ACTIVE_PAGE, setActivePage ] = useState('BLOG_PAGE')
}
```
* Developer负责写state的变化，React负责去re-render相关的更新 
* 当activePage发生变化时 
    - App 通知 Header / Page 更新active page 
    - 在Profiler里面可以看到 
      - re-render的页面 
        - Header 
            -Logo 
          - Navigation 
        -Page 


            
### React 协调 
* https://zh-hans.reactjs.org/docs/reconciliation.html
* Reconciliation 
  - Virtual DOM 
  - Browser DOM 
    - Browser DOM 非常非常消耗资源的，重排(re-flow)和重绘(re-paint)  
      - 计算每个元素的精准位置，是基于重排 和 重绘两个算法
    - React 网站 教程 博客 社区 页面上任何一个元素，都会影响其他元素的位置；
    - $0.getClientRects() 
* Performance 
  - 当前应用对CPU GPU 和内存的压力 

* React是按照需求 更新的
  * Browser DOM 是一个树状结构 
    * HTML 
      * body
        * div
      * footer 
  - 当每次 setState -> re-render -> VDOM 比较上一个virtual DOM 
  - 获取到更改的片段 -> Browser DOM -> 重排 和 重绘 
  
* 比如 P1
  * App 
    * Header 
      * Navigation
        * Item {active}
        * Item
    * page 
      * HomePage {active}
      * ResumePage
      * ServicePage
    * Footer

    

### React 原则
* 所有动态的数据都使用state 
* state lifting 

 



































