document
  .getElementById("discover-box")
  .addEventListener("click", function () {
    window.location.href = "qna.html";
  });

const now = new Date();
const date = now.toDateString();
document.getElementById("current-date").innerText = date;

document
  .getElementById("board-btn")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    const count = document.getElementById("task-count").innerText;
    const convertedCount = parseInt(count);
    const sum = convertedCount - 1;
    document.getElementById("task-count").innerText = sum;

    const totalTaskCount = document.getElementById("total-task-count").innerText;
    const convertedTotalTaskCount = parseInt(totalTaskCount);
    const taskSum = convertedTotalTaskCount + 1;
    document.getElementById("total-task-count").innerText = taskSum;

    const cardTitle = document.getElementById("card-title").innerText;
    const now = new Date();
    const time = now.toLocaleTimeString();

    const contaier = document.getElementById("history-container");
    const div = document.getElementById("div");
    div.classList.add("bg-green-100", "p-3", "m-3", "rounded-xl", "drop-shadow-md", "text-justify");
    div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `
    contaier.appendChild(div);
  });




// document
//   .querySelectorAll(".board-btn")
//   .addEventListener("click", function () {
//     alert("Board Updated Successfully");
//     const count = document.querySelector(".task-count").innerText;
//     const convertedCount = parseInt(count);
//     const sum = convertedCount - 1;
//     document.getElementById("task-count").innerText = sum;

//     const totalTaskCount = document.getElementById("total-task-count").innerText;
//     const convertedTotalTaskCount = parseInt(totalTaskCount);
//     const taskSum = convertedTotalTaskCount + 1;
//     document.getElementById("total-task-count").innerText = taskSum;

//     const cardTitle = document.getElementById("card-title").innerText;
//     const now = new Date();
//     const time = now.toLocaleTimeString();

//     const contaier = document.getElementById("history-container");
//     const div = document.getElementById("div");
//     div.classList.add("bg-green-100", "p-3", "m-3", "rounded-xl", "drop-shadow-md", "text-justify");
//     div.innerHTML = `
//     <p class="font-medium">
//     You have completed the task ${cardTitle} at ${time}.
//     </p>
//     `
  //   contaier.appendChild(div);
  // });

// document
//   .getElementById("total-task-count")
//   .addEventListener("click", function(){
    
//   })
