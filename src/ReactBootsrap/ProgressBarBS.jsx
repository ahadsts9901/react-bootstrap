import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarBS(props) {
    return <ProgressBar variant={props.variant} animated={props.animated} striped={props.striped} now={props.now} label={props.label} />;
}

export default ProgressBarBS;