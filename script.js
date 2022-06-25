let data = ["Item 0", "Item 1", "Item 2"]; //Demo array
let output = document.querySelector("#output");

function getInput() {
    let input = document.getElementById("input");
    if (input.value != "") {
        addToArray(input.value);
        input.value = "";
    }
    clearInput();
    printArray(data);
}


function addToArray(input) {
    data.push(input);
}



function printArray(data) {
    let listParent = document.createElement("div");
    listParent.className = "listParent";

    for (let i = 0; i < data.length; i++) {
        let listItemWrapper = document.createElement("div");
        listItemWrapper.className = "listItemWrapper";
        let listItem = document.createElement("span");
        let removeItem = document.createElement("span");
        listItem.className = "listContent";

        removeItem.onclick = function () { removeSelctedItem(listItemWrapper); }


        listItem.innerHTML = data[i];
        removeItem.innerHTML = " Remove Item <br>";

        listItemWrapper.appendChild(listItem);
        listItemWrapper.appendChild(removeItem);
        listParent.appendChild(listItemWrapper);
    }
    output.appendChild(listParent);
}
function clearInput() {
    output.innerHTML = "";
}

function removeSelctedItem(listItemWrapper) {
    let domMatch = listItemWrapper.firstChild.innerHTML;

    listItemWrapper.parentNode.removeChild(listItemWrapper);

    for (i = 0; i < data.length; i++) {
        if (domMatch === data[i]) {
            // console.log("Dom match: ", domMatch, " data[i]:", data[i]);
            data.pop(data[i]);
            // console.log(data);
        }
    }
}
