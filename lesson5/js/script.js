const favchap = document.querySelector("#favchap");
const bt = document.querySelector("button");
const list = document.querySelector("#list");

bt.addEventListener("click",() => {
    let size = favchap.value;

    let listChapter = document.createElement("li");
	let deleteButton = document.createElement("button");

    listChapter.textContent = size;
	deleteButton.textContent = "❌";

    listChapter.appendChild(deleteButton);
	list.appendChild(listChapter);

    deleteButton.addEventListener("click", () => {
    list.removeChild(listChapter);
    });

    favchap.focus();
	favchap.value = "";
});