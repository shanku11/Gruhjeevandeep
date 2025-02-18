let lastClickTime = 0;  // Store the time of the last click

// Sample data structure for hospitals by state
const hospitalsData = {
    andhraPradesh: [
        { name: 'Hospital 1', location: 'City 1', website: 'http://hospital1.com' },
        { name: 'Hospital 2', location: 'City 2', website: 'http://hospital2.com' },
    ],
    arunachalPradesh: [
        { name: 'Hospital 3', location: 'City 3', website: 'http://hospital3.com' },
        { name: 'Hospital 4', location: 'City 4', website: 'http://hospital4.com' },
    ],
    // Add more states and hospitals as necessary
};

// Function to display hospitals based on selected state
function showHospitals(state) {
    const hospitalListDiv = document.getElementById('hospital-list');
    
    // Clear previous list if double-tap detected
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {  // If double-clicked within 300ms
        hospitalListDiv.innerHTML = '';  // Clear the hospitals
    } else {
        lastClickTime = currentTime;  // Update last click time
        
        hospitalListDiv.innerHTML = ''; // Clear previous list

        if (hospitalsData[state]) {
            hospitalsData[state].forEach(hospital => {
                const hospitalCard = document.createElement('div');
                hospitalCard.classList.add('hospital-card');
                hospitalCard.innerHTML = `
                    <h3>${hospital.name}</h3>
                    <p>${hospital.location}</p>
                    <a href="${hospital.website}" target="_blank">Official Website</a>
                `;
                hospitalListDiv.appendChild(hospitalCard);
            });
        } else {
            hospitalListDiv.innerHTML = '<p>No hospitals found for this state.</p>';
        }
    }
}
const style = document.createElement("style");
style.innerHTML = `
    .hospital-card {
        border: 2px solid #007bff;
        border-radius: 10px;
        padding: 15px;
        margin: 10px 0;
        background-color: #f8f9fa;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .hospital-card h3 {
        color: #007bff;
        margin-bottom: 5px;
    }
    .hospital-card p {
        margin: 5px 0;
        font-size: 16px;
    }
    .hospital-card a {
        color: #28a745;
        text-decoration: none;
        font-weight: bold;
    }
    .hospital-card a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);