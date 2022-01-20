import { Component } from "react";
import { Container, Label, Segment } from "semantic-ui-react";

export default class AboutSection extends Component {
  render() {
    return (
      <Segment raised id="about">
        <Label ribbon size="big" color="blue">
          About
        </Label>
        <div style={{ marginTop: "30px" }}></div>
        <Container text fluid>
          <p lang="en" className="ui very padded justified text">
            <b> Dr. Muhammad Usman Javaid</b> is a very well regarded
            Nephrologist and has a number of certifications under his belt,
            including <b>MBBS and MD (Nephrology)</b> as well as{" "}
            <b>10 years </b>
            of experience in his field.
          </p>
          <p>
            Dr. Muhammad Usman Javaid is capable of providing a diverse array of
            treatments and services including{" "}
            <b>
              {" "}
              Acute Kidney Injury, Chronic Kidney Disease, Hypertension,
              Interventional Nephrology, Kidney Biopsy, Kidney Stones, Nephrotic
              Syndrome, Renal (Kidney) Transplant and Renal Replacment Therapy.
            </b>
          </p>
        </Container>
      </Segment>
    );
  }
}
