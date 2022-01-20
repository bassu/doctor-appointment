import React, { Component } from "react";
import { Accordion, Icon, Label, Segment } from "semantic-ui-react";

export default class FAQS extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Segment raised id="faqs">
        <Label size="big" color="blue" ribbon>
          FAQs
        </Label>
        <div style={{ marginTop: "30px" }}></div>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            What is the fee of Dr. Muhammad Usman Javaid & how do I pay
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>consultation fee is Rs. 1,000.</p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            What is the experience of Dr. Muhammad Usman Javaid?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>Dr. Muhammad Usman Javaid has 10 years of experience.</p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            What is the feedback of Dr. Muhammad Usman Javaid?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              100% users had a positive experience with Dr. Muhammad Usman
              Javaid.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}
