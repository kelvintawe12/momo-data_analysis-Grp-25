import sqlite3

def create_database():
    conn = sqlite3.connect('sms_data.db')
    cursor = conn.cursor()

    # Create table for SMS data
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS sms_transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        amount REAL,
        date TEXT,
        details TEXT
    )
    ''')

    conn.commit()
    conn.close()

def insert_data(transaction):
    conn = sqlite3.connect('sms_data.db')
    cursor = conn.cursor()

    cursor.execute('''
    INSERT INTO sms_transactions (type, amount, date, details)
    VALUES (?, ?, ?, ?)
    ''', transaction)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_database()
    # Example of inserting data
    # insert_data(('Incoming Money', 5000, '2024-01-01 10:00:00', 'Received from John Doe'))
