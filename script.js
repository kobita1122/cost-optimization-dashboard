const data = [
  { service: "Compute", current: 1200 },
  { service: "Storage", current: 600 },
  { service: "Bandwidth", current: 300 }
];

const tbody = document.getElementById("costs");

function render() {
  tbody.innerHTML = "";
  data.forEach(d => {
    const optimized = Math.floor(d.current * 0.8);
    const savings = d.current - optimized;
    tbody.innerHTML += `
      <tr>
        <td>${d.service}</td>
        <td>$${d.current}</td>
        <td>$${optimized}</td>
        <td class="positive">$${savings}</td>
      </tr>
    `;
  });
}

function analyze() {
  render();
}
