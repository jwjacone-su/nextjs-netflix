import styles from './button.module.scss'
import classNames from 'classnames/bind'

let cx =classNames.bind(styles)

const Button = ({label, inverted}) => {
    let buttonClasses = cx({
        btn : true,
        inverted : inverted
    })
    return <button className={buttonClasses}>{label}</button>
}
export default Button; 