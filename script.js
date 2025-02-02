// Sample data for demonstration
const transactions = [
    { type: 'Incoming Money', amount: 5000, date: '2024-01-01', details: 'Received from John Doe' },
    { type: 'Payments to Code Holders', amount: 1500, date: '2024-01-02', details: 'Payment to Jane Smith' },
    // Add more sample transactions as needed
];

document.getElementById('filterButton').addEventListener('click', function() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredTransactions = transactions.filter(transaction => 
        transaction.type.toLowerCase().includes(searchValue) || 
        transaction.amount.toString().includes(searchValue)
    );
    displayTransactions(filteredTransactions);
});

function displayTransactions(transactions) {
    const detailsDiv = document.getElementById('transactionDetails');
    detailsDiv.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionDiv = document.createElement('div');
        transactionDiv.innerHTML = `<strong>${transaction.type}</strong>: ${transaction.amount} RWF on ${transaction.date} - ${transaction.details}`;
        detailsDiv.appendChild(transactionDiv);
    });
}

// Function to initialize chart (to be implemented)
function initializeChart() {
    // Chart.js initialization code will go here
}
