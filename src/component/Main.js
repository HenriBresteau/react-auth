import React from 'react';
import firebase from 'firebase';

const Main = () => {
    return (
        <main>
            <nav>
                <h1>React Crud</h1>
                <h4> Bonjour {firebase.auth().currentUser.displayName} </h4>
                <div onClick={()=> firebase.auth().signOut()}>Se déconnceter</div>
            </nav>
        </main>
    );
};

export default Main;