import Alert from 'react-bootstrap/Alert';

function AlertBS(props) {
    return (
        <>
            <Alert variant={props.variant}>
                {props.title}
            </Alert>
        </>
    );
}

export default AlertBS;