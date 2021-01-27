const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

/* Live Solve */
// iterate through the employees
for (let i = 0; i < employees.length; i++) {
  const employeeData = employees[i];

  // call to my function and pass data
  const result = processEmployeeBonus(employeeData);
  console.log(result);
}

console.log(employees);

function processEmployeeBonus(empData) {
  // something happens here
  let bonusPct = 0;
  /*
  if (empData.reviewRating === 3) {
    bonusPct = 4;
  } else if (empData.reviewRating === 4) {
    bonusPct = 6;
  } else if (empData.reviewRating === 5) {
    bonusPct = 10;
  } else if (empData.reviewRating <= 2) {
    bonusPct = 0;
  }
*/
  switch (empData.reviewRating) {
    case 3:
      bonusPct = 4;
      break;
    case 4:
      bonusPct = 6;
      break;
    case 5:
      bonusPct = 10;
      break;
    default:
      // bonus rating 2 or below
      bonusPct = 0;
      break;
  }

  return {
    name: empData.name,
    bonusPercentage: bonusPct,
    totalCompensation: 0,
    totalBonus: 0,
  };
}
// employee in param will be object

/* Bellow is where I was as a group
function employeeBonusCalculator(employee) {
  // create object
  const newEmployeeObject = {
    name: '',
    bonusPercentage: '',
    totalCompensation: '',
    totalBonus: '',
  };
  console.log('test');
  //loop through employee information
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);

    if (employee.reviewRating <= 2) {
      //does not receive bonus
      console.log('reviewRating<=2');
    }
  }

  return; // return newEmployeeObject
} 

console.log(employeeBonusCalculator(employees[3])); */
