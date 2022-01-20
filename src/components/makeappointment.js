import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Modal,
  Form,
  ModalHeader,
  Icon,
  FormField,
  FormInput,
  ModalContent,
  Message,
  FormGroup,
  FormButton,
} from "semantic-ui-react";

export default class MakeAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleformClose = this.handleformClose.bind(this);
  }
  handleformClose(state) {
    this.setState({ open: state });
  }
  render() {
    const { open } = this.state;
    return (
      <Modal
        closeIcon={<Icon name="close" />}
        size="tiny"
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={open}
        trigger={<Button primary>Make Appointment</Button>}
      >
        <ModalHeader style={{ fontWeight: "900" }}>
          Make Appointment
        </ModalHeader>
        <ModalContent>
          {
            <AppointMentForm
              handleformClose={this.handleformClose}
              title={this.props.title}
            />
          }
        </ModalContent>
      </Modal>
    );
  }
}

class AppointMentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
      success: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    e.preventDefault();
  }
  callback(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      this.setState({ success: true });
    }
  }
  async handleSubmit(e) {
    const data = {
      title: this.props.title,
      name: this.state.name,
      phone: this.state.phone,
      date: this.state.date,
      email: this.state.email,
    };
    fetch("/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((msg) => {
        this.setState({ success: msg["success"] });
      });
    e.preventDefault();
  }
  render() {
    const { date, success } = this.state;

    return (
      <>
        {success ? (
          <Message positive>
            <Message.Header>Success</Message.Header>
            <p>The Appointment has been made</p>
          </Message>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <FormField
              name="name"
              control={FormInput}
              placeholder="Full Name"
              type="text"
              value={this.state.name}
              required
              onChange={this.handleInputChange}
              icon={<Icon name="user" />}
            />
            <FormField
              name="email"
              control={FormInput}
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
              icon={<Icon name="envelope" />}
            />

            <FormGroup widths="equal">
              <FormField
                name="date"
                required
                control={DatePicker}
                selected={date}
                onChange={(date) => this.setState({ date: date })}
                icon={<Icon name="calendar" />}
              />

              <FormField
                name="phone"
                control={FormInput}
                placeholder="Phone"
                type="text"
                required
                value={this.state.phone}
                onChange={this.handleInputChange}
                icon={<Icon name="phone" />}
              />
            </FormGroup>
            <FormButton
              primary
              icon={<Icon name="checkmark" />}
              content="Submit"
            />
          </Form>
        )}
      </>
    );
  }
}
