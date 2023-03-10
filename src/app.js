/* eslint-disable */
window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let webname = [];

  for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
      for (k = 0; k < noun.length; k++) {
        webname.push(pronoun[i] + adj[j] + noun[k] + ".com");
        console.log(webname);
      }
    }
  }
  return webname;
};
