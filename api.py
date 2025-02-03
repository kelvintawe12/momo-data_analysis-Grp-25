from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder='static')

# Sample transaction data
transactions = [
    {
        "transactionType": "Payment",
        "amount": -150.00,
        "timestamp": "2023-08-15T09:00:00Z",
        "status": "Completed",
        "serviceProvider": "MTN",
        "location": {
            "region": "Kampala",
            "lat": 0.3136,
            "lng": 32.5811
        },
        "category": "Utilities"
    },
    # Add more transactions as needed
]


@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    try:
        # Implement pagination
        page = request.args.get('page', default=1, type=int)
        per_page = request.args.get('per_page', default=10, type=int)
        start = (page - 1) * per_page
        end = start + per_page

        # Ensure indices are within bounds
        if start < 0 or start >= len(transactions):
            # Return empty list if start is out of bounds
            return jsonify([]), 200

        paginated_transactions = transactions[start:end]

        return jsonify(paginated_transactions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/test', methods=['GET'])
def serve_test_page():
    return send_from_directory('static', 'test.html')


if __name__ == '__main__':
    app.run(debug=True)
