student_list = []
function add_student(student_name, university_name, major_name) {
    var student = {name: student_name, university: university_name, major: major_name}
    student_list.push(student)
    console.log(student)
    display_student_detail(student)
}

function display_student_detail(student_detail) {
    let tbodyElement = document.getElementById("dynamicStudentTableBody")
    tbodyElement.innerHTML += "<tr>" +
        "<td>" + student_detail["name"]+ "</td>" +
        "<td>" + student_detail["university"] + "</td>" +
        "<td>" + student_detail["major"] + "</td>"
    "</tr>"
}
