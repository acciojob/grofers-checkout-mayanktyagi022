// Select all price cells
const priceCells = document.querySelectorAll('.prices');

let total = 0;

// Loop through each price cell and add the value to total
priceCells.forEach(cell => {
    total += parseFloat(cell.textContent); // convert string to number
});

// Create a new row
const table = document.getElementById('groceryTable');
const totalRow = document.createElement('tr');
totalRow.classList.add('total-row');

// Create a single cell for total (spanning two columns)
const totalCell = document.createElement('td');
totalCell.colSpan = 2; // span across Item and Price columns
totalCell.textContent = `Total Price: ${total}`;

totalRow.appendChild(totalCell);
table.appendChild(totalRow);


