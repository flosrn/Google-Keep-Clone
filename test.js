/* 
=========================================
              🌟 Buttons 🌟
========================================= 
*/
const closePopUpButton = document.querySelector("#js-confirm");
const showInputButton = document.querySelector("#js-plus");
const checkButton = document.querySelectorAll("#js-check");
const showItemCheckedButton = document.querySelector("#js-show-checked");
const returnButton = document.querySelector("#js-return");
const pinButton = document.querySelector("#js-pin");
const reminderButton = document.querySelector("#js-reminder");
const archiveButton = document.querySelector("#js-archive");
const option1Button = document.querySelector("#js-option-1");
const option2Button = document.querySelector("#js-option-2");
const option3Button = document.querySelector("#js-option-3");
const undoButton = document.querySelector("#js-undo");
const redoButton = document.querySelector("#js-redo");
const closeAlertButton = document.querySelector("#js-close-alert");

const hideCheckboxsButton = document.querySelector("#js-hide-checkboxs");
const uncheckAllButton = document.querySelector("#js-uncheck-all");
const deleteCheckedItemsButton = document.querySelector("#js-delete-checked-items");

/* 
=========================================
            ⭐ Body elements ⭐
========================================= 
*/
const listTop = document.querySelector("#list-top");
const listBottom = document.querySelector("#list-bottom");

const itemsCacheable = document.getElementsByClassName("cacheable");
const icon = document.querySelector(".fa-angle-down");

const body = document.querySelector("body");
const divTop = document.querySelector(".top");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup-box");
const alert = document.querySelector(".alert-box");
const warning = document.querySelector(".warning");

const mainContainer = document.querySelector(".main-container");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const footer = document.querySelector(".footer");

const options1 = document.querySelector(".group-options-1");
const options3 = document.querySelector(".group-options-3");

/* 
=========================================
              ⭐ Others ⭐
========================================= 
*/
const white = "#fafafa";
const red = "#ff7043";
const orange = "#FFB74D";
const yellow = "#FFEB3B";
const green = "#C6FF00";
const azur = "#18FFFF";
const blue = "#2196F3";
const pink = "#FF80AB";

var countListTop = listTop.querySelectorAll("li").length + 1;
var  countListBottom = listBottom.querySelectorAll("li").length - 1;
var id = listTop.querySelectorAll("li").length;
var idB = listBottom.querySelectorAll("li").length;

const total = document.querySelector("#total");
total.textContent = countListBottom;

/* 
=========================================
              ⭐ Events ⭐
========================================= 
*/
closePopUpButton.addEventListener("click", close);
showInputButton.addEventListener("click", showInput);
document.addEventListener("click", verifyContent);
showItemCheckedButton.addEventListener("click", showItemChecked);

option1Button.addEventListener("click", showOptions1);
option3Button.addEventListener("click", showOptions3);

hideCheckboxsButton.addEventListener("click", hideCheckboxs);
uncheckAllButton.addEventListener("click", uncheckAll);
deleteCheckedItemsButton.addEventListener("click", deleteCheckedItems);

/* 
=========================================
             ⭐ Functions ⭐
========================================= 
*/
// ADD INPUT
function showInput() {
  const li = document.createElement("li");
  const a1 = document.createElement("a");
  const a2 = document.createElement("a");
  const a3 = document.createElement("a");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  const i3 = document.createElement("i");
  const span = document.createElement("span");
  const input = document.createElement("input");

  li.setAttribute("id", "liInput");

  i1.className = "fas fa-ellipsis-v";
  i2.className = "fas fa-ellipsis-v";
  i3.className = "far fa-square";

  input.type = "text";
  input.autofocus = true;
  input.setAttribute("id", "input");
  input.setAttribute("onclick", "addItemToTheTopList");
  
  a1.appendChild(i1);
  a1.appendChild(i2);
  a2.appendChild(i3);
  a3.appendChild(input);
  li.appendChild(a1);
  li.appendChild(a2);
  li.appendChild(a3);
  
  listTop.insertBefore(li, listTop.childNodes[countListTop].nextSibling);

  input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          addItemToTheTopList();
      }
  });
  input.focus();
}


// ADD NEW ITEM
function addItemToTheTopList(event) {
  var id = listTop.querySelectorAll("li").length;
  var idB = listBottom.querySelectorAll("li").length;
  
  const input = document.getElementById("input");

  if(input != null) {

    const li = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const i1 = document.createElement("i");
    const i2 = document.createElement("i");
    const i3 = document.createElement("i");
    const i4 = document.createElement("i");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const inputValue = input.value;

    const text = document.createTextNode(inputValue);

    li.setAttribute("id", `item${id}`);

    i1.className = "fas fa-ellipsis-v";
    i2.className = "fas fa-ellipsis-v";
    i3.className = "far fa-square";
    i4.className = "fas fa-times-circle";
    i4.setAttribute("style", "color: #757575;");

    a1.className = "my-handle";
    a2.setAttribute("onclick", `checkItemTop('item${id}')`);
    a3.setAttribute("onclick", `editItem('item${id}')`);

    span.setAttribute("id", `contentitem${id}`);
    span.appendChild(text);

    button.setAttribute("onclick", `removeItemTop('item${id}')`);
    
    a1.appendChild(i1);
    a1.appendChild(i2);
    a2.appendChild(i3);
    li.appendChild(a1);
    li.appendChild(a2);
    li.appendChild(a3);
    a3.appendChild(span);
    li.appendChild(button);
    button.appendChild(i4);

    listTop.insertBefore(li, listTop.childNodes[countListTop].nextSibling);

    const oldInput = document.querySelector("#liInput");

    oldInput.remove();

    id++;
    countListTop++;
  }
}

// CHECK ITEM
function checkItemTop(itemId) {

  var id = listTop.querySelectorAll("li").length;
  var idB = listBottom.querySelectorAll("li").length;

  const item = document.getElementById(itemId);

  const content = document.querySelector(`#content${itemId}`).innerHTML;

  const li = document.createElement("li");
  const a1 = document.createElement("a");
  const a2 = document.createElement("a");
  const a3 = document.createElement("a");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  const i3 = document.createElement("i");
  const i4 = document.createElement("i");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.setAttribute("id", `item${idB}B`);
  li.className = "cacheable";

  i1.className = "fas fa-ellipsis-v";
  i2.className = "fas fa-ellipsis-v";
  i3.className = "fas fa-check-square";
  i4.className = "fas fa-times-circle";
  i4.setAttribute("style", "color: #757575;");

  a2.setAttribute("onclick", `checkItemBottom('item${idB}B')`);
  a3.setAttribute("onclick", `editItem('item${idB}B')`);

  span.setAttribute("id", `contentitem${idB}B`);
  span.innerHTML = content;

  button.setAttribute("onclick", `removeItemBottom('item${idB}B')`);

  a1.appendChild(i1);
  a1.appendChild(i2);
  a2.appendChild(i3);
  li.appendChild(a1);
  li.appendChild(a2);
  li.appendChild(a3);
  a3.appendChild(span);
  li.appendChild(button);
  button.appendChild(i4);

  listBottom.appendChild(li);

  listTop.removeChild(item);
  
  countListBottom++;
  countListTop--;
  idB++;
  id--;
  total.textContent = countListBottom;
}


// UNCHECK ITEM
function checkItemBottom(itemId) {
  const item = document.getElementById(itemId);
  
  const content = document.querySelector(`#content${itemId}`).innerHTML;

  const li = document.createElement("li");
  const a1 = document.createElement("a");
  const a2 = document.createElement("a");
  const a3 = document.createElement("a");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  const i3 = document.createElement("i");
  const i4 = document.createElement("i");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.setAttribute("id", `item${id}`);

  i1.className = "fas fa-ellipsis-v";
  i2.className = "fas fa-ellipsis-v";
  i3.className = "far fa-square";
  i4.className = "fas fa-times-circle";
  i4.setAttribute("style", "color: #757575;");

  a1.className = "my-handle";
  a2.setAttribute("onclick", `checkItemTop('item${id}')`);
  a3.setAttribute("onclick", `editItem('item${id}')`);

  span.setAttribute("id", `contentitem${id}`);
  span.innerHTML = content;

  button.setAttribute("onclick", `removeItemTop('item${id}')`);

  a1.appendChild(i1);
  a1.appendChild(i2);
  a2.appendChild(i3);
  li.appendChild(a1);
  li.appendChild(a2);
  li.appendChild(a3);
  a3.appendChild(span);
  li.appendChild(button);
  button.appendChild(i4);

  listTop.insertBefore(li, listTop.childNodes[countListTop].nextSibling);

  listBottom.removeChild(item);

  countListTop++;
  countListBottom--;
  id++;
  idB--;
  total.textContent = countListBottom;
}

// HIDE / SHOW CHECKED ITEMS
function showItemChecked() {
  for(var x = 0; x < itemsCacheable.length; x++) {
    itemsCacheable[x].classList.toggle("test");
  }
  icon.classList.toggle("turn");
}

// EDIT ITEM
function editItem(itemId) {
  const content = document.querySelector(`#content${itemId}`);

  content.setAttribute("contenteditable", "true");

  content.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        content.setAttribute("contenteditable", "false");
      }
  });
}

// SORT ITEMS
Sortable.create(listTop, {
  handle: ".my-handle",
  filter: ".js-plus"
});


// REMOVE ITEM (top)
function removeItemTop(itemId) {
  const item = document.getElementById(itemId);
  listTop.removeChild(item);
  countListTop--;
  id--;
}

// REMOVE ITEM (bottom)
function removeItemBottom(itemId) {
  const item = document.getElementById(itemId);
  listBottom.removeChild(item);
  countListBottom--;
  idB--;
  total.textContent = countListBottom;
}


// CLOSE POPUP
function close() {
  body.classList.remove("blur");
  popup.classList.add("bounceOut");

  setTimeout(function() {
    popup.remove();
    popupContainer.style.display = "none";
  }, 700);
}


// SHOW ALERT
function showAlert() {
  popupContainer.style.display = "flex";
  popupContainer.style.backgroundColor = "transparent";

  alert.style.display = "block";

  setTimeout(function() {
    warning.classList.add("shake");
  }, 300);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  alert.style.border = "1em solid" + getRandomColor();
}


// CLOSE ALERT
function closeAlert() {
  alert.classList.add("bounceOutRight");
  
  setTimeout(function() {
    popupContainer.style.display = "none";
    alert.style.display = "none";
    alert.classList.remove("bounceOutRight");
  }, 300);
}

// SHOW OPTIONS 1 
function showOptions1() {
  const visibility = window.getComputedStyle(options1).visibility;

  if(visibility == "hidden") {
    options1.classList.add("showOptions1");
    options1.classList.remove("hideOptions1");
  } else {
    options1.classList.add("hideOptions1");
    options1.classList.remove("showOptions1");
  }
}

// HIDE / SHOW CHECKBOXS
function hideCheckboxs() {
  const items = document.querySelectorAll(".top a:nth-child(3) > span");
  const line = document.querySelector(".separation");
  const div = document.createElement('div');
  div.className = "onlyText";

  const button = document.querySelector("#js-hide-checkboxs span");
  const display = window.getComputedStyle(listTop).display;

  if(display == "block") {
    for(var i = 0; i < items.length; i++) {
      
      const item = items[i];
      const content = item.innerHTML;

      div.innerHTML += "<br>" + content; 

      divTop.appendChild(div);
    }
    listTop.style.display = "none";
    line.style.display = "none";
    listBottom.style.display = "none";
    button.innerHTML = "Show checkboxs";
  } 
  else {
    const text = document.querySelector(".onlyText");
    listTop.style.display = "block";
    line.style.display = "block";
    listBottom.style.display = "block";
    text.remove();
    button.innerHTML = "Hide checkboxs"
  }
}

// UNCHECK ALL ITEMS
function uncheckAll() {
  var id = listTop.querySelectorAll("li").length;
  var idB = listBottom.querySelectorAll("li").length;

  const items = document.querySelectorAll(".bottom a:nth-child(3) span");

  for(var i = 0; i < items.length; i++) {
    const item = items[i];
    const content = item.innerHTML;

    const li = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const i1 = document.createElement("i");
    const i2 = document.createElement("i");
    const i3 = document.createElement("i");
    const i4 = document.createElement("i");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.setAttribute("id", `item${id}`);

    i1.className = "fas fa-ellipsis-v";
    i2.className = "fas fa-ellipsis-v";
    i3.className = "far fa-square";
    i4.className = "fas fa-times-circle";
    i4.setAttribute("style", "color: #757575;");

    a1.className = "my-handle";
    a2.setAttribute("onclick", `checkItemTop('item${id}')`);
    a3.setAttribute("onclick", `editItem('item${id}')`);

    span.setAttribute("id", `contentitem${id}`);
    span.innerHTML = content;

    button.setAttribute("onclick", `removeItemTop('item${id}')`);

    a1.appendChild(i1);
    a1.appendChild(i2);
    a2.appendChild(i3);
    li.appendChild(a1);
    li.appendChild(a2);
    li.appendChild(a3);
    a3.appendChild(span);
    li.appendChild(button);
    button.appendChild(i4);

    listTop.insertBefore(li, listTop.childNodes[countListTop].nextSibling);

    countListTop++;
    countListBottom--;
    id++;
    idB--;
    total.textContent = countListBottom;
  }
  const li = document.querySelectorAll(".bottom li");

  for(var j = 1; j < li.length; j++) {
    li[j].remove();
  }
}

// DELETE CHECKED ITEMS
function deleteCheckedItems() {
  const li = document.querySelectorAll(".bottom li");

  for(var j = 1; j < li.length; j++) {
    li[j].remove();
  }
  countListBottom = 0;
  total.textContent = countListBottom;
}

// SHOW OPTIONS 3
function showOptions3() {
  const visibility = window.getComputedStyle(options3).visibility;

  if(visibility == "hidden") {
    options3.classList.add("showOptions3");
    options3.classList.remove("hideOptions3");
  } else {
    options3.classList.add("hideOptions3");
    options3.classList.remove("showOptions3");
  }
}


// APP COLOR CHANGE
function changeColor(color) {
  const defaultColor = document.querySelector("#defaultColorIcon");

  mainContainer.style.backgroundColor = color;
  header.style.backgroundColor = color;
  title.style.backgroundColor = color;
  container.style.backgroundColor = color;
  footer.style.backgroundColor = color;
  options3.style.backgroundColor = color;

  defaultColor.style.display = "none";
}

function verifyContent() {
  if (event.target.closest("#js-plus, #input, button")) return;
  addItemToTheTopList();

  const visibility = window.getComputedStyle(options1).visibility;

  if(visibility == "visible") {
    options1.classList.add("hideOptions1");
    options1.classList.remove("showOptions1");
  }
}