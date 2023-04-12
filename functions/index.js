/* eslint-disable eol-last */
// eslint-disable-next-line camelcase

const {default: axios} = require("axios");
const functions = require("firebase-functions");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post("https://api.chatengine.io/users/", {username: user.email, secret: user.uid, email: user.email, first_name: user.displayName}, {headers: {"Private-Key": "fbe318e0-a3bb-4565-bdcb-a40b023ed8a1"}} );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "8cd0ae68-0561-4b9d-80aa-0495c436003e",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});