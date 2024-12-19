  // concept taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 //  https://codedamn.com/news/javascript/submit-form-with-javascript 
//  https://stackoverflow.com/questions/68993300/i-want-to-preview-html-form-data-in-pop-window-before-submit-how-to-do-that-usi


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitBtn = document.querySelector('button[type="submit"]');
    const previewBtn = document.querySelector('button[type="button"]');
    const displayPreview = document.getElementById('preview');

    // concept taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    // Function to valiate email 
    const validateEmail = (email) => {
       // Check if the email contains '@' and '.'
    if (email.indexOf('@') === -1 || email.lastIndexOf('.') === -1) {
        return false;
    }

    // Check if '@' comes before '.'
    if (email.indexOf('@') > email.lastIndexOf('.')) {
        return false;
    }

    // Check if the part after '.' contains at least two characters
    if (email.slice(email.lastIndexOf('.') + 1).length < 2) {
        return false;
    }

    return true;
};
// event listner for input name
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            nameInput.setCustomValidity('Name cannot be empty.');
        } else {
            nameInput.setCustomValidity('');
        }
        nameInput.reportValidity();
    });
// event listner for input name
    emailInput.addEventListener('input', () => {
        if (!validateEmail(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
        emailInput.reportValidity();
    });
// event listner for form submission 
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // gather data
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const ratingValue = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
        const feedbackValue = document.getElementById('feedback').value.trim();
        const taskOptionValue = document.getElementById('task-option').value.trim();
        const websiteUsabilityValue = document.querySelector('input[name="option"]:checked') ? document.querySelector('input[name="option"]:checked').value : '';
// validation
        if (!validateEmail(emailValue) || nameValue === '' || ratingValue === '' || feedbackValue === '' || taskOptionValue === '' || websiteUsabilityValue === '') {
            nameInput.setCustomValidity('Enter Valid Name');
            emailInput.setCustomValidity('Enter valid email');
            nameInput.reportValidity();
            emailInput.reportValidity();
            return;
        }
// Ddisplay preview of the form
        displayPreview.innerHTML = `
            <div><strong>Name:</strong> ${nameValue}</div>
            <div><strong>Email:</strong> ${emailValue}</div>
            <div><strong>Rating:</strong> ${ratingValue}</div>
            <div><strong>Reason for Rating:</strong> ${feedbackValue}</div>
            <div><strong>Task Completion Method:</strong> ${taskOptionValue}</div>
            <div><strong>Website Usability:</strong> ${websiteUsabilityValue}</div>
        `;
            window.location.href = 'feedback.html'; // after submitting re direction to feedback.html

        form.reset();
    });
// event listner  for preview button when clicking 
    previewBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const ratingValue = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
        const feedbackValue = document.getElementById('feedback').value.trim();
        const taskOptionValue = document.getElementById('task-option').value.trim();
        const websiteUsabilityValue = document.querySelector('input[name="option"]:checked') ? document.querySelector('input[name="option"]:checked').value : '';

        if (!validateEmail(emailValue) || nameValue === '' || ratingValue === '' || feedbackValue === '' || taskOptionValue === '' || websiteUsabilityValue === '') {
            nameInput.setCustomValidity('Enter Valid Name');
            emailInput.setCustomValidity('Enter valid email');
            nameInput.reportValidity();
            emailInput.reportValidity();
            return;
        }

        displayPreview.innerHTML = `
            <div><strong>Name:</strong> ${nameValue}</div>
            <div><strong>Email:</strong> ${emailValue}</div>
            <div><strong>Rating:</strong> ${ratingValue}</div>
            <div><strong>Reason for Rating:</strong> ${feedbackValue}</div>
            <div><strong>Task Completion Method:</strong> ${taskOptionValue}</div>
            <div><strong>Website Usability:</strong> ${websiteUsabilityValue}</div>
        `;
        displayPreview.style.display = 'block';
    });
    
});
