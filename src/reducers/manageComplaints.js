export default function manageComplaints(state = {complaints: []}, action){
  switch (action.type){
    case "ADD_COMPLAINT":
      return;
    case "REMOVE_COMPLAINT":
      return;
    default:
      return state;
  }
}