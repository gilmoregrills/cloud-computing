import datetime
import requests

Exchange_Rate=[]

for i in range(30):
	my_date = datetime.date.today() + datetime.timedelta(days=-i)
	my_query_url = 'https://api.fixer.io/'+'{}?symbols={}&base={}'.format(my_date, 'USD,GBP,', "GBP")	
        my_response = requests.get(my_query_url).json()
	Exchange_Rate.append(my_response)
        

print('Average exchange rate over the past 30 days is: {}'.format(Exchange_Rate)
