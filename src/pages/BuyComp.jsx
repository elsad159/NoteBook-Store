import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import BuyCompsCard from "../components/BuyCompsCart";

function BuyComp() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Acer">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Acer">
                Aser
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="HP">
                HP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Asus">
                Asus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Dell">
                Dell
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Lenovo">
                Lenovo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="LG">
                LG
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Casper">
                Casper
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Fujitsu">
                Fujitsu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Nexus">
                Nexus
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Samsung">
                Samsung
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Toshiba">
                Toshiba
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} eventKey="Sony">
                Sony
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="Acer">
              <BuyCompsCard cat="Acer" />
            </Tab.Pane>
            <Tab.Pane eventKey="HP">
              <BuyCompsCard cat="HP" />
            </Tab.Pane>
            <Tab.Pane eventKey="Asus">
              <BuyCompsCard cat="Asus" />
            </Tab.Pane>
            <Tab.Pane eventKey="Dell">
              <BuyCompsCard cat="Dell" />
            </Tab.Pane>
            <Tab.Pane eventKey="Lenovo">
              <BuyCompsCard cat="Lenovo" />
            </Tab.Pane>
            <Tab.Pane eventKey="LG">
              <BuyCompsCard cat="LG" />
            </Tab.Pane>
            <Tab.Pane eventKey="Casper">
              <BuyCompsCard cat="Casper" />
            </Tab.Pane>
            <Tab.Pane eventKey="Fujitsu">
              <BuyCompsCard cat="Fujitsu" />
            </Tab.Pane>
            <Tab.Pane eventKey="Nexus">
              <BuyCompsCard cat="Nexus" />
            </Tab.Pane>
            <Tab.Pane eventKey="Samsung">
              <BuyCompsCard cat="Samsung" />
            </Tab.Pane>
            <Tab.Pane eventKey="Toshiba">
              <BuyCompsCard cat="Toshiba" />
            </Tab.Pane>
            <Tab.Pane eventKey="Sony">
              <BuyCompsCard cat="Sony" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default BuyComp;
