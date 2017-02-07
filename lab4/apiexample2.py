import requests
import datetime
import requests

my_currencies = ["USD", "EUR"]
my_base = "GBP"
BASE_URL = 'https://api.fixer.io/'
my_symbols = ','.join(my_currencies)
my_query_url = BASE_URL +'{}?symbols={}&base={}'.format('latest', my_symbols, my_base)
my_response = requests.get(my_query_url).json()
print(my_response)
