export default function complaintsReducer(state = [], action){
  switch (action.type){
    case "ADD_COMPLAINT":
      console.log('ADD_COMPLAINT', state)
      var id = Math.floor((Math.random() * 10000000) + 1);
      var complaint = Object.assign({}, action.complaint, {complaint_number: id}, {status: 'ACTIVE'})
      return state.concat(complaint)
    case "REMOVE_COMPLAINT":
      return;
    default:
      return state;
  }
}