import Col from './Col'
import Row from './Row'
import WordpressImage from './wordpressimage'
import Heading from './Heading'

const PersonCard = ({image, name}) => {
    return <Row>
        <Col xs="4" sm="4">
        <WordpressImage data={image} rounded/>
        </Col>
        <Col xs="8" sm="8" alignItems="center">
            <Heading type="h3">{name}</Heading>
        </Col>
    </Row>
}
export default PersonCard