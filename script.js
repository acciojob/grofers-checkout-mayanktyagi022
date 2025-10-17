 <script>
    // Select all elements having class 'prices'
    const priceElements = document.querySelectorAll('.prices');

    // Calculate total
    let total = 0;
    priceElements.forEach(price => {
      total += Number(price.textContent); // convert string to number and add
    });

    // Create new row and cell
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // Span across both columns
    totalCell.colSpan = 2;
    totalCell.textContent = 'Total Price: ' + total;

    // Add styling (optional)
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'center';

    // Append cell to row, and row to table
    totalRow.appendChild(totalCell);
    document.getElementById('grocery').appendChild(totalRow);
  </script>

