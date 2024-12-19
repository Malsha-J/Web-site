const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function(event) {
    // set varioubles for the inputs
    var cardNo = document.getElementById("cardNo").value;
    var cardholder = document.getElementById("cardholder").value;
    var expireDate = document.getElementById("expireDate").value;
    var ccv = document.getElementById("ccv").value;
    var line1 = document.getElementById("line1").value;
    var city = document.getElementById("city").value;
    var postalCode = document.getElementById("postalCode").value;
    var fistName = document.getElementById("fistName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    // checking whether requires input empty
    if (cardNo.trim() === '' || cardholder.trim() === '' || expireDate.trim() === '' ||
        ccv.trim() === '' || line1.trim() === '' || city.trim() === '' ||
        postalCode.trim() === '' || fistName.trim() === '' || lastName.trim() === '' ||email.trim()==='') {
        alert("Please fill in all required fields.");
    }else{
        event.preventDefault(); // Prevent the default form submission behavior
        window.location.href = "payment.html";
        document.getElementById("form").reset();
        
    }   
});