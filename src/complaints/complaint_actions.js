const addComplaint = (complaint) => {
  return {
    type: 'ADD_COMPLAINT', 
    complaint: complaint
  };
};

const addMarker= (coordinates) => {
  return {
    type: 'ADD_MARKER', 
    location: coordinates
  };
};

export {
  addComplaint, addMarker
}