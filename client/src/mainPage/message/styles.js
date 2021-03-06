import styled from 'styled-components';
import {
  CeruleanFrost, BabyBlueEyes, BattleshipGrey, AliceBlue,
} from '../../../../ui/colors';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 65vh min-content;
  grid-gap: 0.5rem;
  height: 100%;
  background-color: ${AliceBlue};

  .banner {
    grid-row: 1 / 2;
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 2rem;
    background-color: ${CeruleanFrost};
  }

  .chatbox {
    grid-row: 2 / 3;
    grid-auto-rows: min-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;

    .date {
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      justify-content: center;
      background-color: #d8e0e5;
      height: 1.3rem;
      align-items: center;
      margin: 0.5rem 0;
    }

    .messageContainer {
      position: relative;
      box-sizing: border-box;
      height: min-content;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: repeat(2, min-content);
      grid-gap: 0.4rem;
      padding: 0.5rem 2rem;
      margin: 0;
      :hover {
        background-color: #d8e0e5;
      }

      .extra {
        display: none;
        background-color: ${BabyBlueEyes};
        position: absolute;
        top: -1.2rem;
        right: 1rem;
        border-radius: 0.7rem;
      }

      :hover .extra {
        display: block;
      }

      .options {
        display: flex;
        padding: 1.5px 0.5rem;
        justify-content: space-between;

        .addTask, .delete, .edit {
          padding: 0.5rem;
          border-radius: 1rem;
          font-size: 1rem;
          color: #484848;
          cursor: pointer;

          :hover {
            transform: scale(1.2);
          }
        }
        .claimed {
          color: #04A777;
          padding: 0.5rem;
          border-radius: 1rem;
          font-size: 1rem;
        }
      }

      .username {
        grid-column: 1 / 2;
        grid-row: 1/ 2;
        align-self: center;
        text-transform: capitalize;
      }

      .message {
        grid-column: span 2;
        grid-row: 2 / 3;
        overflow-wrap: break-word;
      }

      .dateTime {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        justify-content: flex-start;
        align-self: center;
      }
    }

  }

  .textbox {
    grid-row: 3 / 4;
    position: relative;

    button {
      position: absolute;
      right: 10px;
      bottom: 10px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      :focus {
        outline: none;
      }
    }
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 0.8rem;
  box-sizing: border-box;
  width: 100%;
  height: 6rem;
  border-radius: .5rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  border: none;
  // border: 1px solid ${BattleshipGrey};
  font-family: Oxygen, sans-serif;
  :focus {
    background-color: white;
    outline-color: ${CeruleanFrost};
  }
  ::placeholder {
    color: #808080;
    font-size: 1rem;
    font-family: Oxygen, sans-serif;
  }
`;

export const Header = styled.h1`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
  font-weight: 900;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
`;

export const Button = styled.button`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  font-size: ${(props) => props.size}rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
`;

export const ModalForm = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  height: 100%
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  border-radius: 1rem;
  display: grid;
  position: fixed;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 1fr;
  grid-gap: 0.5rem;
  background-color: #f5f5f5;
  color: black;
  align-items: center;
  padding: 1rem;
  cursor: auto;

  .edit {
    grid-column: span 3;
    grid-row: 1 / 2;
    border-radius: .5rem;
    resize: none;
    padding: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    ::placeholder {
      color: #808080;
    }
  }

  .cancel {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 5rem;
    justify-self: flex-end;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      opacity: 0.8;
    }
  }

  .saveChange {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      opacity: 0.8;
    }
  }
`;
