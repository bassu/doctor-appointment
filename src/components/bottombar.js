import { Component, createRef } from "react";
import { Segment, Icon, Grid, GridColumn, Container } from "semantic-ui-react";
import { Link } from "react-scroll";
export default class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = { home: "", about: "", services: "", faq: "" };
  }

  render() {
    return (
      <Segment
        padded
        color="blue"
        inverted
        raised
        id="navbar"
        attached="bottom"
      >
        <Grid columns={4} divided verticalAlign="middle">
          <GridColumn stretched>
            <Link name="home" spy={true} smooth={true} to="profile">
              <Container
                fluid
                textAlign="center"
                style={{
                  width: "100%",
                  color: "white",
                }}
              >
                <Icon name="home" />
              </Container>
            </Link>
          </GridColumn>
          <GridColumn>
            <Link name="about" spy={true} smooth={true} to="about">
              <Container
                fluid
                textAlign="center"
                style={{
                  width: "100%",
                  color: "white",
                }}
              >
                <Icon name="info" />
              </Container>
            </Link>
          </GridColumn>
          <GridColumn>
            <Link name="services" spy={true} smooth={true} to="services">
              <Container
                fluid
                textAlign="center"
                style={{
                  width: "100%",
                  color: "white",
                }}
              >
                <Icon name="ambulance" />
              </Container>
            </Link>
          </GridColumn>
          <GridColumn>
            <Link name="faq" spy={true} smooth={true} to="faqs">
              <Container
                fluid
                textAlign="center"
                style={{
                  width: "100%",
                  color: "white",
                }}
              >
                <Icon name="question" />
              </Container>
            </Link>
          </GridColumn>
        </Grid>
      </Segment>
    );
  }
}
