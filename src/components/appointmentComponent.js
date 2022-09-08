import React from "react";
import {
  AppointmentContainer,
  RescheduleButton,
} from "../styledComponent/index";
import RescheduleModal from "./RescheduleModal";
function Appointment({ apnData }) {
  // console.log("appoinment comp", apnData);
  function onTimeChange() {
    var timeSplit = apnData.time.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    let all = hours + ":" + minutes + " " + meridian;
    return all;
  }
  let timeResult = onTimeChange(apnData.time);
  // console.log(timeResult);
  const [openModal, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppointmentContainer>
        {apnData.data.p1},{apnData.data.p2},{apnData.data.p3},{apnData.data.p4}
        <br />
        Task - {apnData.data.Task} <br />
        Time: {timeResult}
      </AppointmentContainer>
      <div style={{ backgroundColor: "#000080", marginBottom: "10px" }}>
        <RescheduleButton onClick={() => setOpenModal(true)}>
          Reschedule
        </RescheduleButton>
      </div>
      <RescheduleModal
        modalState={openModal}
        data={apnData}
        closeModal={closeModal}
      />
    </>
  );
}

export default Appointment;
