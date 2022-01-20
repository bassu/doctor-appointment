import React, { Component } from "react";
import {
  Item,
  Segment,
  Image,
  ItemContent,
  ItemHeader,
  ItemExtra,
  Label,
  Header,
  Icon,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import profile from "../image/dr_usman_javaid.jpeg";
export default class Profile extends Component {
  render() {
    return (
      <Segment raised className="items" padded="very" id="profile">
        <Item>
          <Image
            src={profile}
            alt="dr-usman-javaid-profile"
            circular
            size="small"
            bordered
          />

          <ItemContent>
            <ItemHeader>
              <Header>
                Dr. Muhammad Usman Javaid
                <Label color="teal" size="tiny">
                  <Icon name="shield" />
                  PMC Verified
                </Label>
              </Header>
            </ItemHeader>
            <ItemExtra as={"div"} style={{ color: "grey", fontWeight: "bold" }}>
              Nephrologist
            </ItemExtra>
            <ItemExtra as={"div"} style={{ color: "grey", fontWeight: "bold" }}>
              MBBS, MD (Nephrology)
            </ItemExtra>
          </ItemContent>
        </Item>
        <Grid divided centered columns={3}>
          <GridColumn textAlign="center">
            <Label color="grey" pointing="below" size="tiny">
              Wait time
            </Label>
            <div style={{ fontWeight: "bold" }}>15 Mintues</div>
          </GridColumn>
          <GridColumn textAlign="center">
            <Label color="grey" pointing="below" size="tiny">
              Experience
            </Label>
            <div style={{ fontWeight: "bold" }}>10 Years</div>
          </GridColumn>
          <GridColumn textAlign="center">
            <Label color="grey" pointing="below" size="tiny">
              Patients Statified
            </Label>
            <div style={{ fontWeight: "bold" }}>100%</div>
          </GridColumn>
        </Grid>
      </Segment>
    );
  }
}
