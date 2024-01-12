import Dropdown from 'react-bootstrap/Dropdown';

function DropDownBS(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant={props.variant} id="dropdown-basic">
                {props.title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    props.items.map((item, index) => (
                        <Dropdown.Item key={index} href={item.link}>{item.title}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownBS;