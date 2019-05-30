<template>
  <div id="firebaseui-auth-container" class="top"/>
</template>

<script>
import firebase from "firebase/app";
import firebaseui from "firebaseui";
export default {
  name: "Auth",
  mounted() {
    const uiConfig = {
      signInFlow: "popup",
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,

        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ]
    };
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start("#firebaseui-auth-container", uiConfig);
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }
};
</script>
