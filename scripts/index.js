// Declare variables with selectors for input elements in Container 1
const ingredientCommonName = document.getElementById('ingredientCommonName');
const inciName = document.getElementById('inciName');
const ingredientFunctions = document.getElementById('ingredientFunctions');
const percentage = document.getElementById('percentage');
const priceInput = document.getElementById('priceInput'); // Corrected the ID


// Declare variables with selectors for buttons
const addButton = document.querySelector('.button1');
const editDoneButton = document.querySelector('.button2');
const calculateSumButton = document.querySelector('.button3'); // New button


// Declare variables with selectors for container2 sections
const container2 = document.querySelector('.container2'); // Added this line
const ingredientsList = document.getElementById('ingredientList');
const inciNameList = document.getElementById('inciNameList');
const functionList = document.getElementById('functionList');
const percentageList = document.getElementById('percentageList');
const ozList = document.getElementById('ozList');
const priceList = document.getElementById('ingredientCostList'); // Corrected the ID


// Form input elements in Container 3
const batchSizeInput = document.getElementById('batchSize'); // Batch size input


// Function to calculate and populate oz value
function calculateAndPopulateOz() {
    const batchSize = parseFloat(batchSizeInput.value);
    const percentageValue = parseFloat(percentage.value);
    const ozValue = (batchSize * percentageValue) / 100;
    return ozValue.toFixed(2) + ' oz';
}


// Function to calculate and populate ingredient cost value
function calculateAndPopulateIngredientCost(ozValue, pricePerOz) {
    if (!isNaN(ozValue) && !isNaN(pricePerOz)) {
        const ingredientCost = ozValue * pricePerOz;
        return '$' + ingredientCost.toFixed(2);
    }
    return ''; // Return an empty string if either value is not a number
}


// Function to handle the "Add" button click in container1
addButton.addEventListener('click', function () {
    // Create new entry elements
    const entry = document.createElement('div');
    entry.classList.add('entry');


    // Create elements for each section of the entry
    const ingredientItem = document.createElement('div');
    ingredientItem.textContent = ingredientCommonName.value;


    const inciNameItem = document.createElement('div');
    inciNameItem.textContent = inciName.value;


    const functionItem = document.createElement('div');
    functionItem.textContent = ingredientFunctions.value;


    const percentageItem = document.createElement('div');
    percentageItem.textContent = percentage.value + '%';


    const ozValue = calculateAndPopulateOz();
    const pricePerOz = parseFloat(priceInput.value);


    const ozItem = document.createElement('div');
    ozItem.textContent = ozValue;


    const ingredientCost = calculateAndPopulateIngredientCost(parseFloat(ozValue), pricePerOz);


    const ingredientCostItem = document.createElement('div');
    ingredientCostItem.textContent = ingredientCost;


    // Create a remove button (X) for the new row
    const removeButton = document.createElement('span');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'X';


    // Add a click event listener to the remove button
    removeButton.addEventListener('click', function () {
        // Remove the entire row when the button is clicked
        container2.removeChild(entry);
    });


    // Append the elements to the entry in the correct order
    entry.appendChild(ingredientItem);
    entry.appendChild(inciNameItem);
    entry.appendChild(functionItem);
    entry.appendChild(percentageItem);
    entry.appendChild(ozItem);
    entry.appendChild(ingredientCostItem);
    entry.appendChild(removeButton);


    // Clear input fields in container1
    ingredientCommonName.value = '';
    inciName.value = '';
    ingredientFunctions.value = '';
    percentage.value = '';
    priceInput.value = '';


    // Append the entry to container2
    container2.appendChild(entry);
});


// Function to handle the "Calculating Sum" button click in container3
calculateSumButton.addEventListener('click', function () {
    // Get all percentage values from the display container2
    const percentageValues = Array.from(document.querySelectorAll('#percentageList > div')).map(item => parseFloat(item.textContent.replace('%', '')));


    // Calculate the sum of percentages
    const sumOfPercentages = percentageValues.reduce((total, value) => total + value, 0);


    // Get all oz values from the display container2
    const ozValues = Array.from(document.querySelectorAll('#ozList > div')).map(item => parseFloat(item.textContent.replace(' oz', '')));


    // Calculate the sum of ounces (oz)
    const sumOfOz = ozValues.reduce((total, value) => total + value, 0);


    // Get all ingredient cost values from the display container2
    const ingredientCostValues = Array.from(document.querySelectorAll('#ingredientCostList > div')).map(item => {
        const costText = item.textContent.replace('$', '');
        return parseFloat(costText);
    });


    // Calculate the sum of ingredient costs
    const sumOfIngredientCosts = ingredientCostValues.reduce((total, value) => total + value, 0);


    // Display the sum of percentages, ounces (oz), and total batch price in container3
    const percentageSumDisplay = document.getElementById('percentage%%');
    const ozSumDisplay = document.getElementById('ounceOz');
    const totalBatchPriceDisplay = document.getElementById('totalBatchPrice$');


    percentageSumDisplay.textContent = 'Percentage: ' + sumOfPercentages.toFixed(2) + '%';
    ozSumDisplay.textContent = 'Ounce(oz): ' + sumOfOz.toFixed(2) + ' oz';
    totalBatchPriceDisplay.textContent = 'Total Batch Price: $' + sumOfIngredientCosts.toFixed(2);
});


// Get a reference to the "Edit/Done" button by its class
const editButton = document.querySelector('.button2');


// Function to handle the "Edit/Done" button click
editButton.addEventListener('click', function () {
    // Toggle the button text between "Edit" and "Done"
    if (editButton.textContent === 'Edit') {
        editButton.textContent = 'Done';
        alert("Editing"); // Show an alert when editing
    } else {
        editButton.textContent = 'Edit';
        alert("Save Editing"); // Show an alert when done editing
    }
   
    // Toggle the contentEditable attribute and background color for each element
    const editableElements = document.querySelectorAll('.display');
   
    editableElements.forEach((element) => {
        if (editButton.textContent === 'Edit') {
            element.contentEditable = 'false';
            element.style.backgroundColor = ''; // Revert to default background color
        } else {
            element.contentEditable = 'true';
            element.style.backgroundColor = 'lightyellow'; // Change background color while editing
        }
    });
});




//For Ingredient Functions, use Arrays
//Function for the Submit Button in the batchContainer area
//Function for the Add Button in the container1 area
//FUnction for the Edit Button
//Function for the Display Area in the container2 area
//Function for the Calculating Sum Button
//Calculating for percentage %, with the known total amount to be made, ex.
//Calculating for the oz
//calculating for the price
//How does input in container1 will be displayed in container2
//How does displays in contianer2 will be claculated in container3?
//How does the checkBox connect to the Edit Button?
//Making sure that the checkBoxs are in fixed position.
//Making sure that all the buttons are in fixed position.
//Overall checking whether or not all parts are communicating and functioning as desired!!!
