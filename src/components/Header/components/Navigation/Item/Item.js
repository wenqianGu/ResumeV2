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


// 结构赋值
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
// props 默认的API
// 或者在props里面直接赋 默认值
// Item.defaultProps = {
//     active: false,
// }
export default Item;