// Onclick validate function
/* The above code is validating the form fields. */
document.getElementById("completePayment").addEventListener("click", (clickEvent) => {
    /* Preventing the default action of the event. */
    clickEvent.preventDefault();

    /* This is declaring all the variables that are used in the code. */
    let forReset = 0;
    let currentDate = new Date();
    const errorBordorColor = "#A80000";
    const defaultBordorColor = "#CCCCCC";

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
        document.getElementById("firstName").style.borderColor = errorBordorColor;
        firstNameErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[a-zA-Z]{1,30}$/.test(firstName.value)) {
        firstNameErrorMessage.innerHTML = "First Name is not valid";
        document.getElementById("firstName").style.borderColor = errorBordorColor;
        firstNameErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        firstNameErrorMessage.classList.add("remove-display");
        document.getElementById("firstName").style.borderColor = defaultBordorColor;
    }

    if(lastName.value == "") {
        lastNameErrorMessage.innerHTML = "Last Name is required";
        document.getElementById("lastName").style.borderColor = errorBordorColor;
        lastNameErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[a-zA-Z]{1,30}$/.test(lastName.value)) {
        lastNameErrorMessage.innerHTML = "Last Name is not valid";
        document.getElementById("lastName").style.borderColor = errorBordorColor;
        lastNameErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        lastNameErrorMessage.classList.add("remove-display");
        document.getElementById("lastName").style.borderColor = defaultBordorColor;
    }

    if(email.value == "") {
        emailErrorMessage.innerHTML = "Email Address is required";
        document.getElementById("email").style.borderColor = errorBordorColor;
        emailErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
        emailErrorMessage.innerHTML = "Email Address is not valid";
        document.getElementById("email").style.borderColor = errorBordorColor;
        emailErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        emailErrorMessage.classList.add("remove-display");
        document.getElementById("email").style.borderColor = defaultBordorColor;
    }

    if(contactNumber.value == "") {
        contactNumberErrorMessage.innerHTML = "Contact Number is required";
        document.getElementById("contactNumber").style.borderColor = errorBordorColor;
        contactNumberErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[0-9]\d{9}$/.test(contactNumber.value)) {
        contactNumberErrorMessage.innerHTML = "Contact Number is not valid";
        document.getElementById("contactNumber").style.borderColor = errorBordorColor;
        contactNumberErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        contactNumberErrorMessage.classList.add("remove-display");
        document.getElementById("contactNumber").style.borderColor = defaultBordorColor;
    }

    if(pinCode.value == "") {
        pinCodeErrorMessage.innerHTML = "Pin Code is required";
        document.getElementById("pinCode").style.borderColor = errorBordorColor;
        pinCodeErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[0-9]\d{5}$/.test(pinCode.value)) {
        pinCodeErrorMessage.innerHTML = "Pin Code is not valid";
        document.getElementById("pinCode").style.borderColor = errorBordorColor;
        pinCodeErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        pinCodeErrorMessage.classList.add("remove-display");
        document.getElementById("pinCode").style.borderColor = defaultBordorColor;
    }
    
    if(cardNumber.value == "") {
        cardNumberErrorMessage.innerHTML = "Card Number is required";
        document.getElementById("cardNumber").style.borderColor = errorBordorColor;
        cardNumberErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[0-9]\d{15}$/.test(cardNumber.value)) {
        cardNumberErrorMessage.innerHTML = "Card Number is not valid";
        document.getElementById("cardNumber").style.borderColor = errorBordorColor;
        cardNumberErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        cardNumberErrorMessage.classList.add("remove-display");
        document.getElementById("cardNumber").style.borderColor = defaultBordorColor;
    }
    
    if(cardExpiry.value == "") {
        cardExpiryErrorMessage.innerHTML = "Card Expiry is required";
        document.getElementById("cardExpiry").style.borderColor = errorBordorColor;
        cardExpiryErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if((!/^[0-9]\d{3}$/.test(cardExpiry.value)) || (cardExpiry.value < currentDate.getFullYear())) {
        cardExpiryErrorMessage.innerHTML = "Card Expiry is not valid";
        document.getElementById("cardExpiry").style.borderColor = errorBordorColor;
        cardExpiryErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        cardExpiryErrorMessage.classList.add("remove-display");
        document.getElementById("cardExpiry").style.borderColor = defaultBordorColor;
    }
    
    if(cvv.value == "") {
        cvvErrorMessage.innerHTML = "CVV is required";
        document.getElementById("cvv").style.borderColor = errorBordorColor;
        cvvErrorMessage.classList.remove("remove-display");
        forReset++;
    } else if(!/^[0-9]\d{2,3}$/.test(cvv.value)) {
        cvvErrorMessage.innerHTML = "CVV is not valid";
        document.getElementById("cvv").style.borderColor = errorBordorColor;
        cvvErrorMessage.classList.remove("remove-display");
        forReset++;
    } else {
        cvvErrorMessage.classList.add("remove-display");
        document.getElementById("cvv").style.borderColor = defaultBordorColor;
    }

    console.log(forReset);

    if(forReset === 0) {
        document.getElementById("billingForm").reset();
    }
});