# IntroToNodeJs

###Assignment Instructions
Imagine you work at a Bitcoin exchange and you have customer information coming from another source: SSN, credit card and their bitcoin numbers. However, the file format is CSV and your exchange can only support JSON. Your task is to write a Node script to convert CSV into JSON.

You can download the customer information CSV file here: Link to download: customer-data.csv

A CSV file is like a table. It has the following structure in which the first line has the field names and the rest of the lines have the data:

```
id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address
1,Ario,Noteyoung,anoteyoung0@nhs.uk,Male,99.5.160.227,509-86-9654,5602256742685208,179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB,0227 Kropf Court
2,Minni,Endon,mendon1@netvibes.com,Female,213.62.229.103,765-11-9543,67613037902735554,135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1,90 Sutteridge Way
```

Your assignment is to write a node script that will convert the customer-data.csv file into a JSON file. The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values. The JSON file must have an array with 1000 items. Output the JSON file in the same directory and name the file customer-data.json.