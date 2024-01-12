import Toast from 'react-bootstrap/Toast';

function ToastBS(props) {
    const formattedTime = props.time
    return (
        <Toast>
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
                <small>{formattedTime}</small>
            </Toast.Header>
            <Toast.Body>{props.text}</Toast.Body>
        </Toast>
    );
}

export default ToastBS;