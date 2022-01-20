import { Component } from "react";
import {
  Button,
  Form,
  FormButton,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  TextArea,
} from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Segment padded="very" color="blue" inverted stacked>
        <Grid columns={3} divided stackable>
          <GridColumn>
            <Header as="h3" style={{ color: "white" }}>
              Contact Us
            </Header>
            <div>
              <h4>Dr. Muhammad Usman Javaid</h4>
            </div>
            <div
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                fontStyle: "italic",
                fontWeight: "500",
                wordSpacing: "5px",
              }}
            >
              <a
                href="mailto:usman_javaid636@hotmail.com"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Email: usman_javaid636@hotmail.com
              </a>
            </div>
            <div>Contact: +92 321 860 9947</div>
          </GridColumn>
          <GridColumn>
            <Header as="h3" style={{ color: "white" }}>
              Social Contacts
            </Header>
            <Grid verticalAlign="middle">
              <GridRow centered>
                <Button
                  as="a"
                  color="facebook"
                  href="https://www.facebook.com/UsmanJavaid666"
                  rel="noreferrer"
                  target="_blank"
                  className="raised icon button"
                >
                  <Icon name="facebook" />
                  Facebook
                </Button>
                <Button as="a" color="twitter" className="raised  icon button">
                  <Icon name="twitter" />
                  Twitter
                </Button>
                <Button as="a" color="linkedin" className="raised  icon button">
                  <Icon name="linkedin" />
                  LinkedIn
                </Button>
              </GridRow>
            </Grid>
          </GridColumn>
          <GridColumn>
            <Header as="h3" style={{ color: "white" }}>
              Send a Query
            </Header>
            <Form>
              <FormInput type="text" placeholder="Name" required />
              <FormInput type="email" placeholder="Email" required />
              <TextArea placeholder="Write your query" required />
              <FormButton
                type="submit"
                floated="right"
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  color: "blue",
                }}
              >
                Submit
              </FormButton>
            </Form>
          </GridColumn>
        </Grid>
      </Segment>
    );
  }
}
