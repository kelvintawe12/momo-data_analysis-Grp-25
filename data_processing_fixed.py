import xml.etree.ElementTree as ET
import logging

# Set up logging
logging.basicConfig(filename='unprocessed_messages.log', level=logging.INFO)

def parse_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    sms_data = []

    for sms in root.findall('sms'):
        body_element = sms.find('body')
        if body_element is not None:
            body = body_element.text
            sms_data.append(body)
        else:
            logging.info('Missing body element in SMS entry.')

    return sms_data

def categorize_sms(sms_data):
    categorized_data = {
        'Incoming Money': [],
        'Payments to Code Holders': [],
        'Transfers to Mobile Numbers': [],
        'Bank Deposits': [],
        'Airtime Bill Payments': [],
        'Cash Power Bill Payments': [],
        'Transactions Initiated by Third Parties': [],
        'Withdrawals from Agents': [],
        'Bank Transfers': [],
        'Internet and Voice Bundle Purchases': []
    }

    for message in sms_data:
        # Categorization logic goes here
        # For now, we will just log unprocessed messages
        logging.info(f'Unprocessed message: {message}')

    return categorized_data

if __name__ == "__main__":
    file_path = 'modified_sms_v2.xml'  # Updated with the actual path
    sms_data = parse_xml(file_path)
    categorized_data = categorize_sms(sms_data)
    print(categorized_data)
