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


// Get the entry ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const entryId = urlParams.get('id');

// Find the entry in homepageData array based on the ID
const entry = homepageData.find(item => item.id === parseInt(entryId));

// Populate details on the page
if (entry) {
  const detailsContent = document.getElementById('detailsContent');
  detailsContent.innerHTML = `
    <p><strong>Name:</strong> ${entry.name}</p>
    <p><strong>URL:</strong> <a href="${entry.url}" target="_blank">${entry.url}</a></p>
    <p><strong>Description:</strong> ${entry.description}</p>
    <p><strong>Instagram:</strong> ${entry.instagram ? "Yes" : "No"}</p>
    <p><strong>YouTube:</strong> ${entry.youtube ? "Yes" : "No"}</p>
    <p><strong>TikTok:</strong> ${entry.tiktok ? "Yes" : "No"}</p>
    <!-- Add more details as needed -->
  `;
} else {
  const detailsContent = document.getElementById('detailsContent');
  detailsContent.innerHTML = "<p>Entry not found</p>";
}
