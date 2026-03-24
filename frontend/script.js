fetch("http://34.67.65.31:5000/student-details")
.then(res => res.json())
.then(data => {
    document.getElementById("name").innerText = "Name: " + data.name;
    document.getElementById("roll").innerText = "Roll Number: " + data.roll_number;
});