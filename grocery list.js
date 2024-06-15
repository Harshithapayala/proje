let groceryList = ['apples', 'bananas', 'carrots', 'bread'];


groceryList.push('milk');


let indexToRemove = groceryList.indexOf('bananas');
if (indexToRemove !== -1) {
    groceryList.splice(indexToRemove, 1);
}


console.log('My grocery list:');
for (let item of groceryList) {
    console.log('- ' + item);
}
