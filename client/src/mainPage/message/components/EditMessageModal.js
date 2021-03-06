import React, { useState } from 'react';
import axios from 'axios';
import {
  TextArea, Button, ModalForm, ModalWrapper,
} from '../styles';

const EditMessageModal = ({ setModal, messageToEdit }) => {
  const [input, setInput] = useState(messageToEdit.message_text);

  const getInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const saveChange = () => {
    messageToEdit.message_text = input;
    axios.post('/chat', { message: { message_id: messageToEdit.message_id, message_text: messageToEdit.message_text } })
      .then((result) => {
        setModal(false);
      })
      .catch((err) => { throw err; });
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false && input) {
      saveChange();
    }
  };

  return (
    <ModalForm>
      <ModalWrapper className="modal">
        <TextArea
          className="edit"
          value={input}
          onChange={(e) => getInput(e)}
          onKeyDown={(e) => onEnterPress(e)}
        />
        <Button
          className="cancel"
          width="min-content"
          height={2}
          background="#808080"
          color="white"
          onClick={() => setModal(false)}
        >
          Cancel
        </Button>
        <Button
          className="saveChange"
          width="min-content"
          height={2}
          background="#04A777"
          color="white"
          onClick={saveChange}
        >
          Save Change
        </Button>
      </ModalWrapper>
    </ModalForm>
  );
};

export default EditMessageModal;
