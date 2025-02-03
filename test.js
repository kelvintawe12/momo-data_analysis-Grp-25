// Advanced JavaScript Features for Geographical Analysis Section

// Tooltip functionality for SVG countries
const tooltip = document.getElementById("tooltip");
document.querySelectorAll(".country-path").forEach((country) => {
  country.addEventListener("mousemove", (e) => {
    const countryName = country.getAttribute("data-country");
    tooltip.textContent = countryName;
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.style.opacity = 1;
  });
  country.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
  // On click, show modal with detailed information
  country.addEventListener("click", () => {
    showCountryModal(country.getAttribute("data-country"));
  });
});

// Modal popup functionality
// (If a modal is not already present in your HTML, create it dynamically)
let modalOverlay = document.getElementById("modalOverlay");
if (!modalOverlay) {
  modalOverlay = document.createElement("div");
  modalOverlay.id = "modalOverlay";
  modalOverlay.className = "modal-overlay";
  modalOverlay.innerHTML = `
    <div class="modal">
      <h3 id="modalTitle"></h3>
      <p id="modalContent"></p>
      <button id="modalClose">Close</button>
    </div>
  `;
  document.body.appendChild(modalOverlay);
}
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function showCountryModal(countryName) {
  // In a real application, fetch data dynamically. Here we use sample values.
  const sampleSpending = {
    Rwanda: "$8,765",
    Ethiopia: "$9,876",
    Kenya: "$12,345",
    Uganda: "$10,678",
  };
  modalTitle.textContent = `${countryName} Spending Details`;
  modalContent.textContent = `Total spending in ${countryName}: ${
    sampleSpending[countryName] || "$0.00"
  }`;
  modalOverlay.style.display = "flex";
}
modalClose.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

// Optional: Dynamically update the region breakdown panel
function updateRegionBreakdown() {
  const regionList = document.getElementById("regionList");
  regionList.innerHTML = "";
  // Here we assume sampleSpending contains our region data.
  const sampleSpending = {
    Rwanda: "$8,765",
    Ethiopia: "$9,876",
    Kenya: "$12,345",
    Uganda: "$10,678",
  };
  Object.entries(sampleSpending).forEach(([region, amount]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${region}:</strong> ${amount}`;
    regionList.appendChild(li);
  });
}
updateRegionBreakdown();
