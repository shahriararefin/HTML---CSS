// Sample data for initial balances
let balances = {
    cash: 1500,
    'bank-account': 3200,
    bkash: 500,
    rocket: 300
};

// Function to update the balance
function updateBalance(account, amount) {
    balances[account] += amount;
}

// Function to display balances in the sidebar
function displayBalances() {
    for (let account in balances) {
        const balanceElement = document.getElementById(`${account}-balance`);
        if (balanceElement) {
            balanceElement.textContent = `$${balances[account]}`;
        }
    }
}

// Function to add an expense
function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;
    const account = document.getElementById('expense-account').value;

    // Update the balance
    updateBalance(account, -amount);

    // Display updated balances
    displayBalances();

    // Create an entry item in the list
    const entryList = document.getElementById('expense-entry-list');
    const entryItem = document.createElement('div');
    entryItem.classList.add('entry-item');
    entryItem.innerHTML = `
        <span class="entry-description">${description}</span>
        <span class="entry-category">${category}</span>
        <span class="entry-amount">-$${amount.toFixed(2)}</span>
    `;
    entryList.appendChild(entryItem);
}

// Function to add income
function addIncome() {
    const source = document.getElementById('income-source').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
    const account = document.getElementById('income-account').value;

    // Update the balance
    updateBalance(account, amount);

    // Display updated balances
    displayBalances();

    // Create an entry item in the list
    const entryList = document.getElementById('income-entry-list');
    const entryItem = document.createElement('div');
    entryItem.classList.add('entry-item');
    entryItem.innerHTML = `
        <span class="entry-description">${source}</span>
        <span class="entry-amount">$${amount.toFixed(2)}</span>
    `;
    entryList.appendChild(entryItem);
}

// Function to handle expense form submission
function handleExpenseFormSubmit(event) {
    event.preventDefault();
    addExpense();
    // Clear the form fields
    document.getElementById('expense-form').reset();
}

// Function to handle income form submission
function handleIncomeFormSubmit(event) {
    event.preventDefault();
    addIncome();
    // Clear the form fields
    document.getElementById('income-form').reset();
}

// Function to handle transfer form submission
function handleTransferFormSubmit(event) {
    event.preventDefault();
    const fromAccount = document.getElementById('from-account').value;
    const toAccount = document.getElementById('to-account').value;
    const transferAmount = parseFloat(document.getElementById('transfer-amount').value);

    // Update balances for both accounts
    updateBalance(fromAccount, -transferAmount);
    updateBalance(toAccount, transferAmount);

    // Display updated balances
    displayBalances();

    // Create an entry item in the list
    const entryList = document.getElementById('transfer-entry-list');
    const entryItem = document.createElement('div');
    entryItem.classList.add('entry-item');
    entryItem.innerHTML = `
        <span class="entry-description">Transfer from ${fromAccount} to ${toAccount}</span>
        <span class="entry-amount">-$${transferAmount.toFixed(2)}</span>
    `;
    entryList.appendChild(entryItem);

    // Clear the form fields
    document.getElementById('transfer-form').reset();
}

// Add event listeners to the expense, income, and transfer forms
document.getElementById('expense-form').addEventListener('submit', handleExpenseFormSubmit);
document.getElementById('income-form').addEventListener('submit', handleIncomeFormSubmit);
document.getElementById('transfer-form').addEventListener('submit', handleTransferFormSubmit);

// Initialize the balance display
displayBalances();
