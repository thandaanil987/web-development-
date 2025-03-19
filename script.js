/* script.js */
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let employeeName = document.getElementById("employeeName").value;
    let taskTitle = document.getElementById("taskTitle").value;
    let deadline = document.getElementById("deadline").value;
    let status = document.getElementById("status").value;
    
    let taskItem = `<li class='list-group-item'><strong>${employeeName}</strong>: ${taskTitle} (Deadline: ${deadline}, Status: ${status})</li>`;
    document.getElementById("taskList").innerHTML += taskItem;
    
    document.getElementById("taskForm").reset();
});
