let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
      if (customerData.hasOwnProperty(firstName)) {
        switch(customerData[firstName].visits) {
          case 1:
            greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`
          break;
          case 2:
          case 3:
          case 4:
            greeting = `Welcome back, ${firstName}! So glad to see you again!`
            break;
        }
      } else {
          greeting = `Welcome! Is this your first time?`
      } 
    return greeting;
  }

let output1 = greetCustomer('Joe');
console.log(output1);
let output2 = greetCustomer('Francis');
console.log(output2);