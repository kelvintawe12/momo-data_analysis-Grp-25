document.addEventListener('DOMContentLoaded', function () {
    // Function to update spending habits chart
    function updateSpendingChart(data) {
        const ctx = document.getElementById('spendingChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Spending',
                    data: data.values,
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

    // Function to update financial health metrics
    function updateFinancialHealth(data) {
        document.getElementById('netBalance').textContent = `$${data.netBalance.toFixed(2)}`;
        document.getElementById('spendingRating').innerHTML = generateStars(data.spendingRating);
        document.getElementById('ratingText').textContent = data.ratingText;
        document.getElementById('debtRatio').textContent = data.debtRatio;

        const ctx = document.getElementById('debtChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Debt', 'Income'],
                datasets: [{
                    data: data.debtData,
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Function to generate star rating HTML
    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<i class="fas fa-star rating-star"></i>';
            } else {
                stars += '<i class="far fa-star rating-star"></i>';
            }
        }
        return stars;
    }

    // Fetch data and update UI
    fetch('/api/transactions')
        .then(response => response.json())
        .then(data => {
            updateSpendingChart(data.spending);
            updateFinancialHealth(data.financialHealth);
        })
        .catch(error => console.error('Error fetching data:', error));
});
