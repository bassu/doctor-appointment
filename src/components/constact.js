import { Component } from "react";
import { Segment } from "semantic-ui-react";

export default class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Segment>
        <a
          className="ui facebook button fluid"
          href="https://www.facebook.com/UsmanJavaid666"
          target="_blank"
          rel="noreferrer"
          alt="facebook-button"
        >
          <i className="ui icon facebook"></i>Facebbook
        </a>
      </Segment>
    );
  }
}
