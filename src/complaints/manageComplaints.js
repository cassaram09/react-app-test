export default function manageComplaints(state = {complaints: [], locations: []}, action){
  switch (action.type){
    case "ADD_COMPLAINT":
      console.log('ADD_COMPLAINT')
      const id = Math.floor((Math.random() * 10000000) + 1);
      var complaint = Object.assign({}, action.complaint, {complaint_number: id}, {status: 'ACTIVE'})
      return Object.assign({}, state, {
        complaints: state.complaints.concat(complaint)
      })
    case "ADD_MARKER":
      console.log('ADD MARKER')
      var location = {position: action.location}
      return Object.assign({}, state, {
        locations: state.locations.concat(location)
      })
    case "REMOVE_COMPLAINT":
      return;
    default:
      return state;
  }
}