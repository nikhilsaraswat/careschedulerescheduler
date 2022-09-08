import styled from "styled-components";

export const DateDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  text-align: center;
  width: 100%;
  color: #000;
  background: #89cff0;
  font-size: 12px;
`;

export const DateApointmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 15px;
`;

export const CalendarContainerBody = styled.div`
  color: blue;
  margin-top: 5px;
`;

export const CalenderWeekContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const CalenderWeekDayContainer = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 25px;
  color: #000;
`;

export const CalenderDateContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
export const CalenderDateDayContainerDisable = styled.div`
  margin: 1px;
  text-align: center;
  height: 80px;
`;
export const CalenderDateDayContainerActive = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 80px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ModalBody = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0px;
  height: 30px;
  align-items: center;
`;

export const InputSpan = styled.div`
  width: 30%;
`;

export const InputField = styled.input`
  width: 70%;
  height: 25px;
  border-radius: 5px;
  &:focus {
    border: 3px solid #89cff0;
    outline: none;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ModalSubmit = styled.button`
  width: 40%;
  height: 40px;
  background: #228c22;
  color: #fff;
`;

export const ModalCancel = styled.button`
  width: 40%;
  height: 40px;
  background: #f68a06;
  color: #fff;
`;
export const RescheduleButton = styled.button`
  width: fit-content;
  margin-inline: auto;
  padding-inline: 10px;
  height: 25px;
  background: #f68a06;
  border: none;
  outline: none;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;
`;

export const PersonButton = styled.button`
  width: fit-content;
  min-width: 70%;
  padding-inline: 20px;
  height: 25px;
  background: #000080;
  border: none;
  outline: none;
  margin-inline: 10px;
  margin-block: 5px;
  color: #fff;
  cursor: pointer;
`;

export const AppointmentContainer = styled.div`
  width: 100%;
  color: #fff;
  background: #000080;
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    padding: "10px",
    border: "1px solid #000",
  },
};

export const CalenderHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: flex;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const AppointmentButton = styled.button`
  border: 1px solid black;
  background: #228c22;
  color: #fff;
`;

export const InformationButton = styled.button`
  border: 1px solid black;
  background: red;
  color: #fff;
`;

export const TextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const IconSpan = styled.span`
  border: none;
  background: transparent;
  margin-inline: 5px;
  margin-top: 5px;
`;
