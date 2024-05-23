let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

let user = JSON.parse(text); 
console.log(user.employees[0].firstName + " " + user.employees[0].lastName);