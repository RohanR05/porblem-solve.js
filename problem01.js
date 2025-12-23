document.getElementById("btn-submit").addEventListener("click", function () {
  const textArea = document.getElementById("textArea");

  const newComment = textArea.value;

  const mainContainer = document.getElementById("main-container");

  const commentElement = document.createElement("p");
  commentElement.classList.add("container");
  commentElement.innerText = newComment;

  mainContainer.appendChild(commentElement);

  textArea.value = "";
});
