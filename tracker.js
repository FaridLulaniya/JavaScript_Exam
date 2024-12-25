let expenses = [];
let editingIndex = null;

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
});

document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    if (editingIndex !== null) {
        // Edit existing expense
        expenses[editingIndex] = { name, amount, date, category };
        editingIndex = null;
    } else {
        // Add new expense
        expenses.push({ name, amount, date, category });
    }

    renderExpenses();
    this.reset();
});

function renderExpenses() {
    const list = document.getElementById('expenses');
    list.innerHTML = '';
    expenses.forEach((exp, index) => {
        const li = document.createElement('li');
        li.textContent = `${exp.name} - $${exp.amount} - ${exp.date} - ${exp.category} `;

        // Create Edit Button
        const editButton = document.createElement('button');
        editButton.id = 'edit-delete'
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editExpense(index));

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.id = 'edit-delete'
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteExpense(index));

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('expense-name').value = expense.name;
    document.getElementById('amount').value = expense.amount;
    document.getElementById('date').value = expense.date;
    document.getElementById('category').value = expense.category;
    editingIndex = index; // Set index for editing
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

renderExpenses();