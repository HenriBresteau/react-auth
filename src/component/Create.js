import React, { useContext, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import { UiIdContext } from './UiidContext';

const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const uId= useContext(UiIdContext);

    const createQuote = () => {
        const quoteDB = firebase.database().ref("quotesDB")
        const quote = {
            author,
            text,
            uId,
        };
        quoteDB.push(quote);
        setAuthor('');
        setText('');
    }
    return (
        <div className='create'>
            <h4>Déposer une citation</h4>
            <div className="form">
                <input
                    type="text"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder='Citation'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button onClick={createQuote}>Create</button>
            </div>

        </div>
    );
};

export default Create;