import styles from './overlay.module.scss'
import BtnUI from './btnui'
import {getNavLinks} from '../lib/api'
import Link from 'next/Link'
import Nav from './nav'

const OverlayMenu = ({closeHandler}) => {
    const navLinks = getNavLinks()
    return <div className={styles.overlay}>
        <BtnUI icon="close" clickHandler={() => {
            closeHandler(false)
        }} />
        <Nav type="mobile" />
        </div>
}
export default OverlayMenu