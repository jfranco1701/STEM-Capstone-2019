from lxml import html
import requests
getHeaders = { 'User-Agent' :'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
				 'Upgrade-Insecure-Requests' : '1' }


first = requests.get("https://omahastem.com/calendar/", headers=getHeaders)
print(first.cookies["_gid"])
#postHeaders = { 'cookie' : cookie}
second = requests.post("https://omahastem.com/wp-admin/admin-ajax.php", data = { 'ecwd_date_filter': '2019-5-15' }, headers=getHeaders )

print(second)