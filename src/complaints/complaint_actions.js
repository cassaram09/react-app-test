export const addComplaint = (complaint) => {
  return {
    type: 'ADD_COMPLAINT', 
    complaint: complaint
  };
};