
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

  // Call button
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
