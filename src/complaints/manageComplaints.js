export default function manageComplaints(state = {complaints: []}, action){
  switch (action.type){
    case "ADD_COMPLAINT":
      console.log('ADD_COMPLAINT')
      return Object.assign({}, state, {
        complaints: state.complaints.concat(action.complaint)
      })
    case "REMOVE_COMPLAINT":
      return;
    default:
      return state;
  }
}