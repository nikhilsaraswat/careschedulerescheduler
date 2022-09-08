import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/actions/index";

import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  customStyles,
  PersonButton,
} from "../styledComponent/index";

function ReplaceModal3(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const textName = ["edu4", "edu8", "edu12", "edu15", "edu18"];
  //   const onSubmit = (data) => {};
  const { replacePerson } = bindActionCreators(actionCreators, dispatch);

  const setTextName = (replaceWith) => {
    replacePerson({
      apnId: props.apnId,
      replacePerson: props.replacePerson,
      replaceWith,
    });
    props.closeModal3();
  };

  return (
    <Modal
      isOpen={props.modalState3}
      ariaHideApp={false}
      onRequestClose={props.closeModal3}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>replace edu1 with</ModalHeader>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <ModalBody>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {textName.map((name, i) => (
            //console.log(name)
            <PersonButton key={i} onClick={() => setTextName(name)}>
              {name}
            </PersonButton>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel> */}
      </ModalFooter>
      {/* </form> */}
    </Modal>
  );
}

export default ReplaceModal3;
