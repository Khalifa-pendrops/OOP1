class BankAccount {
  #accountBalance;
  constructor(accountNumber, accountBalance, accountType) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.#accountBalance = accountBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#accountBalance += amount;
      console.log(`${amount} deposited successfully. 
        Current account balance: ${this.#accountBalance}`);
    } else {
      console.log("Oops: it seems like the amount is negative!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#accountBalance >= amount) {
      this.#accountBalance -= amount;
      console.log(`${amount} withdrawn successfully. 
        Current account balance: ${this.#accountBalance}`);
    } else {
      console.log(
        "Insufficient balance or invalid amount. Enter a alid amount."
      );
    }
  }

  checkAccountBalance() {
    return this.#accountBalance;
  }
}

const newBankAccount = new BankAccount(123456789, 1000, "Savings");
console.table(newBankAccount);



class BankCustomer extends BankAccount {
  constructor(
    accountNumber,
    accountBalance,
    accountType,
    customerName,
    customerId,
    customerEmail
  ) {
    super(accountNumber, accountBalance, accountType);
    this.customerName = customerName;
    this.customerId = customerId;
    this.customerEmail = customerEmail;
  }

  openAccount() {
    console.log(
      `Account with name: ${this.customerName} and ID: ${this.customerId} opened successfully.`
    );
  }

  closeAccount() {
    console.log(
      `Account with name: ${this.customerName} and ID: ${this.customerId} closed successfully.`
    );
  }

  getCustomerDetails() {
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Customer ID: ${this.customerId}`);
    console.log(`Customer Email: ${this.customerEmail}`);
  }
}

const khalifa = new BankCustomer(
  123456789,
  5000,
  "savings",
  "Khalifa",
  101,
  "justme@gmail.com"
);
khalifa.openAccount();
khalifa.getCustomerDetails();
khalifa.deposit(1000);
khalifa.withdraw(200);
console.log(`Account Balance: ${khalifa.checkAccountBalance()}`);
khalifa.closeAccount();
