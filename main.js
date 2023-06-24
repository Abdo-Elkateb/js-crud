//  js

let product = document.getElementById("product"),
  submit = document.getElementById("submit"),
  form = document.getElementById("form"),
  table = document.getElementById("table"),
  datePro = JSON.parse(localStorage.getItem("product")) ?? [],
  status = null;


function rander() {
  let datePro = JSON.parse(localStorage.getItem("product"));
  datePro.forEach(function (item) {
    let deleteItom = document.querySelectorAll(".deleteItom");
    let update = document.querySelectorAll(".update");
    table.innerHTML += `

           <tr>
          <td>${item.title}</td>
           <td><button class="update" data-id="${item.id}">   Update</button></td>
           <td><button class="deleteItom"  data-id="${item.id}"> Delete</button></td>
           </tr> 
 `;
  });
}
rander();


// click ADD


submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (status == null) {
    table.innerHTML += `

            <tr>
            <td>${product.value}</td>
            <td><button class="update"> update</button></td>
            <td><button class="deleteItom"> delete</button></td>
              </tr>
  `;

    const listDate = {
      id: parseInt(Math.random() * 10000),
      title: product.value,
    };

    datePro.push(listDate);
    localStorage.setItem("product", JSON.stringify(datePro));
  } else {
    let storage = JSON.parse(localStorage.getItem("product"))
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
    table.innerHTML = "";
    rander();

  }
  product.value = ""

});


//  // delete the product
let deleteItom = document.querySelectorAll(".deleteItom");
let update = document.querySelectorAll(".update");
// deleteItom.forEach(function (item) {
//   item.addEventListener("click", function () {
//     let id = item.getAttribute("data-id");
//     console.log(id);
//     let storage = JSON.parse(localStorage.getItem("product"))
//     let newDate = storage.filter(function (item) {
//       return item.id != id
//     })
//     localStorage.setItem("product", JSON.stringify(newDate))
//     item.parentElement.parentElement.remove()

//   });
// });

// upData the product


// update.forEach(function (item) {
//   item.addEventListener("click", () => {
//     let taskes = item.parentElement.previousElementSibling.textContent
//     product.value = taskes
//     submit.value = "UPDATE";
//     submit.style.background = "rgba(8, 248, 8, 0.829)";
//     submit.style.border = "none",
//       submit.style.color = "#fff";
//     status = item.getAttribute("data-id")
//     // console.log(status)


//   })
// })


table.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteItom")) {
    let item = e.target;
    let id = item.getAttribute("data-id");
    let storage = JSON.parse(localStorage.getItem("product"))
    let newDate = storage.filter(function (item) {
      return item.id != id
    })
    localStorage.setItem("product", JSON.stringify(newDate))
    item.parentElement.parentElement.remove()
  }
  if (e.target.classList.contains("update")) {
    let item = e.target
        let taskes = item.parentElement.previousElementSibling.textContent
        product.value = taskes
        submit.value = "UPDATE";
        submit.style.background = "rgba(8, 248, 8, 0.829)";
        submit.style.border = "none",
          submit.style.color = "#fff";
        status = item.getAttribute("data-id")
        // console.log(status)
  }
})

