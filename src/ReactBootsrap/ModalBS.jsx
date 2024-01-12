import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBS(props) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.body}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">{props.primary}</Button>
                    <Button variant="primary">{props.secondary}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalBS;