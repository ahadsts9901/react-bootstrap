import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabBS(props) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            {
                props.items.map((item, index) => (
                    <Tab key={index} eventKey={item.link} title={item.title} disabled={item.disabled}>
                        {item.title}
                    </Tab>
                ))
            }
        </Tabs>
    );
}

export default TabBS;