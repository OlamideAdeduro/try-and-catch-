/*try and catch the error*/
let studentName = document.getElementById("name");
let studentAge = document.getElementById("age");
let studentCourse = document.getElementById("course");

let registerButton = document.getElementById("registerBtn"); 
registerButton.addEventListener("click", function() {
    
    try {   
    console.log(studentName.value);
    console.log(studentAge.value);
    console.log(studentCourse.value);
     
        if (studentName.value === "") {
             throw new Error("Name is required");
        }

    } catch(err) {
        console.log("something went wrong!");
    }

});