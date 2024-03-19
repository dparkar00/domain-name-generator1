/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { NoEmitOnErrorsPlugin } from "webpack";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let fourthpart = [".com", ".net", ".org", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  let resArr = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < fourthpart.length; l++) {
          let res = pronoun[i] + adj[j] + noun[k] + fourthpart[l];
          resArr.push(res);
          console.log(res);
        }
      }
    }
  }
  for (let i = 0; i < resArr.length; i++) {
    let newElement = document.createElement("h6");
    newElement.innerHTML = resArr[i];
    document.querySelector("#domainName").appendChild(newElement);
  }
};
