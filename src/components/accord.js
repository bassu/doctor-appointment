import { Component } from "react";
import {
  Accordion,
  Icon,
  Label,
  List,
  ListContent,
  ListHeader,
  ListItem,
} from "semantic-ui-react";

function getDayName(locale) {
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let date = new Date(tomorrow);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export default class AccordAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      isAvailable: false,
      data: props.loc,
      currentTime: "",
    };
  }

  handleClick = (e) => {
    this.setState({ active: !this.state.active });
  };
  componentDidMount() {
    const stringDay = getDayName();
    const time = this.state.data[stringDay];
    if (time) {
      this.setState({ isAvailable: true, currentTime: time });
    }
  }
  render() {
    const { active, isAvailable, data, currentTime } = this.state;

    let tableContent = Object.entries(data).map(([name, time]) => (
      <ListItem key={name} style={{ padding: "10px" }}>
        <ListContent floated="left">
          <ListHeader>{name}</ListHeader>
        </ListContent>
        <ListContent floated="right">{time}</ListContent>
      </ListItem>
    ));

    return (
      <Accordion fluid>
        <Accordion.Title
          active={active}
          index={0}
          onClick={this.handleClick}
          className="center aligned"
        >
          {isAvailable ? (
            <>
              <Label color="teal" pointing="below" horizontal>
                <Icon className="checkmark" />
                Available Tomorrow
              </Label>
              <div style={{ fontWeight: "bold" }}>{currentTime}</div>
            </>
          ) : (
            <Label color="grey" pointing="below" horizontal>
              <Icon className="checkmark" />
              Check Availability
            </Label>
          )}
        </Accordion.Title>
        <Accordion.Content active={active}>
          <List divided verticalAlign="middle">
            {tableContent}
          </List>
        </Accordion.Content>
      </Accordion>
    );
  }
}
