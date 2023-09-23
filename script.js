// Define initial amounts in BDT
let walletAmountBDT = 8500.00; // BDT
let bankAmountBDT = 425000.00; // BDT
let bkashAmountBDT = 17000.00; // BDT
let rocketAmountBDT = 12750.00; // BDT

// Function to update the financial summary container
function updateFinancialSummary() {
    walletAmountElement.textContent = `৳${walletAmountBDT.toFixed(2)}`;
    bankAmountElement.textContent = `৳${bankAmountBDT.toFixed(2)}`;
    bkashAmountElement.textContent = `৳${bkashAmountBDT.toFixed(2)} (Bkash)`;
    rocketAmountElement.textContent = `৳${rocketAmountBDT.toFixed(2)} (Rocket)`;
}

// Event listener for the expense form submission
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input (assuming input is in BDT)
    const description = expenseDescription.value;
    const amountBDT = parseFloat(expenseAmount.value);

    // Validate and add the expense
    if (description && !isNaN(amountBDT) && amountBDT > 0) {
        // Add the expense in BDT
        addExpense(description, amountBDT);
        updateUI();

        // Clear input fields
        expenseDescription.value = "";
        expenseAmount.value = "";

        // Update the financial summary with the new wallet balance in BDT
        walletAmountBDT += amountBDT;
        updateFinancialSummary();
    }
});
