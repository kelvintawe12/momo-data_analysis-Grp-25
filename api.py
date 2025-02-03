try:
    from flask import Flask, jsonify, request
except ImportError as e:
    print(f"Error importing Flask: {e}")
    raise

app = Flask(__name__)

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
        paginated_transactions = transactions[start:end]

        return jsonify(paginated_transactions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
