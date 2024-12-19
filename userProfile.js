let step = 1;
let answeredQuestions = 0; // Variable to track the number of questions answered
const totalQuestions = 12; // Total number of questions across all steps
const userProfile = {
    personalDetails: {},
    jobDetails: {},
    healthDetails: {}
};


function startProfile() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    showNextDetails();
}

//to break the prompt output into 3 parts
function showNextDetails() {
    if (step === 1) {
        showPersonalDetails();
    } else if (step === 2) {
        showJobDetails();
    } else if (step === 3) {
        showHealthDetails();
    } else if (step === 4) {
        displayAllDetails();
    }
}

function showPersonalDetails() {
    const fullName = prompt("Enter Full Name:");
    if (!fullName || fullName.trim() === "") {
        alert("Please enter a valid full name.");
        return;
    }
    // Check if the full name contains any numeric characters
    if (/\d/.test(fullName)) {
        alert("Name cannot contain numeric characters.");
        return;
    }
    //Check if the age entered and its above 0 
    //as well as this promt only allows integer
    const age = prompt("Enter Age:");
    if (!age || isNaN(age) || age <= 0) {
        alert("Please enter your age as a number greater than 0.");
        return;
    }

    //"male" or "female" is only allowed to enter
    const gender = prompt("Enter Gender:");
    if (gender !== "male" && gender !== "female") {
        alert("Please enter a valid gender (male/female).");
        return;
    }

    //it only shows error if the prompt doesn't have any outputs
    const address = prompt("Enter Address:");
    if (!address) {
        alert("Please enter your address.");
        return;
    }

    userProfile.personalDetails.FullName = fullName;
    userProfile.personalDetails.Age = age;
    userProfile.personalDetails.Gender = gender;
    userProfile.personalDetails.Address = address;

    displayDetails('personalDetailsContainer', userProfile.personalDetails, 'Personal Details');

    // Update the answeredQuestions variable based on the number of questions answered in this step
    answeredQuestions += Object.values(userProfile.personalDetails).filter(value => value !== null && value !== undefined && value !== "").length;
    step++;
    updateProgressBar();
}

function showJobDetails() {
    const job = prompt("Enter Job:");
    if (job === null) return; // User cancelled, don't count this question

    if (/\d/.test(job)) {
        alert("Invalid characters.");
        return;
    }
    //"@" and "." will be checked to validate mail
    const email = prompt("Enter Email:");
    if (email === null) return; // User cancelled, don't count this question
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const password = prompt("Enter Password:");
    if (password === null) return; // User cancelled, don't count this question
    if (!/\d/.test(password)) {
        alert("A password should contain at least 1 digit.");
        return;
    }
    if (!password || password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    const phone = prompt("Enter Phone Number:");
    if (phone === null) {
        alert("You canceled the input."); 
        return;// Notify the user that they canceled the input
    }
     if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number."); 
        return;// Notify the user of invalid input
    }

    userProfile.jobDetails.Job = job;
    userProfile.jobDetails.Email = email;
    userProfile.jobDetails.Password = password;
    userProfile.jobDetails.Telephone_Number = phone;

    displayDetails('jobDetailsContainer', userProfile.jobDetails, 'Job Details');

    // Update the answeredQuestions variable based on the number of questions answered in this step
    answeredQuestions += Object.values(userProfile.jobDetails).filter(value => value !== null && value !== undefined && value !== "").length;
    step++;
    updateProgressBar();
}

function showHealthDetails() {
    const lastCheckup = prompt("Did u do a Checkup for this year(YES/NO):");
    if (lastCheckup === null) {
        // User cancelled, don't count this question
        return;
    } else if (lastCheckup.toUpperCase() !== "YES" && lastCheckup.toUpperCase() !== "NO") {
        // Invalid input, ask again or handle accordingly
        alert("Please enter either 'YES' or 'NO'.");
        return;
    }


    const healthNotification = confirm("Would you like to receive health notifications?");

    const diet = prompt("Enter Diet:");
    if (diet === null) return; // User can skip if needed.

    const physicalActivities = prompt("Enter Physical Activities:");
    if (physicalActivities === null) return; // User cancelled, don't count this question

    userProfile.healthDetails.LastestCheckup_Date = lastCheckup;
    userProfile.healthDetails.HealthNotification = healthNotification;
    userProfile.healthDetails.Diet = diet;
    userProfile.healthDetails.Physical_Activities = physicalActivities;

    displayDetails('healthDetailsContainer', userProfile.healthDetails, 'Health Details');

    // Update the answeredQuestions variable based on the number of questions answered in this step
    answeredQuestions += Object.values(userProfile.healthDetails).filter(value => value !== null && value !== undefined && value !== "").length;
    step++;
    updateProgressBar();
}


function displayDetails(containerId, details, categoryName) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const categoryHeader = document.createElement('h2');
    categoryHeader.textContent = categoryName;
    container.appendChild(categoryHeader);

    const detailsList = document.createElement('ul');
    for (const key in details) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${details[key]}`;
        detailsList.appendChild(listItem);
    }

    container.appendChild(detailsList);
    container.style.display = 'block'; // Show the container after adding details
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
   


    // Calculate progress percentage based on the number of questions answered
    const progress = Math.min((answeredQuestions / totalQuestions) * 100, 100);
   
    progressBar.value = progress;
    progressText.textContent = `Profile completed ${progress.toFixed(2)}%`;
}


function displayAllDetails() {
    const allDetailsContainer = document.getElementById('allDetailsContainer');
    allDetailsContainer.innerHTML = '';

    for (const category in userProfile) {
        const details = userProfile[category];
        const detailsList = document.createElement('ul');
        for (const key in details) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${details[key]}`;
            detailsList.appendChild(listItem);
        }
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category.toUpperCase();
        allDetailsContainer.appendChild(categoryHeader);
        allDetailsContainer.appendChild(detailsList);
    }

    allDetailsContainer.style.display = 'block';

    // Hide the next button after displaying all details
    document.getElementById('nextButton').style.display = 'none';
}
