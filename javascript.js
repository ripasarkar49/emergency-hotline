// // Elements
// const heartCountEl = document.getElementById("heartCount");
// const coinCountEl = document.getElementById("coinCount");
// const copyCountEl = document.getElementById("copyCount");
// const historyList = document.getElementById("historyList");

// const heartBtn = document.getElementById("heartBtn");
// const callBtn = document.getElementById("callBtn");
// const copyBtn = document.getElementById("copyBtn");

// // Initial values
// let heartCount = 0;
// let coinCount = 100;
// let copyCount = 0;

// // Heart Button Click
// heartBtn.addEventListener("click", () => {
//   heartCount++;
//   heartCountEl.textContent = heartCount;
// });

// // Copy Button Click
// copyBtn.addEventListener("click", () => {
//   copyCount++;
//   copyCountEl.textContent = copyCount;
// });

// // Call Button Click
// callBtn.addEventListener("click", () => {
//   if (coinCount >= 20) {
//     coinCount -= 20; // deduct 10 coins per call
//     coinCountEl.textContent = coinCount;

//     // Add to history
//     const now = new Date();
//     const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//     const li = document.createElement("li");
//     li.className = "flex items-center gap-2";
//     li.innerHTML = `<i class="fa-solid fa-clock text-gray-500"></i> Call at ${time}`;
//     historyList.prepend(li); // latest on top
//   } else {
//     alert("Not enough coins to make a call!");
//   }
// });

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// heart button click

document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});


//   call button click

document.querySelectorAll(".service-card").forEach((card) => {
  const serviceName = card.dataset.service;
  const serviceNumber = card.dataset.number;

  // Call btn
  card.querySelector(".callBtn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    coinCountEl.textContent = coinCount;
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to history
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const li = document.createElement("li");
    li.textContent = ` ${serviceName} - ${serviceNumber} at ${time}`;
    historyList.appendChild(li);
  });

    card.querySelector(".copyBtn").addEventListener("click", () => {
          navigator.clipboard.writeText(serviceNumber);
          alert(`Copied ${serviceNumber}`);
        });
});
// copy button click
document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    copyCount++;
    copyCountEl.textContent = copyCount;
  });
});




// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
