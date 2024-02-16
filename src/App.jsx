import { useState } from "react";
import "./App.css";
import Button from "./assets/Button/Button";
import Modal from "./assets/Modal/Modal";





function App() {


  const [isModal, setIsModal] = useState(false);
  const [textHeader, setTextHeader] = useState("");
  const [textBody, setTextBody] = useState("");

  
  // const doubleButton = <><Button> <Button/>
  // <Button> <Button/>
  // </>



  // const [cancelButton, setCancelButton] = useState("No,Cancel");
  // const [deleteButton, setDeleteButton] = useState("Yes,Delete");
  // const [secondaryText, setAddButton] = useState("ADD TO FAVORITE");
 

  const handlerClickFirst = () => {
    
    setTextHeader("Product Delete!");
    setTextBody("By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.");
    setIsModal(true);
  };


  const handlerClickSecond = () => {
    
    setTextHeader("Add Product “NAME”");
    setTextBody('Description for you product')
    secondaryText('ADD TO FAVORITE')
    setIsModal(true);
  };

  const handlerClose = () => {
    setIsModal(false);
  };

  return (
    <>
      <Button handlerClick={handlerClickFirst}>Open first modal</Button>
      <Button handlerClick={handlerClickSecond}>Open second modal</Button>
      {isModal && (
        <Modal
          handlerClose={handlerClose}
          header={textHeader}
          body={textBody}
         
        />
      )}
    </>
  );
}

export default App;
