const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
function Hello() {
   alert("Hello, World"+inputByName);
}
