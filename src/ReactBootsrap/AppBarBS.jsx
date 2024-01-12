import Nav from 'react-bootstrap/Nav';

function AppBarBS(props) {
  return (
    <Nav fill variant="tabs" defaultActiveKey={window.location.pathname}>
      {
        props.items.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link href={item.link} style={{ textDecoration: "none" }}>{item.title}</Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  );
}

export default AppBarBS;