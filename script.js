fetch("https://isro.vercel.app/api/customer_satellites")
  .then((response) => response.json())
  .then((data) => {
    const satellites = data.customer_satellites; // Accessing the array of satellites
    const accordion = document.getElementById("accordion");

    // Loop through each satellite and create accordion card
    satellites.forEach((satellite, index) => {
      // Create card header
      const cardHeader = document.createElement("div");
      cardHeader.className = "accordion-item";
      cardHeader.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            ${satellite.id}
          </button>
        </h2>
      `;

      // Create card body
      const cardBody = document.createElement("div");
      cardBody.id = `collapse${index}`;
      cardBody.className = "accordion-collapse collapse";
      cardBody.setAttribute("aria-labelledby", `heading${index}`);
      cardBody.setAttribute("data-bs-parent", "#accordion");
      cardBody.innerHTML = `
        <div class="accordion-body">
          <strong>ID:</strong> ${satellite.id}<br>
          <strong>Country:</strong> ${satellite.country}<br>
          <strong>Launch Date:</strong> ${satellite.launch_date}<br>
          <strong>Mass:</strong> ${satellite.mass} kg<br>
          <strong>Launcher:</strong> ${satellite.launcher}<br>
        </div>
      `;

      // Append card header and body to accordion
      accordion.appendChild(cardHeader);
      accordion.appendChild(cardBody);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));