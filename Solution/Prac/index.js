var data = {
    "employees": [
      {
        "name": "Mr. Mihir Kapoor",
        "area": "Ahmedabad",
        "contact": "9999999999",
        "experience": 15
      },
      {
        "name": "Ms. Kinjal Sharma",
        "area": "Surat",
        "contact": "9888888888",
        "experience": 10
      },
      {
        "name": "Mr. Tejashree Verma",
        "area": "Vadodara",
        "contact": "9777777777",
        "experience": 8
      },
      {
        "name": "Mr. Mayur Sharma",
        "area": "Rajkot",
        "contact": "9666666666",
        "experience": 17
      },
      {
        "name": "Mr. Hardik Kewat",
        "area": "Gandhinagar",
        "contact": "9555555555",
        "experience": 3
      }
    ]
  };
  
let table = document.getElementById('employeetable').getElementsByTagName('tbody')[0];

data.employees.forEach(employee => {
    let tr = document.createElement('tr');
    tr.className = "empdata";
    
    let color; // Move the declaration outside the loop
    
    for (let key in employee) {
        if (key === 'experience') {
            if (employee[key] >= 15) {
                color = 'yellow';
            }
            if (employee[key] <= 5) {
                color = '#FFCCCB';
            }
        }

        let td = document.createElement('td');
        td.id = key;
        td.innerText = employee[key];
        
        tr.appendChild(td);
    }
    tr.id=employee['contact']
    tr.style.backgroundColor = color; // Move this line outside of the loop
    table.appendChild(tr);
});





document.querySelectorAll('tr').forEach((ele)=>{
    ele.addEventListener('click',()=>{
        const clickedEmployee = {
            name: ele.querySelector('#name').innerText,
            area: ele.querySelector('#area').innerText,
            contact: ele.querySelector('#contact').innerText,
            experience: ele.querySelector('#experience').innerText
        };
        localStorage.setItem('empdata',JSON.stringify(clickedEmployee))
        window.location.href='details.html';
        
    })
})


window.addEventListener('deleteElement', function (event) {
    const targetElementId = event.detail.targetElementId;

    // Delete the element with the specified ID
    const elementToDelete = document.getElementById(targetElementId);
    if (elementToDelete) {
        elementToDelete.remove();
    }
})