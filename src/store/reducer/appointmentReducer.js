const getDataFromLocal = () => {
  return JSON.parse(localStorage.getItem("appointMentData"));
};

const initialState = getDataFromLocal() || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      state = [...state, action.payload];
      localStorage.setItem("appointMentData", JSON.stringify(state));
      return state;
    case "REPLACE_PERSON":
      //find appoin with id
      // find replace person
      // replace with new person
      // save state to storage
      // return current state
      // state.filter((id)=>id==action.payload.npmId)
      const stateCopy = [...state];
      const { apnId, replacePerson, replaceWith } = action.payload;
      const i = state.findIndex((apn) => apn.id === apnId);
      if (i !== -1) {
        if (stateCopy[i].data.p1 === replacePerson)
          stateCopy[i].data.p1 = replaceWith;
        else if (stateCopy[i].data.p2 === replacePerson)
          stateCopy[i].data.p2 = replaceWith;
        else if (stateCopy[i].data.p3 === replacePerson)
          stateCopy[i].data.p3 = replaceWith;
        else if (stateCopy[i].data.p4 === replacePerson)
          stateCopy[i].data.p4 = replaceWith;
        state = stateCopy;
        localStorage.setItem("appointMentData", JSON.stringify(state));
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
