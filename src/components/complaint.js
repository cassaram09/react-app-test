import React, { Component } from 'react';

class Complaint extends Component {
  render() {

    const { complaint_number, status, house_number, zip_code, house_street } = this.props;

    return (
      <div className="complaint">
        <h1>#{complaint_number}</h1>
        <ul>
          <li>{status}</li>
          <li>{house_number}</li>
          <li>{house_street}</li>
          <li>{zip_code}</li>
        </ul>
      </div>
    );
  }
}

export default Complaint;