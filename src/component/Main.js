import React from 'react';
import firebase from 'firebase';
import Create from './Create';

const Main = () => {
    return (
        <main>
            <nav>
                <h1>React Crud</h1>
                <h4> Bonjour {firebase.auth().currentUser.displayName} </h4>
                <div onClick={()=> firebase.auth().signOut()}>Se déconnceter</div>
            </nav>
            <Create/>
        </main>
    );
};

export default Main;