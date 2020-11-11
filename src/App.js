import React, { useEffect, useState } from "react";
import firebase from "./utils/firebaseConfig";
import Main from "./component/Main";
import { StyledFirebaseAuth } from "react-firebaseui";
import { UiIdContext } from "./component/UiidContext";

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      setUid(user.uid);
    });
  }, []);

  return (
    <UiIdContext.Provider value={uid}>
      <div className="app" style={{ textAlign: "center" }}>
        {isSignedIn ? (
          <Main />
        ) : (
          <div className="login-page">
            <h1>React Crud</h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    </UiIdContext.Provider>
  );
};

export default App;
