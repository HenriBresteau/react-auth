import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebaseConfig';

const Read = () => {

    const [quoteList,setQuoteList] = useState([]);

    useEffect( ()=>{
        const quoteDB = firebase.database().ref('quotesDB');
        quoteDB.on('value', (snapshot)=>{
            console.log(snapshot.val());
            let previousList = snapshot.val();
            let list =[];
            for (let id in previousList){
                list.push({id, ...previousList[id]})
            }
            setQuoteList(list);
        })
    },[]);

    return (
        <div className='read'>
            <ul>
                { quoteList && quoteList.map((item) =>{
                    return <p>{ item.text} from {item.author}</p>
                })}
            </ul>
        </div>
    );
};

export default Read;