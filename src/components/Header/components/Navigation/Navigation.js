import './Navigation.css'
import Item from "./Item";

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
 * self-close <Item/>
 * 表现内容传递的区别：
 * <a href = "HOME">
 *     Home -> 表现内容在这里传递，而不是attribute传递
 * </a>
 *唯一不通过innerHTML来传递表现内容
 * only some tag 是通过value传递内容
 * <input type="submit" value="Login" />
 * children -> <Item> innerHTML </Item>
 */
const ITEMS = [{
    href: 'HOME',
    children: 'Home',
}, {
    href: 'RESUME',
    children: 'Resume',
}, {
    href: 'SERVICES',
    children: 'Services',
}, {
    href: 'BLOG',
    children: 'Blog',
    active:true,
}, {
    href: 'CONTACT',
    children: 'Contact',
}]
const Navigation = () => (
    <div className="navbar">
        {ITEMS.map(({href, children, active}) => (
            <Item
                key={href}
                href={href}
                active={active}
            >{children}</Item>
        ))}
    </div>
)

export default Navigation;