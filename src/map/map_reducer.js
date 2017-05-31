export default function mapReducer(state = [], action){
  switch (action.type){
    case "ADD_MARKER":
      console.log('ADD MARKER', action.location)
      var location = {position: action.location}
      return state.concat(location)
    case "REMOVE_MARKER":
      return;
    default:
      return state;
  }
}