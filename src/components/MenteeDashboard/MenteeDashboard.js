import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../logout";

class MenteeDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Mentee Dashboard</h1>
        <LogOutBtn />
        <p>
          <Link to={`/${this.props.match.params.id}/mentee/my_profile`}>
            My profile
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/mentors_directory"> View mentors </Link>
        </p>
        <button> Delete my account</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MenteeDashboard);
