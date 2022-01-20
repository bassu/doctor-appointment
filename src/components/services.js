import { Component } from "react";

import {
  Icon,
  Image,
  Card,
  Segment,
  CardHeader,
  CardContent,
  CardGroup,
  Label,
} from "semantic-ui-react";

export default class Services extends Component {
  render() {
    const serviceList = [
      { title: "Acute Kidney Injury", icon: "band aid", color: "green" },
      { title: "Chronic Kidney Disease", icon: "syringe", color: "red" },
      { title: "Interventional Nephrology", icon: "plus", color: "yellow" },
      { title: "Kidney Stones", icon: "bed", color: "grey" },
      { title: "Renal (Kidney) Transplant", icon: "hospital", color: "orange" },
      { title: "Hypertension", icon: "frown", color: "blue" },
      { title: "Kidney Biopsy", icon: "ambulance", color: "purple" },
      { title: "Nephrotic Syndrome", icon: "stethoscope", color: "brown" },
      {
        title: "Renal Replacment Therapy",
        icon: "hospital symbol",
        color: "green",
      },
    ];

    return (
      <Segment raised id="services">
        <Label color="blue" ribbon size="big">
          Services
        </Label>
        <div style={{ marginTop: "30px" }}></div>
        <CardGroup className="very padded" itemsPerRow={3} stackable doubling>
          {serviceList.map((service, i) => (
            <ListCard
              title={service.title}
              color={service.color}
              icon={service.icon}
              key={i}
            />
          ))}
        </CardGroup>
      </Segment>
    );
  }
}
function ListCard(props) {
  return (
    <Card centered raised>
      <CardContent textAlign="center">
        <Image centered>
          <Icon name={props.icon} circular size="large" color="teal" inverted />
        </Image>
        <div style={{ marginTop: "10px" }}></div>
        <CardHeader>{props.title}</CardHeader>
      </CardContent>
    </Card>
  );
}
