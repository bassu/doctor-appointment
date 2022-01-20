import { Component, createRef } from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import { Link } from "react-scroll";
import logo from "../image/logo.png";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = { home: "", about: "", services: "", faq: "" };
  }

  render() {
    const { home, about, services, faq } = this.state;
    return (
      <Segment padded raised id="navbar">
        <Segment color="teal" inverted href="/">
          <Image avatar src={logo} />
          <b>Nephrologist</b>
        </Segment>
        <Header floated="right">
          <Link
            name="home"
            className={"ui button " + home}
            onSetActive={() => this.setState({ home: "primary" })}
            onSetInactive={() => this.setState({ home: "" })}
            spy={true}
            smooth={true}
            to="profile"
          >
            Home
          </Link>
          <Link
            name="about"
            spy={true}
            smooth={true}
            to="about"
            className={"ui button " + about}
            onSetActive={() => this.setState({ about: "primary" })}
            onSetInactive={() => this.setState({ about: "" })}
          >
            About
          </Link>
          <Link
            name="services"
            className={"ui button " + services}
            onSetActive={() => this.setState({ services: "primary" })}
            onSetInactive={() => this.setState({ services: "" })}
            spy={true}
            smooth={true}
            to="services"
          >
            Services
          </Link>
          <Link
            name="faq"
            className={"ui button " + faq}
            onSetActive={() => this.setState({ faq: "primary" })}
            onSetInactive={() => this.setState({ faq: "" })}
            spy={true}
            smooth={true}
            to="faqs"
          >
            FAQs
          </Link>
        </Header>
      </Segment>
    );
  }
}
