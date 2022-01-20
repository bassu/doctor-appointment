import { Component } from "react";

import {
  CardContent,
  Header,
  Card,
  Icon,
  List,
  ListContent,
  ListItem,
  ListHeader,
} from "semantic-ui-react";
import AccordAppointment from "./accord";
import MakeAppointment from "./makeappointment";
export default class AppointmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, fee, location, timetable } = this.props;
    return (
      <Card fluid>
        <CardContent>
          <Header textAlign="center">{title}</Header>
          <List divided verticalAlign="middle">
            <ListItem>
              <ListContent floated="left">
                <ListHeader>Fee:</ListHeader>
              </ListContent>

              <ListContent floated="right" style={{ fontWeight: "bold" }}>
                Rs. {fee}
              </ListContent>
            </ListItem>
            <ListItem>
              <ListContent floated="left">
                <ListHeader>Address:</ListHeader>
              </ListContent>

              <ListContent floated="right">
                <a
                  href={`https://maps.google.com/maps?travelmode=driving&daddr=${location}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  <Icon name="map marker alternate"></Icon>
                  {location}
                </a>
              </ListContent>
            </ListItem>
          </List>
          <AccordAppointment loc={timetable} />
          <div className="padded center aligned" style={{ marginTop: "30px" }}>
            <MakeAppointment title={title} />
          </div>
        </CardContent>
      </Card>
    );
  }
}
