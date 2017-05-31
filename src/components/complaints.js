import React, { Component } from 'react';
import Complaint from './complaint'
import ComplaintInput from './complaintInput'

class Complaints extends Component {
  render() {
    const complaints = this.props.complaints.map( (complaint, index) => (
      <Complaint 
        key={index} 
        complaint_number={complaint["Complaint Number"]}
        status={complaint.Status}
        house_number={complaint["House Number"]}
        zip_code={complaint["ZIP Code"]}
        house_street={complaint["House Street"]}
        />
    ))
    return (
      <div className="complaints">
        <ComplaintInput />
        {complaints}
      </div>
    );
  }
}

export default Complaints;