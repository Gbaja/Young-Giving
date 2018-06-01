import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../../actions/get_requests";
import SearchFormContainer from "../SearchForm/SearchFormContainer";
import Directory from "./Directory";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: [],
      filter: {}
    };
  }

  componentDidMount() {
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName,
        this.state.filter
      )
      .then(data => {
        this.setPageNumbers(this.props.directory.count);
      });
  }

  setPageNumbers = number => {
    let total = Math.ceil(number / 1);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    this.setState({ numberOfPages: arr });
  };

  showPage = pageNum => () => {
    this.props.fetchDirectory(
      pageNum,
      this.props.match.params.type,
      this.props.auth.universityName,
      this.state.filter
    );
  };

  setFilter = filter => {
    this.setState({ filter });
    //console.log()
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName,
        this.state.filter
      )
      .then(data => {
        this.setPageNumbers(this.props.directory.count);
      });
  };

  render() {
    console.log("FILTERRRRR: ", this.state.filter);
    if (Object.getOwnPropertyNames(this.props.directory).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      console.log(this.props.directory.rows);
      const mentorsDetails = this.props.directory.rows;
      return (
        <div>
          <SearchFormContainer setFilter={this.setFilter} />
          <Directory
            details={mentorsDetails}
            showPage={this.showPage}
            numberOfPages={this.state.numberOfPages}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  directory: state.directory,
  auth: state.auth,
  filter: state.filter
});

export default connect(mapStateToProps, { fetchDirectory })(DirectoryContainer);