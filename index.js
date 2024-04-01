// Code your solutions in this file

function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
      debugger;
    }
  
    return thankYouMessages;
  }
  
  // Example usage:
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);



  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  // Example usage:
countDown(10);