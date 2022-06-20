console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [] // Basket array

// global variable for max items
const maxItems = 5;

// function to test if basket is full
function isFull(array, max){
    if(array.length < max){
        return false;
    } else if (array.length >= max){
        return true;
    }
}
console.log(isFull(basket, maxItems))

// function to add items
function addItem (item){
        if (isFull(basket, maxItems) === false){
    basket.push(item);
    console.log(item);
    return true
        } else if (isFull(basket, maxItems) === true){
    console.log('no room for more items')
    return false;
    }   
}

// function to remove items
function removedItem(item, array){
    let removed = array.indexOf(item);
    console.log('lets remove', removed);
    console.log(array.splice(removed, 1));
    return;
}

// calls addItem function
addItem('Apple');
addItem('Peanuts');
addItem('Candy Bar')

// logs and test the item was added
console.log('add apples, peanuts, and candy bar', basket)

// calls removedItem function
removedItem('Peanuts', basket)

// function to list items in array
function listItems(array){
    for(let i = 0; i<array.length; i++){
        console.log('Check', array[i]);
    }
}

//calls listItem function and test it
listItems(basket);
console.log(basket)
// function to empty basket
function empty(array){
    array.length = 0;
}

// calls function and test it
empty(basket);
console.log('basket is now', basket);

//logs and test isFull function
console.log(isFull(basket, maxItems))