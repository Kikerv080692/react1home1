import { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./assets/Button/Button";
import Modal from "./assets/Modal/Modal";

const footer1 = (
  <>
    <Button className="btn-footer1">"NO, CANCEL"</Button>
    <Button>"YES,DELETE"</Button>
  </>
);


const footer2 = (
  <>
    <Button className="btn-footer2">"ADD TO FAVORITE"</Button>
  </>
);
const header1 = (
  <>
    <img src="../src/image/iMac_Typing_on_Keyboard.webp" alt="" />
    <p>Product Delete!</p>
  </>
)



const modals = [
  {
    header: header1,
    body: "By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.",
    footer: footer1,
  },
  {
    header: "Add Product “NAME”",
    body: "Description for you product",
    footer: footer2,
  },
];

function App() {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState({})

  const handlerClickFirst = () => {
    setModalContent(() => {
      return {...modals[0]}
    })
    setIsModal(true);
  };

  const handlerClickSecond = () => {
    setModalContent(() => {
      return {...modals[1]}
    })
    setIsModal(true);
  };

  const handlerClose = () => {
    setIsModal(false);
  };

  return (
    <>
      <Button className="exit-btn" handlerClick={handlerClickFirst}>
        Open first modal
      </Button>
      <Button className="exit-btn" handlerClick={handlerClickSecond}>
        Open second modal
      </Button>
      {isModal && (
        <Modal
          handlerClose={handlerClose}
          isModal={isModal}
          {...modalContent}
        />
      )}
    </>
  );
}

export default App;


