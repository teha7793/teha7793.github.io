let employees = [
  {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
  },
  {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
  },
  {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
  }
]
console.log("[ 1 ]"); //Problem 1
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

let Company = {
  "companyName": "Tech Stars",
  "website": "techstars.com",
  "employees": employees
}
console.log("[ 2 ]"); //Problem 2
console.log(Company.companyName, Company.website, Company.employees[0],Company.employees[1],Company.employees[2]);

let Anna = {
  "firstName": "Anna",
  "department": "Tech",
  "designation": "Executive",
  "salary": 25600,
  "raiseEligible": false
};
Company.employees.push(Anna);
console.log("[ 3 ]"); //Problem 3
console.log(Anna);
console.log(employees);
console.log(Company);


let salarySum = 0;
for(let i in Company.employees){
  salarySum += Company.employees[i].salary;
}
console.log("[ 4 ]"); //Problem 4
console.log("Sum of salaries is",salarySum);

function raise(){
  for(let i in Company.employees){
    if(Company.employees[i].raiseEligible === true){
      Company.employees[i].salary *= 1.1;
      Company.employees[i].raiseEligible = false;
    }
  }
}
raise();
console.log("[ 5 ]"); //Problem 5
console.log(Company);

//6
arr = ["Anna","Sam"];
for(let i in Company.employees){
    Company.employees[i].wfh = arr.includes(Company.employees[i].firstName);
}
console.log("[ 6 ]"); //Problem 6
console.log(Company);


/*function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['companyName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  // We use the `` (top left of keyboard) to indicate strings.
  // You could also concatenate using + signs
  // Like 'Hometown: ' + obj['homeTown'] + '// Formed: ' + obj['formed']
  myPara.textContent = `Website: ${obj['website']}`;

  header.appendChild(myPara);
}

// Function to populate employeees cards; will run for however many employees are in the "employees" array of our JSON.

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const employees = obj['employees'];

  for (const employee of employees) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = employee.firstName;
    myPara1.textContent = `Designation: ${employee.designation}`;
    myPara2.textContent = `Department: ${employee.department}`;
    myPara3.textContent = `Salary: ${employee.salary}`;
    myPara4.textContent = `Raise Eligible: ${employee.raiseEligible}`;

    /*const salaries = employee.salary;
    for (const salary of salaries) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }*/

    /*myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populateHeader(Company);
populateEmployees(Company);*/
