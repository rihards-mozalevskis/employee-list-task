function renderTable(employees) {
    
  const tableBody = document.getElementById('employeeTable');
  tableBody.innerHTML = '';

  employees.forEach(employee => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = employee.name;
    row.appendChild(nameCell);

    const titleCell= document.createElement('td');
    titleCell.textContent = employee.title;
    row.appendChild(titleCell);

    row.addEventListener('click', () => showModel(employee));
    tableBody.appendChild(row);
  });
}

function showModel(employee) {
  document.getElementById('modelName').textContent = employee.name;
  document.getElementById('modelTitle').textContent = employee.title;
  document.getElementById('modelEmail').textContent = employee.email;
  document.getElementById('modelStartDate').textContent = employee.startDate;

  document.getElementById('model').style.display = 'flex';
}

function setupModel() {
  const model = document.getElementById('model');
  const closeBtn = document.getElementById('modelClose');

  closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
  });

  model.addEventListener('click', (event) => {
    if (event.target === model) {
      model.style.display = 'none';
    }
  });
}

// Realization of searching the labeled datas 
function setupSearch() {
  const searchInput = document.getElementById('searchElement');

  searchInput.addEventListener('input', () => {
    const userQuery =searchInput.value.trim().toLowerCase(); // trim for mistake sensitive queries 
    const filteredEmployees = filterEmployeesByName(userQuery);

    renderTable(filteredEmployees);
  });
}

function filterEmployeesByName(query) {
  return employeesData.filter(employee => {
    const employeeName = employee.name.toLowerCase();
    return employeeName.includes(query);
  });
}

// call the functions 
renderTable(employeesData);
setupModel();
setupSearch();
