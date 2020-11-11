import React, { useContext, useState } from "react";
import firebase from "../utils/firebaseConfig";
import { UiIdContext } from "./UiidContext";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);

  const uId = useContext(UiIdContext);

  const authorCheck = () =>{
      console.log(uId);
      if (item.uId === uId) {
          return true;
      } else {
          return false;
      }
  }

  authorCheck();

  const updateItem = () => {
    let quote = firebase.database().ref("quotesDB").child(item.id);
    if (authorUpdate !== null) {
      quote.update({
        author: authorUpdate,
      });
    }
    if (textUpdate !== null) {
      quote.update({
        text: textUpdate,
      });
    }
    setUpdate(false);
  };

  const deleteItem = ()=>{
    let quote = firebase.database().ref("quotesDB").child(item.id);

    quote.remove();
  }
  return (
    <li>
      {update === false && (
        <div className="item-container">
          <p>"{item.text}"</p>
          <h6>{item.author}</h6>
          
          {authorCheck() && (

          <div className="buttons-container">
            <button onClick={() => setUpdate(!update)}>Update</button>
            <button onClick={deleteItem}>Delete</button>
          </div>
          )}
        </div>
      )}

      {update && (
          <div className="item-container-update">
                <textarea 
                    defaultValue= {item.text}
                    onChange = {(e)=>setTextUpdate(e.target.value)}
                ></textarea>
                <input 
                    type="text"
                    defaultValue={item.author}
                    onChange={(e)=> setAuthorUpdate(e.target.value)}
                />
                <button onClick={updateItem}>Validate Update</button>
          </div>
      )}
    </li>
  );
};

export default UpdateDelete;
