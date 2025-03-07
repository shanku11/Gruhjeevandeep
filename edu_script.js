const scholarships = [
    {
        name: "National Means-cum-Merit Scholarship (NMMS)",
        for: "Class 8 students from economically weaker sections",
        details: `

            <p><strong>For:</strong> Class 8 students from economically weaker sections</p>
            <p><strong>Scholarship Amount:</strong> ₹12,000 per year (₹1,000 per month) till Class 12</p>
            <p><strong>Exam Pattern:</strong> Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT)</p> 
            <p><strong>Eligibility:</strong> Family income should be less than ₹3.5 lakh per annum</p> 
            <p><strong>Official Website:</strong> <a href="https://bse.telangana.gov.in/" target="_blank">Go to Website</a></p>
        `
    },
    {
        name: "Telangana National Talent Search Examination (NTSE)",
        for: "Class 10 students",
        details: `

            <p><strong>For:</strong> Class 10 students</p>
            <p><strong>Scholarship Amount:</strong> ₹1,250 - ₹2,000 per month</p>
            <p><strong>Exam Pattern:</strong> MAT (Mental Ability Test) and SAT (Scholastic Aptitude Test)</p>
            <p><strong>Eligibility:</strong> Open to all Class 10 students studying in recognized schools</p>
            <p><strong>Application & Exam:</strong> Conducted in two stages – State Level (November) and National Level (May)</p>
            <p><strong>Official Website:</strong> <a href="https://ncert.nic.in/" target="_blank">Go to Website</a></p>
        `
    },
    {
        name: "Indian National Olympiad (INO)",
        for: "Class 9-12 students (Math, Science, Astronomy)",
        details: `

            <p><strong>For:</strong> Class 9-12 students (Math, Science, Astronomy)</p>
            <p><strong>Scholarship:</strong> Selected students get training for international competitions and merit-based rewards</p>
            <p><strong>Application & Exam:</strong> Stage-wise selection from state to national level (October to February)</p>
            <p><strong>Official Website:</strong> <a href="https://olympiads.hbcse.tifr.res.in/" target="_blank">Go to Website</a></p>
        `
    },
    {
        name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        for: "Science students in Class 11, 12, UG",
        details: `

            <p><strong>For:</strong> Science students in Class 11, 12, UG</p>
            <p><strong>Scholarship Amount:</strong> ₹5,000 - ₹7,000 per month</p>
            <p><strong>Exam Pattern:</strong> MCQ-based questions in Physics, Chemistry, Mathematics, and Biology</p>
            <p><strong>Eligibility:</strong> Science stream students with good academic performance</p>
            <p><strong>Application & Exam:</strong> Registration usually starts in July, exam in November</p>
            <p><strong>Official Website:</strong> <a href="https://www.iisc.ac.in/kvpy/" target="_blank">Go to Website</a></p>
        `
    },
    {
        name: "Inspire Scholarship (Innovation in Science Pursuit for Inspired Research)",
        for: "Top 1% performers in Class 12 Science stream",
        details: `

            <p><strong>For:</strong> Top 1% performers in Class 12 Science stream</p>
            <p><strong>Scholarship:</strong> ₹80,000 per year for higher education in science</p>
            <p><strong>Eligibility:</strong> Students who score high in Class 12 board exams and pursue science</p>
            <p><strong>Application & Exam:</strong> Based on board results, no separate exam</p>
            <p><strong>Official Website:</strong> <a href="https://online-inspire.gov.in/" target="_blank">Go to Website</a></p>
        `
    },
    {
        name: "National Level Common Entrance Examination (NLCEE)",
        for: "Students from Class 9 to 12 and aspirants of competitive exams like JEE and NEET.",
        details: `

            <p><strong>For: </strong>Students from Class 9 to 12 and aspirants of competitive exams like JEE and NEET.</p>
            <p><strong>Scholarship: </strong> Scholarships worth ₹36 crores distributed among approximately 1.7 lakh students </p>
            <p><strong>Exam Pattern: </strong> 90 multiple-choice questions covering General Knowledge, Logical Reasoning, Problem-Solving, and Analytical Skills (Duration: 3 hours)</p>
            <p><strong>Eligibility: </strong>Open to students from Class 9 to 12, 12th pass, and graduates preparing for competitive exams</p>
            <p><strong>Application & Exam: </strong>Conducted in both online and offline modes, with registrations available on the official website</p>
            <p><strong>Official Website: </strong>NLCEE Official Website</p>
        `
    },
    {
        name: "Telangana Pre Matric Scholarship",
        for: "SC/ST/BC/PWD students (Classes 5-10)",
        details: `

                <p><strong>For:</strong> SC/ST/BC/PWD students (Classes 5-10)</p>
                <p><strong>Scholarship Amount:</strong> Varies based on category</p>
                <p><strong>Exam Pattern:</strong> No specific exam</p>
                <p><strong>Eligibility:</strong> Family income below ₹2,00,000</p>
                <p><strong>Application & Exam:</strong> Apply via ePASS</p>
                <p><strong>Official Website:</strong> <a href="https://telanganaepass.cgg.gov.in/" target="_blank">Go to Website</a></p>
     `
    },
    {
        name: "Telangana Post Matric Scholarship",
        for: "SC/ST/BC/EBC/PWD students (Class 11+)",
        details: `

                <p><strong>For:</strong> SC/ST/BC/EBC/PWD students (Class 11+)</p>
                <p><strong>Scholarship Amount:</strong> Up to ₹20,000</p>
                <p><strong>Exam Pattern:</strong> No specific exam</p>
                <p><strong>Eligibility:</strong> Family income limits apply</p>
                <p><strong>Application & Exam:</strong> Apply via ePASS</p>
                <p><strong>Official Website:</strong> <a href="https://telanganaepass.cgg.gov.in/" target="_blank">Go to Website</a></p>
     `
    },
    {
        name: "Ambedkar Overseas Vidya Nidhi Scholarship",
        for: "SC/ST/BC/EBC students pursuing PG/PhD abroad",
        details: `

                <p><strong>For:</strong> SC/ST/BC/EBC students pursuing PG/PhD abroad</p>
                <p><strong>Scholarship Amount:</strong> Up to ₹20,00,000</p>
                <p><strong>Exam Pattern:</strong> Standardized tests like GRE, TOEFL</p>
                <p><strong>Eligibility:</strong> Income below ₹5,00,000</p>
                <p><strong>Application & Exam:</strong> Apply via ePASS</p>
                <p><strong>Official Website:</strong> <a href="https://telanganaepass.cgg.gov.in/" target="_blank">Go to Website</a></p>
     `
    },
    {
        name: "Pragati & Saksham Scholarship",
        for: "Girls and disabled students in technical education",
        details: `

                <p><strong>For:</strong> Girls and disabled students in technical education</p>
                <p><strong>Scholarship Amount:</strong> ₹50,000 per year</p>
                <p><strong>Exam Pattern:</strong> No specific exam</p>
                <p><strong>Eligibility:</strong> Girls (Pragati) and PWD students (Saksham) in AICTE-approved colleges</p>
                <p><strong>Application & Exam:</strong> Merit-based selection</p>
                <p><strong>Official Website:</strong> <a href="https://scholarships.gov.in/" target="_blank">Go to Website</a></p>
     `
    }    
];
// Sort scholarships by "For" field
scholarships.sort((a, b) => a.for.localeCompare(b.for));

const scholarshipList = document.getElementById("scholarshipList");
const searchBar = document.getElementById("searchBar");
let currentlyOpen = null;

function displayScholarships(filteredScholarships) {
    scholarshipList.innerHTML = ""; // Clear previous list

    filteredScholarships.forEach(scholarship => {
        const listItem = document.createElement("li");
        listItem.classList.add("scholarship-item");

        const title = document.createElement("h3");
        title.textContent = scholarship.name;
        title.addEventListener("click", () => {
            if (currentlyOpen && currentlyOpen !== detailsDiv) {
                currentlyOpen.style.display = "none";
            }
            detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
            currentlyOpen = detailsDiv.style.display === "block" ? detailsDiv : null;
        });

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("scholarship-details");
        detailsDiv.innerHTML = scholarship.details;
        detailsDiv.style.display = "none";

        listItem.appendChild(title);
        listItem.appendChild(detailsDiv);
        scholarshipList.appendChild(listItem);
    });
}

// Initial display of sorted scholarships
displayScholarships(scholarships);

// Search functionality
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filteredScholarships = scholarships.filter(scholarship =>
        scholarship.name.toLowerCase().includes(query) ||
        scholarship.for.toLowerCase().includes(query)
    );
    displayScholarships(filteredScholarships);
});
