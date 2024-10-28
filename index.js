const checkbox = document.getElementById('check').cloneNode(true);
const course = document.getElementById('course-name').cloneNode(true);
const grades = document.getElementById('grade').cloneNode(true);
const credit = document.getElementById('credit').cloneNode(true);
const close = document.getElementById('close').cloneNode(true);

function addCourse(){
    let Course = document.createElement("div");
    Course.append(checkbox.cloneNode(true));
    Course.append(course.cloneNode(true));
    Course.append(grades.cloneNode(true));
    Course.append(credit.cloneNode(true));
    Course.append(close.cloneNode(true));
    Course.setAttribute('class', 'Selected-Course');
    document.getElementById('Calculator-Container').appendChild(Course);
}

function reset(){
    const checkboxes = document.querySelectorAll("#check");
    for(let i = 0; i < checkboxes.length;i++){
        checkboxes[i].checked = true;
    }
    const course_names = document.querySelectorAll("#course-name");
    for(let cn of course_names){
        cn.value = "";
    }
    const grades = document.querySelectorAll("#grade");
    for(let g of grades){
        g.value = "";
    }
    const credits = document.querySelectorAll("#credit");
    for(let c of credits){
        c.value = "";
    }
}

function removeCourse(e){
    e.parentNode.remove();
}

function calcGPA(){
    let courses = document.querySelectorAll(".Selected-Course");
    let grade_sum = 0;
    let credit_sum = 0;
    for(let c of courses){
        if(c.firstElementChild.checked == true){
            let curr_grade = c.firstElementChild.nextElementSibling.nextElementSibling;
            let curr_credit = curr_grade.nextElementSibling;
            grade_sum += parseFloat(curr_grade.value) * parseFloat(curr_credit.value);
            credit_sum += parseFloat(curr_credit.value)
            result = grade_sum/credit_sum;
            document.getElementById("display-gpa").innerHTML = result.toFixed(2);
        }
    }
}