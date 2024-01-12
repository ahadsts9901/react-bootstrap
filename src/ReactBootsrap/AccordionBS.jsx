import Accordion from 'react-bootstrap/Accordion';

function AccordionBS(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    {props.description}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionBS;