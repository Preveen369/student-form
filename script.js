var resultset = document.getElementById("resultset")
var username = document.getElementById("name")
var age = document.getElementById("age")
var male = document.getElementById("male")
var female = document.getElementById("female")
var course = document.getElementById("course")
var email = document.getElementById("email")

function save() {
    var inputRow = document.createElement("tr") // create a new row element
    var nameCell = document.createElement("td") // create a cell element each
    nameCell.innerText = username.value         // insert each value to the cell 
    inputRow.appendChild(nameCell)              // add each cell to the inputRow

    var ageCell = document.createElement("td")
    ageCell.innerText = age.value
    inputRow.appendChild(ageCell)

    var courseCell = document.createElement("td")
    courseCell.innerText = course.value
    inputRow.appendChild(courseCell)

    var genderCell = document.createElement("td")
    var genderValue = male.checked ? male.value : (female.checked ? female.value : "")
    genderCell.innerText = genderValue
    inputRow.appendChild(genderCell)
    
    var emailCell = document.createElement("td")
    emailCell.innerText = email.value
    inputRow.appendChild(emailCell)

    var actionCell = document.createElement("td")
    var deleteButton = document.createElement("button") // create a new button
    deleteButton.innerText = "Delete"       // insert the text into the button
    deleteButton.style.backgroundColor = "red"
    deleteButton.style.color = "white"
    deleteButton.style.borderRadius = "3px"
    deleteButton.style.width = "100%"

    deleteButton.onclick = function () {
        resultset.removeChild(inputRow)
    }

    actionCell.appendChild(deleteButton)    // insert the button into the cell
    inputRow.appendChild(actionCell)        // insert the cell into the inputRow

    // finally insert the inputRow into the resultset table
    resultset.appendChild(inputRow)
    
    // Clear the input fields after saving
    username.value = ""
    age.value = ""
    male.checked = false
    female.checked = false
    course.value = ""
    email.value = ""
}