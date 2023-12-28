

var employees = [
  {
    "Name": "Mr. Mihir Kapoor",
    "Area": "Ahmedabad",
    "Contact No": "9999999999",
    "Experience Year": 15
  },
  {
    "Name": "Ms. Kinjal Sharma",
    "Area": "Surat",
    "Contact No": "9888888888",
    "Experience Year": 10
  },
  {
    "Name": "Mr. Tejashree Verma",
    "Area": "Vadodara",
    "Contact No": "9777777777",
    "Experience Year": 8
  },
  {
    "Name": "Mr. Mayur Sharma",
    "Area": "Rajkot",
    "Contact No": "9666666666",
    "Experience Year": 17
  },
  {
    "Name": "Mr. Hardik Kewat",
    "Area": "Gandhinagar",
    "Contact No": "9555555555",
    "Experience Year": 3
  }
];


function createListPage() {
  
  var table = document.getElementById("table");
  
  table.innerHTML = "";
  
  var header = table.createTHead();
  var headerRow = header.insertRow(0);
  var headerCells = ["Name", "Area", "Contact No", "Experience Year"];
  for (var i = 0; i < headerCells.length; i++) {
    var cell = headerRow.insertCell(i);
    cell.innerHTML = headerCells[i];
  }
  
  var body = table.createTBody();
  for (var i = 0; i < employees.length; i++) {
    var bodyRow = body.insertRow(i);
    
    if (employees[i]["Experience Year"] >= 15) {
      bodyRow.className = "yellow";
    } else if (employees[i]["Experience Year"] < 5) {
      bodyRow.className = "red";
    }
    
    for (var key in employees[i]) {
      var cell = bodyRow.insertCell(-1);
      cell.innerHTML = employees[i][key];
    }
    
    bodyRow.addEventListener("click", function() {
      
      var index = this.rowIndex - 1;
      
      createDetailsPage(index);
    });
  }
}


function createDetailsPage(index) {
  
  var table = document.getElementById("table");
  
  table.innerHTML = "";
  
  var p = document.createElement("p");
  p.innerHTML = "Employee Details";
  
  table.appendChild(p);
  
  var ul = document.createElement("ul");
  for (var key in employees[index]) {
    var li = document.createElement("li");
    li.innerHTML = key + " : " + employees[index][key];
    
    li.id = key;
    
    ul.appendChild(li);
  }
  
  table.appendChild(ul);
  
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  
  table.appendChild(editButton);
  table.appendChild(deleteButton);
  
  editButton.addEventListener("click", function() {
    
    editEmployee(index);
  });
  
  deleteButton.addEventListener("click", function() {
    
    deleteEmployee(index);
  });
}


function editEmployee(index) {
  
  var table = document.getElementById("table");
  
  table.innerHTML = "";
  
  var p = document.createElement("p");
  p.innerHTML = "Employee Details";
  
  table.appendChild(p);
  
  var form = document.createElement("form");
  for (var key in employees[index]) {
    var label = document.createElement("label");
    label.innerHTML = key + " : ";
    var input = document.createElement("input");
    
    input.value = employees[index][key];
    
    input.name = key;
    
    form.appendChild(label);
    form.appendChild(input);
    
    var br = document.createElement("br");
    
    form.appendChild(br);
  }
  
  table.appendChild(form);
  
  var saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  var cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";
  
  table.appendChild(saveButton);
  table.appendChild(cancelButton);
  
  saveButton.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    for (var key in employees[index]) {
      employees[index][key] = form.elements[key].value;
    }
    
    createListPage();
  });
  
  cancelButton.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    createDetailsPage(index);
  });
}


function deleteEmployee(index) {
  
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  
  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "Are you sure you want to delete this employee?";
  
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  var cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";
  
  modalContent.appendChild(deleteButton);
  modalContent.appendChild(cancelButton);
  
  deleteButton.addEventListener("click", function() {
    
    modal.style.display = "none";
    
    employees.splice(index, 1);
    
    createListPage();
  });
  
  cancelButton.addEventListener("click", function() {
    
    modal.style.display = "none";
    
    createDetailsPage(index);
  });
}


window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


window.onload = createListPage;