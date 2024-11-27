deleteButton = document.getElementById('deleteStudentButton');
// add an event listener to delete the last row/student on double clicking the deleteButton


button = document.getElementById('addStudentButton');
// add an event listener to style the button on click


function showNewStudentForm(){
// display the form on clicking the button
<style>
            #f1 {
                background-color: blueviolet;
                color: white;
                font-size: 24px;
                padding: 20px;
            }
            #f2 {
                background-color: blue;
            }
        </style>
}

function validateForm(){
    function validateForm() {
        var name = document.getElementById('name').value;
        var gmail = document.getElementById('gmail').value;
        var password = document.getElementById('email').value;
        

        var namePattern = /^[a-zA-Z]{5,20}$/;
        if (!namePattern.test(name)) {
            alert('Please enter a valid name (5-20 characters, letters only).');
            return false;
        }

        var gmailPattern = /^[a-zA-Z0-9._*-+]+@gmail\.com$/;
        if (!gmailPattern.test(gmail)) {
            alert('Please enter a valid Gmail address.');
            return false;
        }
    // validate your form
    // regex for name: /^[A-Za-z]+(?: [A-Za-z]+)*$/  allows names habving one or more words with one white spaces in between
    // regex for email:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // regex for student id: /^[a-zA-Z0-9]{7}$/  accepts alphanumeric values of 7 characters
}


