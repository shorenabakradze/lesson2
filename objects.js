// 5.
let student = {
    firstName: "Shorena",
    lastName: "Bakradze",
    location: "Gori",
    dateBirth: "04 April",
    age: 36,
    gender: "female"
};
alert(Object.values(student))

student['phoneNumber'] = '595774459';
alert(student.phoneNumber);
delete student.age;
delete student.dateBirth;
student.dateBirth = '4/4/1987';

alert(Object.values(student))


