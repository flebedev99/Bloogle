var content = "";
var input = document.getElementById("Search");
const btn = document.getElementById("btn");
const hmbtn = document.getElementById("hmbtn");
const hmoverlay = document.getElementById("hmop");
const div = document.getElementById("div");

btn.onclick = function searchURL() {
  content = document.getElementById("Search").value;
  if (content === "") {
    return;
  }
  window.location.replace("https://www.bing.com/search?q=" + content);
};

btn.onmouseenter = function opensearch() {
  input.style.width = "96%";
  btn.style.borderColor = "rgb(76, 76, 207)";
  input.style.borderColor = "rgb(76, 76, 207)";
  btn.onmouseleave = function closesearch() {
    input.style.width = "30px";
    btn.style.borderColor = "whitesmoke";
    input.style.borderColor = "white";
  };
};
input.onmouseenter = function mousehit() {
  input.style.width = "96%";
  btn.style.borderColor = "rgb(76, 76, 207)";
  input.style.borderColor = "rgb(76, 76, 207)";
  input.onmouseleave = function mouseleft() {
    input.style.width = "30px";
    btn.style.borderColor = "whitesmoke";
    input.style.borderColor = "white";
  };
};
document.addEventListener("keydown", enter);
function enter(event) {
  if (event.keyCode === 13) {
    content = document.getElementById("Search").value;
    if (content === "") {
      return;
    }
    window.location.replace("https://au.search.yahoo.com/search?fr=yhs-invalid&p=" + content);
  }
}
hmbtn.onclick = function hmbtnclick() {
  if (hmoverlay.style.width === "0px") {
    hmoverlay.style.width = "130px";
    return;
  }
  if (hmoverlay.style.width === "130px") {
    hmoverlay.style.width = "0px";
  }
};
div.onmouseenter = function diventer() {
  input.style.width = "96%";
  btn.style.borderColor = "rgb(76, 76, 207)";
  input.style.borderColor = "rgb(76, 76, 207)";
  div.onmouseleave = function divleave() {
    input.style.width = "30px";
    btn.style.borderColor = "whitesmoke";
    input.style.borderColor = "white";
  };
};
hmbtn.onmouseenter = function newcolor() {
  hmbtn.style.backgroundColor = "green";
  hmbtn.onmouseleave = function oldcolor() {
    hmbtn.style.backgroundColor = "rgb(32, 161, 161)";
  };
};