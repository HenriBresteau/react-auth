import React, { useState } from "react";
import firebase from "../utils/firebaseConfig";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);

  const updateItem = () => {
    let quote = firebase.database().ref("quoteDB").child(item.id);
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

  return (
    <li>
      {update === false && (
        <div className="item-container">
          <p>"{item.text}"</p>
          <h6>{item.author}</h6>
          <div className="buttons-container">
            <button onClick={() => setUpdate(!update)}>Update</button>
            <button>Delete</button>
          </div>
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
