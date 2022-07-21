import * as readline from 'readline-sync'
import {Student} from "./Student";
import {StudentManager} from "./StudentManager";

let studentmanager = new StudentManager

function inputStudent(): Student {
    let name = readline.question('Nhap ten:')
    let email = readline.question('Nhap email :')
    let group = readline.question('Nhap ten nhom :')
    let age = +readline.question('Nhap tuoi : ')
    return new Student(name, email, group, age)
}

function showStudent() {
    let student = studentmanager.getAllStudent()
    console.table(student)
}


function deleteStudent() {
    console.log('xoa hoc sinh')
    let value = +readline.question('nhap vi tri muon xoa:')
    studentmanager.deleteStudent(value)
}

function addStudent() {
    console.log("Them hoc sinh moi ")
    let student = inputStudent()
    studentmanager.addNewStudent(student)
}

function findStudentName() {
    console.log('1.Nhap Ten hoc sinh');
    let name = readline.question('nhap ten : ')
    let student = studentmanager.findsStudent(name)
    console.log(student)
}

function findStudentEmail() {
    console.log('2. nhap Email hoc sinh');
    let email = readline.question('nhap email : ')
    studentmanager.findsStudentemail(email)
}

function findStudentGroup() {
    console.log('3. nhap Group hoc sinh ');
    let group = readline.question('nhap group : ')
    studentmanager.findsStudentgroup(group)
}

function findStudentAge() {
    console.log('4 .Nhap tuoi hoc sinh');
    let age = +readline.question('Nhap Tuoi : ')
    studentmanager.findsStudentage(age)
}

function updateStudentt() {
    console.log('Thay doi hoc sinh ')
    let value = +readline.question('Nhap vi tri muon thay doi ')
    let student = inputStudent()
    studentmanager.updateStudent(value, student)
}
function sortStudentt(){
    console.log('Sap xep hoc sinh')
    let student = studentmanager.sortAge()
    console.table(student)
}

function findStudent() {
    let check2
    do {
        menu2()
        check2 = +readline.question('Nhap lua chon : ')
        switch (check2) {
            case 1:
                findStudentName()
                break;
            case 2:
                findStudentEmail()
                break;
            case 3:
                findStudentGroup()
                break
            case 4:
                findStudentAge()
                break
            case 0:
                break;
        }
    }
    while (check2 != 0)
}

function menu2() {
    console.log('1. Tim theo ten ')
    console.log('2. Tim theo email ')
    console.log('3. Tim theo group ')
    console.log('4. Tim theo tuoi')
    console.log('0. Thoat ')
}

function menu() {
    console.log('<---------------------->')
    console.log('1. Them hoc sinh')
    console.log('2. Xoa hoc sinh')
    console.log('3. Tim hoc sinh')
    console.log('4. Chinh sua hoc sinh')
    console.log('5. Hien thi hoc sinh')
    console.log('6. Sap xep hoc sinh')
    console.log('0. Thoat')
    console.log('<----------------------->')
}

let check
do {
    menu();
    check = +readline.question('Nhap lua chon : ')
    switch (check) {
        case 1:
            addStudent()
            break;
        case 2:
            deleteStudent()
            break;
        case 3:
            findStudent()
            break;
        case 4:
            updateStudentt()
            break
        case 5:
            showStudent()
            break;
        case 6:
            sortStudentt()
            break
        case 0:
            break;
    }
}
while (check != 0)