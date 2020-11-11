import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';

const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const createQuote = () => {
        const quoteDB = firebase.database().ref("quoteDB")
        const quote = {
            author,
            text,
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