(function() {
    let bankAccounts = [
        {
            accountNumber: 5940,
            cardNumber: 1234123412341234,
            atmPin: 3109,
            accountBalance: 14500
        },
        {
            accountNumber: 2905,
            cardNumber: 1234567812345678,
            atmPin: 0931,
            accountBalance: 1000
        },
        {
            accountNumber: 6790,
            cardNumber: 123400001234000,
            atmPin: 8922,
            accountBalance: 9000
        },
        {
            accountNumber: 4560,
            cardNumber: 0987098709870987,
            atmPin: 7765,
            accountBalance: 0
        },
        {
            accountNumber: 5790,
            cardNumber: 6789678967896789,
            atmPin: 0000,
            accountBalance: 87000
        }
    ]

    let validateAccount = (accountNumber, cardNumber, pinNumber) => {
        for(accounts of bankAccounts) {
            if(accounts.accountNumber === accountNumber && accounts.cardNumber === cardNumber && accounts.atmPin == pinNumber) {
                return true;
            }
        }
        return false;
    }

    let checkBalance = (accountNumber) => {
        for(accounts of bankAccounts) {
            if(accounts.accountNumber === accountNumber) {
                return accounts.accountBalance;
            }
        }
    }

    let atmMachine = (accountNumber, withdrawalAmount) => {
        for(accounts of bankAccounts) {
            if(accounts.accountNumber === accountNumber) {
                accounts.accountBalance -= withdrawalAmount;
                window.alert("Withdrawal was successful! \nNew Balance: "+checkBalance(accountNumber));
            }
        }
    }

    let cashDepositMachine = (accountNumber, depositAmount) => {
        for(accounts of bankAccounts) {
            if(accounts.accountNumber === accountNumber) {
                accounts.accountBalance += depositAmount;
                window.alert("Deposit was successful! \nNew Balance: "+checkBalance(accountNumber));
            }
        }
    }

    let optionSelector = (selectOption) => {
        if(selectOption === 1) {
            let accountNumber = parseInt(prompt("Enter account number"));
            let cardNumber = parseInt(prompt("Enter card number"));
            let pinNumber = parseInt(prompt("Enter you secure PIN number"));

            if(validateAccount(accountNumber, cardNumber, pinNumber)) {
                window.alert(checkBalance(accountNumber));
                // optionSelector(selectOption);
                // selectOption();
            } else {
                window.alert("Details entered doesn't match, please re-enter the correct details!");
                optionSelector(selectOption);
            }
        } else if(selectOption === 2) {
            let accountNumber = parseInt(prompt("Enter account number"));
            let cardNumber = parseInt(prompt("Enter card number"));
            let pinNumber = parseInt(prompt("Enter you secure PIN number"));

            if(validateAccount(accountNumber, cardNumber, pinNumber)) {
                let withdrawalAmount = parseInt(prompt("Enter withdrawal amount"));
                atmMachine(accountNumber, withdrawalAmount);
                // optionSelector(selectOption);
                // selectOption();
            } else {
                window.alert("Details entered doesn't match, please re-enter the correct details!");
                optionSelector(selectOption);
            }
        } else if(selectOption === 3) {
            let accountNumber = parseInt(prompt("Enter account number"));
            let cardNumber = parseInt(prompt("Enter card number"));
            let pinNumber = parseInt(prompt("Enter you secure PIN number"));

            if(validateAccount(accountNumber, cardNumber, pinNumber)) {
                let depositAmount = parseInt(prompt("Enter deposit amount"));
                cashDepositMachine(accountNumber, depositAmount);
                // optionSelector(selectOption);
                // selectOption();
            } else {
                window.alert("Details entered doesn't match, please re-enter the correct details!");
                optionSelector(selectOption);
            }
        } else if(selectOption === 4) {
            window.alert("Exit!!");
        }
    }
    
    function selectOption() {
        let option = parseInt(prompt("Enter your choice: \n\n1.Check your balance. \n2.Withdraw Cash. \n3.Deposit Cash. \n4.Exit"));
        
        if(option == 1 || option == 2 || option == 3 || option == 4) {
            optionSelector(option);
        } else {
            window.alert("Invalid input!");
            selectOption();
        }
    }
    selectOption();

})();