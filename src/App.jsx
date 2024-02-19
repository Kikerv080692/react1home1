import { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./assets/Button/Button";
import Modal from "./assets/Modal/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [textHeader, setTextHeader] = useState("");
  const [textBody, setTextBody] = useState("");
  const [listClass, setListClass ] = useState("")
  const [listClass2, setListClass2 ] = useState("")
  const [firstTextBtnFooter, setFirstTextBtnFooter] = useState("");
  const [secondaryTextBtnFooter, setSecondaryTextBtnFooter] = useState("");

  const handlerClickFirst = () => {
    setTextHeader("Product Delete!");
    setTextBody(
      "By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
    );
    setFirstTextBtnFooter("NO, CANCEL");
    setSecondaryTextBtnFooter("YES,DELETE");
    setListClass('btn-footer')
    setIsModal(true);
  };
  
  const handlerClickSecond = () => {
    setTextHeader("Add Product “NAME”");
    setTextBody("Description for you product");
    setFirstTextBtnFooter("ADD TO FAVORITE");
    setSecondaryTextBtnFooter("");
    setListClass2('btn-footer2')
    setIsModal(true);
  };

  const handlerClose = () => {
    setIsModal(false);
  };

  let menuRef = useRef(Modal);
  console.log(menuRef)

  useEffect(() => {
    let handler = (e) => {
      const target = e.target
      console.log(target)
      if (!menuRef.current.contains(target)) {
        console.log(menuRef.current.contains(target));
        setIsModal(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // function useOutsideClick() {}

  return (
    <>
      <Button className="exit-btn" handlerClick={handlerClickFirst}>
        Open first modal
      </Button>
      <Button className="exit-btn" handlerClick={handlerClickSecond}>
        Open second modal
      </Button>
      {isModal  && (
        <Modal
          ref={menuRef}
          handlerClose={handlerClose}
          header={textHeader}
          body={textBody}
          firstClick={handlerClose}
          secondaryClick={handlerClose}
          firstText={firstTextBtnFooter}
          secondaryText={secondaryTextBtnFooter}
          listClass={listClass}
          listClass2={listClass2}
        />
      )}
    </>
  );
}

export default App;
