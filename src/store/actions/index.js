export const addAppointment = (appointmentData) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_APPOINTMENT",
      payload: appointmentData,
    });
  };
};
export const replacePerson = (data) => {
  return (dispatch) => {
    dispatch({
      type: "REPLACE_PERSON",
      payload: data,
    });
  };
};

// export const addAppointment = (appointmentData) => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch({
//         url: "http://locl:30002/addappoin",
//         body: JSON.stringify(appointmentData),
//       });
//       const data = await res.json();
//       dispatch({
//         type: "ADD_APPOINTMENT",
//         payload: data,
//       });
//     } catch (error) {

//     }
//   };
// };
