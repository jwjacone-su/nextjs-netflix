import classNames from 'classnames/bind'

import styles from './col.module.scss'

let cx = classNames.bind(styles)

const Col = ({children, xs, sm, md, lg, textAlign, alignItems}) => {
    let colClasses = cx({
        col: true,
        [`col-xs-${xs}`] : xs,
        [`col-sm-${sm}`]: sm,
        [`col-sm-${md}`]: sm,
        [`col-lg-${lg}`]: lg,
        [`text-align-${textAlign}`] : textAlign,
        [`align-items-${alignItems}`] : alignItems
    });
    return <div className={colClasses}>{children}</div>
}
export default Col