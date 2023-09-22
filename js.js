function myCredit() {
    let myTable = document.getElementById("table"); 
    let CreditInput = document.getElementById("Credit"); 
    let Credit = parseFloat(CreditInput.value);

    if (isNaN(Credit)) {
        alert("Invalid input. Please enter a valid number for Credit.");
        return;
    }

    var newRow = myTable.insertRow(1);
    var newCell = newRow.insertCell(0);

    newCell.innerHTML = Credit.toFixed(2) + ' is Credited'; 

    CreditInput.value = "";

    
    updateSumRow();
}

function myDebit() {
    let myTable = document.getElementById("table"); 
    let DebitInput = document.getElementById("Debit"); 
    let Debit = parseFloat(-DebitInput.value);

    if (isNaN(Debit)) {
        alert("Invalid input. Please enter a valid number for Debit.");
        return;
    }

    var newRow = myTable.insertRow(1);
    var newCell = newRow.insertCell(0);

    newCell.innerHTML = Debit.toFixed(2) + ' is Debited'; 

    DebitInput.value = "";

    
    updateSumRow();
}

function updateSumRow() {
    let myTable = document.getElementById("table");
    let sumCell = document.getElementById("sumCell"); 

    let sum = 0;

    
    for (let i = 0; i < myTable.rows.length; i++) {
        let row = myTable.rows[i];

        if (row === sumCell.parentNode) {
            continue; 
        }

        if (row.cells.length > 0) {
            let cellContent = row.cells[0].innerText;


           
            let cellValue = parseFloat(cellContent);

            if (!isNaN(cellValue)) {
                sum += cellValue;
            }
        }
    }

    // Update the sum cell's content with the calculated sum, formatted as a number with 2 decimal places
    sumCell.innerText = sum.toFixed(2);
}
