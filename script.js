// Sample data for demonstration
const transactions = [
    { type: 'Incoming Money', amount: 5000, date: '2024-01-01', details: 'Received from John Doe' },
    { type: 'Payments to Code Holders', amount: 1500, date: '2024-01-02', details: 'Payment to Jane Smith' },
    // Add more sample transactions as needed
    { type: 'Incoming Money', amount: 2000, date: '2024-01-03', details: 'Received from Alice Brown' },
    { type: 'Payments to Code Holders', amount: 3000, date: '2024-01-04', details: 'Payment to Bob Johnson' },
    { type: 'Incoming Money', amount: 4500, date: '2024-01-05', details: 'Received from Charlie Davis' },
    { type: 'Payments to Code Holders', amount: 2500, date: '2024-01-06', details: 'Payment to Diana Evans' }];

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
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: transactions.map(transaction => transaction.date),
            datasets: [{
                label: 'Transaction Amounts',
                data: transactions.map(transaction => transaction.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
