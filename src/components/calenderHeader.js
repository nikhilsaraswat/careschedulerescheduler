import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React from "react";
import {
  CalenderHeaderContainer,
  DropdownContainer,
  AppointmentButton,
  InformationButton,
  ButtonContainer,
} from "../styledComponent/index";

import { yearOptions, monthOptions } from "../constant/index";
import InformationModal from "./InformationModal";

function CalenderHeader(props) {
  const [openinformModal, setOpeninformModal] = React.useState(false);
  const onYearSelect = (date) => {
    props.onYearSelect(date);
  };

  const onMonthSelect = (date) => {
    props.onMonthSelect(date);
  };

  const openModal = () => {
    props.openModal();
  };
  const openInfromModal = () => {
    setOpeninformModal(true);
  };
  const closeModal = () => {
    setOpeninformModal(false);

  };
  return (
    <CalenderHeaderContainer>
      <DropdownContainer>
        <Dropdown
          options={yearOptions}
          onChange={onYearSelect}
          value={props.defaultYear}
        />
        <Dropdown
          options={monthOptions}
          onChange={onMonthSelect}
          value={props.defaultMonth}
        />
      </DropdownContainer>
      <ButtonContainer>
        <AppointmentButton onClick={openModal}>
          Create Appointment
        </AppointmentButton>
        <InformationButton onClick={openInfromModal}>
          Information
        </InformationButton>
      </ButtonContainer>
      <InformationModal
        modalState={openinformModal}
        closeinformModal={closeModal}
      />
    </CalenderHeaderContainer>
  );
}

export default CalenderHeader;
