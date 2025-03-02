document.getElementById("discover-box").addEventListener("click", function () {
  window.location.href = "qna.html";
});

const now = new Date();
const date = now.toDateString();
document.getElementById("current-date").innerText = date;
// item1
document.getElementById("board-btn").addEventListener("click", function () {
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
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn").disabled = true;
});

// item2
document.getElementById("board-btn2").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const count = document.getElementById("task-count").innerText;
  const convertedCount = parseInt(count);
  const sum = convertedCount - 1;
  document.getElementById("task-count").innerText = sum;

  const totalTaskCount = document.getElementById("total-task-count").innerText;
  const convertedTotalTaskCount = parseInt(totalTaskCount);
  const taskSum = convertedTotalTaskCount + 1;
  document.getElementById("total-task-count").innerText = taskSum;

  const cardTitle = document.getElementById("card-title2").innerText;
  const now = new Date();
  const time = now.toLocaleTimeString();

  const contaier = document.getElementById("history-container");
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn2").disabled = true;
});

// item3
document.getElementById("board-btn3").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const count = document.getElementById("task-count").innerText;
  const convertedCount = parseInt(count);
  const sum = convertedCount - 1;
  document.getElementById("task-count").innerText = sum;

  const totalTaskCount = document.getElementById("total-task-count").innerText;
  const convertedTotalTaskCount = parseInt(totalTaskCount);
  const taskSum = convertedTotalTaskCount + 1;
  document.getElementById("total-task-count").innerText = taskSum;

  const cardTitle = document.getElementById("card-title3").innerText;
  const now = new Date();
  const time = now.toLocaleTimeString();

  const contaier = document.getElementById("history-container");
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn3").disabled = true;
});

// item4
document.getElementById("board-btn4").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const count = document.getElementById("task-count").innerText;
  const convertedCount = parseInt(count);
  const sum = convertedCount - 1;
  document.getElementById("task-count").innerText = sum;

  const totalTaskCount = document.getElementById("total-task-count").innerText;
  const convertedTotalTaskCount = parseInt(totalTaskCount);
  const taskSum = convertedTotalTaskCount + 1;
  document.getElementById("total-task-count").innerText = taskSum;

  const cardTitle = document.getElementById("card-title4").innerText;
  const now = new Date();
  const time = now.toLocaleTimeString();

  const contaier = document.getElementById("history-container");
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn4").disabled = true;
});

// item5
document.getElementById("board-btn5").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const count = document.getElementById("task-count").innerText;
  const convertedCount = parseInt(count);
  const sum = convertedCount - 1;
  document.getElementById("task-count").innerText = sum;

  const totalTaskCount = document.getElementById("total-task-count").innerText;
  const convertedTotalTaskCount = parseInt(totalTaskCount);
  const taskSum = convertedTotalTaskCount + 1;
  document.getElementById("total-task-count").innerText = taskSum;

  const cardTitle = document.getElementById("card-title5").innerText;
  const now = new Date();
  const time = now.toLocaleTimeString();

  const contaier = document.getElementById("history-container");
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn5").disabled = true;
});

// item6
document.getElementById("board-btn6").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const count = document.getElementById("task-count").innerText;
  const convertedCount = parseInt(count);
  const sum = convertedCount - 1;
  document.getElementById("task-count").innerText = sum;

  const totalTaskCount = document.getElementById("total-task-count").innerText;
  const convertedTotalTaskCount = parseInt(totalTaskCount);
  const taskSum = convertedTotalTaskCount + 1;
  document.getElementById("total-task-count").innerText = taskSum;

  const cardTitle = document.getElementById("card-title6").innerText;
  const now = new Date();
  const time = now.toLocaleTimeString();

  const contaier = document.getElementById("history-container");
  const div = document.createElement("div");
  div.classList.add(
    "bg-green-100",
    "p-3",
    "m-3",
    "rounded-xl",
    "drop-shadow-md",
    "text-justify"
  );
  div.innerHTML = `
    <p class="font-medium">
    You have completed the task ${cardTitle} at ${time}.
    </p>
    `;
  contaier.appendChild(div);

  document.getElementById("board-btn6").disabled = true;
});

document
  .getElementById("clear-btn")
  .addEventListener("click", function () {
    document.getElementById("history-container").innerHTML= "";
  });
