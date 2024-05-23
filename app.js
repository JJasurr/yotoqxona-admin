// const form = document.getElementById("form");
// const tasks = document.getElementById("tasks");
// const input = document.getElementById("input");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   //! input qiymatini trim orqali bosh joylarini olib tashladik
//   //! ichida 2dan ortiq belgi bo'lsa yangi "vazifa" yaratdik
//   if (input.value.trim().length > 2) {
//     const taskWrp = document.createElement("div");
//     const taskText = document.createElement("p");
//     const removeBtn = document.createElement("i");
//     removeBtn.className = "fa-solid fa-trash"; 
//     taskWrp.className = "task";
//     taskText.innerHTML = input.value;

//     taskWrp.appendChild(taskText);
//     taskWrp.appendChild(removeBtn);
//     tasks.appendChild(taskWrp);

//     input.value = "";
//     input.focus();

//     removeBtn.addEventListener("click", () => {
//       tasks.removeChild(taskWrp);
//     });

    
//   } else {
//     alert("Iltimos vazifa nomini kiriting");
//   }
// });







const ochill = document.querySelectorAll(".royh")

const ochish = document.querySelectorAll(".yopiq")


console.log(ochill);
for (let i = 0; i < ochill.length; i++) {
    ochill[i].addEventListener("click", function () {
        ochish[i].classList.toggle("registratt")
    })
}