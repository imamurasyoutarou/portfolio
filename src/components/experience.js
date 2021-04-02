import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ borderBottom: "3px solid #833fb2", width: "45%" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px", fontWeight: "bold" }}>{this.props.jobName}</h4>
          <p>
            <span style={{ fontWeight: "bold" }}>##使用技術 </span> <br />
            {this.props.Skill}
          </p>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}
export default Experience;
