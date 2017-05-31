import React, { Component } from 'react';
import Complaint from './complaint'
import ComplaintInput from './complaintInput'

class Complaints extends Component {
  render() {
    const complaints = this.props.complaints.map( (complaint, index) => (
      <Complaint 
        key={index} 
        complaint_number={complaint.complaint_number}
        status={complaint.status}
        house_number={complaint.house_number}
        zip_code={complaint.zip_code}
        house_street={complaint.house_street}
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