export default function manageComplaints(state = {complaints: []}, action){
  switch (action.type){
    case "ADD_COMPLAINT":
      console.log('ADD_COMPLAINT')
      const id = Math.floor((Math.random() * 10000000) + 1);
      var complaint = Object.assign({}, action.complaint, {complaint_number: id}, {status: 'ACTIVE'})
      return Object.assign({}, state, {
        complaints: state.complaints.concat(complaint)
      })
    case "REMOVE_COMPLAINT":
      return;
    default:
      return state;
  }
}