
var numberOfStudents= 0;
function addStudent() {
    return numberOfStudents= numberOfStudents+1 ;
   }
   console.log(numberOfStudents) 
   addStudent()
   console.log(numberOfStudents) 
   addStudent()
   console.log(numberOfStudents) 
 
   function getNumberOfStudents() {
    return numberOfStudents;
   }
   getNumberOfStudents() 
   addStudent()
   getNumberOfStudents() 
 
   const Students = [];
 
   function addStudent(name) {
    return addStudent.name=name;
   }
   console.log(Students) 
   addStudent('Josh')
   console.log(Students) 
   addStudent('John')
   console.log(Students) 
   addStudent('Ines')
   console.log(Students) 
   addStudent('Syrine')
   console.log(Students) 
   addStudent('Yahia')
   console.log(Students) 
 
   function clearStudents(name) {
       var i=0;
    for (var i in Students){
        Students.POP();
        i=i+1;
    }
   }
   console.log(Students) 
   getNumberOfStudents() 
   clearStudents()
   console.log(Students)
   getNumberOfStudents()