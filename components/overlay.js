import classNames from 'classnames/bind'
import Nav from './nav'
import styles from './overlay.module.scss'
import BtnUI from './btnui'
import Input from './input'
import Container from './container'
import YouTubeVideo from './youtubevideo'

let cx = classNames.bind(styles)

const Overlay = ({type, closeHandler, youtubeUrl}) => {
    let overlayClasses = cx({
        overlay: true,
        menu:type === "menu",
        search: type ==="search",
        video: type === "video"
    })
    return <div className={overlayClasses}>
        <BtnUI icon="close" clickHandler={() => {
            closeHandler(false)
        }} />
        {type ==="menu" ?
        <>
            <Nav type="mobile" />
            <Nav.SocialMedia />
            </>
            : type === "search" ?
            <>
            <Input />
            <BtnUI icon="search" />
            </>
            : type === "video" ?
                <Container>
                <YouTubeVideo youtubeUrl={youtubeUrl} />
                </Container>
            
            : ''
            
        }
        </div>
}
export default Overlay