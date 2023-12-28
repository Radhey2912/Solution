let empData=JSON.parse(localStorage.getItem('empdata'));
let name=document.getElementById('namee');
let area=document.getElementById('areae');
let contact=document.getElementById('contacte');
let experience=document.getElementById('experiencee');
name.innerText=empData.name;
area.innerText=empData.area;
contact.innerText=empData.contact;
experience.innerText=empData.experience;

const editButton = document.getElementById('editbutton');
const spans = document.querySelectorAll('span');
let btn=document.createElement('button')
editButton.addEventListener('click', function () {
    spans.forEach(span => {
        span.contentEditable = 'true';
    });
    btn.innerText="Save";
    document.querySelector('body').appendChild(btn);
    
});
// btn.addEventListener('click',()=>{
//     const updatedEmpdta={
//         name:name.innerText,
//         area:area.innerText,
//         contact:contact.innerText,
//         experience:experience.innerText

//     }
//     localStorage.setItem('updateddata')
// })

document.getElementById('delbutton').addEventListener('click', () => {
    const targetElementId = empData.contact; // or contact.textContent

    // Dispatch a custom event to notify the other HTML file about the deletion
    const deleteEvent = new CustomEvent('deleteElement', { detail: { targetElementId } });
    window.dispatchEvent(deleteEvent);

    // Redirect to the other HTML file
    window.location.href = 'index.html';
});

