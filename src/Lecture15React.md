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