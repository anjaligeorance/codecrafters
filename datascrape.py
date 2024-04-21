import requests
from bs4 import BeautifulSoup

url="https://weather.com/en-IN/weather/today/l/17fe778247d08e571b613d0079ababa8146ac4edb0ce3ab88806bfc4c29fbc16"
res=requests.get(url)

soup=BeautifulSoup(res.text,'lxml')
temp=soup.find("span",{"class":"CurrentConditions--tempValue--MHmYY"})
temp1=temp.text
weather=soup.find("div",{"class":"CurrentConditions--phraseValue--mZC_p"})
weather1=weather.text
print(temp1)
print(weather1)