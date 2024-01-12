import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupBS(props) {
    return (
        <ListGroup>
            {
                props.items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}

export default ListGroupBS;