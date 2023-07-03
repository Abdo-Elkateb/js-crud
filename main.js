//  js

let product = document.getElementById("product"),
  submit = document.getElementById("submit"),
  body = document.getElementById("body"),
  form = document.getElementById("form"),
  table = document.getElementById("table"),
  thead = document.getElementById("thead"),
  datePro = getDateFromLocal() ?? [],
  status = null;


function createdThead() {
  thead.innerHTML += `
           <tr>
          <th>product</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
 `;
}

createdThead()



function render() {
  // let datePro = getDateFromLocal();
  datePro.forEach(function (item) {
    table.innerHTML += `
           <tr>
          <td>${item.title}</td>
           <td><button class="update" data-id="${item.id}">   Update</button></td>
           <td><button class="deleteItom"  data-id="${item.id}"> Delete</button></td>
           </tr> 
 `;
  });
}
render();


// click ADD


submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (status == null) {
    let id = parseInt(Math.random() * 10000);

    const listDate = {
      id: id,
      title: product.value,
    };
    table.innerHTML += `

            <tr>
            <td>${product.value}</td>
            <td><button class="update" data-id="${id}"> update</button></td>
            <td><button class="deleteItom" data-id="${id}"> delete</button></td>
              </tr>
  `;



    datePro.push(listDate);
    localStorage.setItem("product", JSON.stringify(datePro));
  } else {
    let storage = getDateFromLocal();
    let newDate = storage.map(function (item) {
      if (item.id == status) {
        return {
          id: status,
          title: product.value,
        };
      } else {
        return item;
      }
    })
    localStorage.setItem("product", JSON.stringify(newDate))
    submit.value = "Add";
    submit.style.background = "#fff";
    submit.style.color = "#333";
    status = null

    product.value = ""
    render();
  }


  table.innerHTML = "";
  render();
});


//  // delete the product
let deleteItom = document.querySelectorAll(".deleteItom");
let update = document.querySelectorAll(".update");
let removeAllElment = document.querySelectorAll(".removeAllElment");

body.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteItom")) {
    let item = e.target;
    let id = item.getAttribute("data-id");
    let storage = getDateFromLocal();
    let newDate = storage.filter(function (item) {
      return item.id != id
    })
    localStorage.setItem("product", JSON.stringify(newDate))
    item.parentElement.parentElement.remove()
  } if (e.target.classList.contains("update")) {
    let item = e.target
    let taskes = item.parentElement.previousElementSibling.textContent
    product.value = taskes
    submit.value = "UPDATE";
    submit.style.background = "rgba(8, 248, 8, 0.829)";
    submit.style.border = "none",
      submit.style.color = "#fff";
    status = item.getAttribute("data-id");
  } if (e.target.classList.contains("removeAllElment")) {
    if (datePro.length > 0) {
      datePro.splice(0);
      localStorage.clear();

    }else {

    }


  }
})

// 
function getDateFromLocal() {
  return JSON.parse(localStorage.getItem("product"))
}