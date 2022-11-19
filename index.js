function scuberGreetingForFeet(feet){
  // Write your code here!

  // Check to make sure argument is a valid distance in feet
  let distance = parseFloat(feet);

  if (distance < 0 || distance === NaN) {
    return `It isn't even possible to travel "${feet}" feet!`;
  } else if (distance < 400) {
    return 'This one is on me!';
  } else if (distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const response = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  return response;
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  switch (generosity) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
      break;
  }
}