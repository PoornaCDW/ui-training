// Onclick validate function

/* The above code is validating the form fields. */
document.getElementById("completePayment").addEventListener("click", (clickEvent) => {
    /* Preventing the default action of the event. */
    clickEvent.preventDefault();

    /* This is declaring all the variables that are used in the code. */
    let forReset = 1;
    let currentDate = new Date();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let contactNumber = document.getElementById("contactNumber");
    let pinCode = document.getElementById("pinCode");
    let cardNumber = document.getElementById("cardNumber");
    let cardExpiry = document.getElementById("cardExpiry");
    let cvv = document.getElementById("cvv");

    /* This is declaring all the variables that are used in the code. */
    let firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
    let lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
    let emailErrorMessage = document.getElementById("emailErrorMessage");
    let contactNumberErrorMessage = document.getElementById("contactNumberErrorMessage");
    let pinCodeErrorMessage = document.getElementById("pinCodeErrorMessage");
    let cardNumberErrorMessage = document.getElementById("cardNumberErrorMessage");
    let cardExpiryErrorMessage = document.getElementById("cardExpiryErrorMessage");
    let cvvErrorMessage = document.getElementById("cvvErrorMessage");

    /* This is checking if the first name field is empty or not. If it is empty, then it will display
    the error message. If it is not empty, then it will check if the first name is valid or not. If
    it is not valid, then it will display the error message. If it is valid, then it will remove the
    error message. */
    if(firstName.value == "") {
        firstNameErrorMessage.innerHTML = "First Name is required";
        document.getElementById("firstName").style.borderColor = "#A80000";
        firstNameErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[a-zA-Z]{1,30}$/.test(firstName.value)) {
        firstNameErrorMessage.innerHTML = "First Name is not valid";
        document.getElementById("firstName").style.borderColor = "#A80000";
        firstNameErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        firstNameErrorMessage.classList.add("remove-display");
    }

    if(lastName.value == "") {
        lastNameErrorMessage.innerHTML = "Last Name is required";
        document.getElementById("lastName").style.borderColor = "#A80000";
        lastNameErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[a-zA-Z]{1,30}$/.test(lastName.value)) {
        lastNameErrorMessage.innerHTML = "Last Name is not valid";
        document.getElementById("lastName").style.borderColor = "#A80000";
        lastNameErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        lastNameErrorMessage.classList.add("remove-display");
    }

    if(email.value == "") {
        emailErrorMessage.innerHTML = "Email Address is required";
        document.getElementById("email").style.borderColor = "#A80000";
        emailErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
        emailErrorMessage.innerHTML = "Email Address is not valid";
        document.getElementById("email").style.borderColor = "#A80000";
        emailErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        emailErrorMessage.classList.add("remove-display");
    }

    if(contactNumber.value == "") {
        contactNumberErrorMessage.innerHTML = "Contact Number is required";
        document.getElementById("contactNumber").style.borderColor = "#A80000";
        contactNumberErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[0-9]\d{9}$/.test(contactNumber.value)) {
        contactNumberErrorMessage.innerHTML = "Contact Number is not valid";
        document.getElementById("contactNumber").style.borderColor = "#A80000";
        contactNumberErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        contactNumberErrorMessage.classList.add("remove-display");
    }

    if(pinCode.value == "") {
        pinCodeErrorMessage.innerHTML = "Pin Code is required";
        document.getElementById("pinCode").style.borderColor = "#A80000";
        pinCodeErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[0-9]\d{5}$/.test(pinCode.value)) {
        pinCodeErrorMessage.innerHTML = "Pin Code is not valid";
        document.getElementById("pinCode").style.borderColor = "#A80000";
        pinCodeErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        pinCodeErrorMessage.classList.add("remove-display");
    }
    
    if(cardNumber.value == "") {
        cardNumberErrorMessage.innerHTML = "Card Number is required";
        document.getElementById("cardNumber").style.borderColor = "#A80000";
        cardNumberErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[0-9]\d{15}$/.test(cardNumber.value)) {
        cardNumberErrorMessage.innerHTML = "Card Number is not valid";
        document.getElementById("cardNumber").style.borderColor = "#A80000";
        cardNumberErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        cardNumberErrorMessage.classList.add("remove-display");
    }
    
    if(cardExpiry.value == "") {
        cardExpiryErrorMessage.innerHTML = "Card Expiry is required";
        document.getElementById("cardExpiry").style.borderColor = "#A80000";
        cardExpiryErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[0-9]\d{3}$/.test(cardExpiry.value) || cardExpiry.value < currentDate.getFullYear()) {
        cardExpiryErrorMessage.innerHTML = "Card Expiry is not valid";
        document.getElementById("cardExpiry").style.borderColor = "#A80000";
        cardExpiryErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        cardExpiryErrorMessage.classList.add("remove-display");
    }
    
    if(cvv.value == "") {
        cvvErrorMessage.innerHTML = "CVV is required";
        document.getElementById("cvv").style.borderColor = "#A80000";
        cvvErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else if(!/^[0-9]\d{2,3}$/.test(cvv.value)) {
        cvvErrorMessage.innerHTML = "CVV is not valid";
        document.getElementById("cvv").style.borderColor = "#A80000";
        cvvErrorMessage.classList.remove("remove-display");
        forReset = 0;
    } else {
        cvvErrorMessage.classList.add("remove-display");
    }

    // if(forReset == 0) {
    //     document.getElementById("billingForm").reset();
    // }

});