//  js

let product = document.getElementById("product"),
  submit = document.getElementById("submit"),
  form = document.getElementById("form"),
  table = document.getElementById("table"),
  datePro = JSON.parse(localStorage.getItem("product")) ?? [];

datePro.forEach(function (item) {
  table.innerHTML += `

           <tr>
          <td>${item.title}</td>
           <td><button class="update" data-id="${item.id}">   Update</button></td>
           <td><button class="deleteItom"  data-id="${item.id}"> Delete</button></td>
           </tr> 
 `;
});

submit.addEventListener("click", (e) => {
  // this code make it you to can sent value from tbody
  e.preventDefault();
  table.innerHTML += `

           <tr>
           <td>${product.value}</td>
           <td><button> delete</button></td>
           <td><button> update</button></td>
     </tr> 
 `;

  const listDate = {
    id: parseInt(Math.random() * 10000),
    title: product.value,
  };

  datePro.push(listDate);
  localStorage.setItem("product", JSON.stringify(datePro));
  listDate.value = "";
});


//  // delete the product
let deleteItom = document.querySelectorAll(".deleteItom");
let update = document.querySelectorAll(".update");
deleteItom.forEach(function (item) {
  item.addEventListener("click", function () {
    let id = item.getAttribute("data-id");
    console.log(id);
    let storage = JSON.parse(localStorage.getItem("product"))
    let newDate = storage.filter(function (item) {
      return item.id != id
    })
    localStorage.setItem("product", JSON.stringify(newDate))
    item.parentElement.parentElement.remove()

  });
});

// upData the product


update.forEach(function(item) {
  item.addEventListener("click", ()=> {
    console.log(item.parentElement.previousElementSibling.textContent)
    let taskes = item.parentElement.previousElementSibling.textContent
    product.value = taskes
    submit.value = "UPDATE";
    submit.style.background = "rgba(8, 248, 8, 0.829)";
    submit.style.border = "none",
      submit.style.color = "#fff";

  
  })
})


