// Sample data - Replace this with your database data
const homepageData = [
  {
    name: "Homepage 1",
    url: "https://www.example.com",
    description: "Description for Homepage 1",
    instagram: true,
    youtube: false,
    tiktok: true,
    id: 1 // Unique identifier for each entry
  },
  {
    name: "Homepage 2",
    url: "https://www.sample.com",
    description: "Description for Homepage 2",
    instagram: false,
    youtube: true,
    tiktok: true,
    id: 2
  },
  {
    name: "Homepage 3",
    url: "https://www.demo.com",
    description: "Description for Homepage 3",
    instagram: true,
    youtube: true,
    tiktok: false,
    id: 3
  },
  // Add more entries following the same structure
  {
    name: "Homepage 4",
    url: "https://www.test.com",
    description: "Description for Homepage 4",
    instagram: false,
    youtube: false,
    tiktok: true,
    id: 4
  },
  {
    name: "Homepage 5",
    url: "https://www.example2.com",
    description: "Description for Homepage 5",
    instagram: true,
    youtube: false,
    tiktok: false,
    id: 5
  },
  // Add more entries here...
];


// Function to populate the table
function populateTable(data) {
  //const tableBody = document.querySelector("#homepageTable tbody");
  const tableBody = document.getElementById('tableBody');

  tableBody.innerHTML = "";

  data.forEach(entry => {
    const row = `
      <tr>
        <td>${entry.name}</td>
        <td><a href="${entry.url}" target="_blank">${entry.url}</a></td>
        <td>${entry.description}</td>
        <td>${entry.instagram ? "Yes" : "No"}</td>
        <td>${entry.youtube ? "Yes" : "No"}</td>
        <td>${entry.tiktok ? "Yes" : "No"}</td>
        <td><a href="details.html?id=${entry.id}" target="_blank">Details</a></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Initial population of the table
populateTable(homepageData);

function applyFilters() {
  const instagramChecked = document.getElementById('instagramCheck').checked;
  const youtubeChecked = document.getElementById('youtubeCheck').checked;
  const tiktokChecked = document.getElementById('tiktokCheck').checked;
  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

  const filteredData = homepageData.filter(entry => {
    const matchesSearch = (
      entry.name.toLowerCase().includes(searchTerm) ||
      entry.url.toLowerCase().includes(searchTerm) ||
      entry.description.toLowerCase().includes(searchTerm)
    );

    const matchesCheckbox =
      (instagramChecked && entry.instagram) ||
      (youtubeChecked && entry.youtube) ||
      (tiktokChecked && entry.tiktok);

    if (instagramChecked && youtubeChecked && tiktokChecked) {
      return matchesSearch && entry.instagram && entry.youtube && entry.tiktok;
    } else if (instagramChecked && youtubeChecked) {
      return matchesSearch && entry.instagram && entry.youtube;
    } else if (instagramChecked && tiktokChecked) {
      return matchesSearch && entry.instagram && entry.tiktok;
    } else if (youtubeChecked && tiktokChecked) {
      return matchesSearch && entry.youtube && entry.tiktok;
    } else if (instagramChecked || youtubeChecked || tiktokChecked) {
      return matchesSearch && matchesCheckbox;
    }

    return matchesSearch;
  });

  populateTable(filteredData);
}


document.getElementById('instagramCheck').addEventListener('change', applyFilters);
document.getElementById('youtubeCheck').addEventListener('change', applyFilters);
document.getElementById('tiktokCheck').addEventListener('change', applyFilters);
document.getElementById('searchInput').addEventListener('input', applyFilters);
