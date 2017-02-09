import requests

my_Address = raw_input('Address:')
BASE_URL = 'http://maps.googleapis.com/maps/api/geocode/'
my_query_url = BASE_URL+'json?address={}'.format(my_Address)
my_response = requests.get(my_query_url).json()
Lat_Long = my_response.get('results')[0].get('geometry').get('location')
print('Latitude={} and Longitude={}'.format(Lat_Long['lat'], Lat_Long['lng']))
