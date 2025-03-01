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
  });

// document
//   .getElementById("total-task-count")
//   .addEventListener("click", function(){
    
//   })
