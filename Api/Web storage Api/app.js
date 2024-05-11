// Selection des Elements du DOM:
const myForm = document.getElementById("studentForm");

const myStudentContainer = document.querySelector(".students");
const nameInput = myForm["name"];
const ageInput = myForm["age"];
const rollInput = myForm["roll"];

// Creation d'un nouveau tableau ou on va ajouter les élevés :
// let students = [];
//Creation de la fonction qui va ajouter les élèves dans le tableau sous forme d'un objet javascript: needs 3 params:

const students = JSON.parse(localStorage.getItem("students")) || [];
function addStudent(name, age, roll) {
  students.push({
    name: name,
    age: age,
    roll: roll,
  });
  // Avant de returner le tableau de l'étudient, on va ajouter toutes les données au localStorage:
  localStorage.setItem("students", JSON.stringify(students));
  // retourner l'objet tableau student:
  return { name, age, roll };
}

//Creation de la fonction qui va ajouter le tableau des élèves au DOM et spécialement dans la div avec la classe students, ici on utilise la destructuration de l'objet student dans les paramètres de la fonction ci-dessous:

const addStudentElement = ({ name, age, roll }) => {
  //Creation des Elements:
  const newStudentDiv = document.createElement("div");
  const nameOfStudent = document.createElement("h2");
  const ageOfStudent = document.createElement("p");
  const rollOfStudent = document.createElement("p");
  //Creation du Contenu des Elements:
  nameOfStudent.innerText = "Student name is : " + name;
  ageOfStudent.innerText = "Age: " + age;
  rollOfStudent.innerText = "Roll: " + roll;
  // attacher les name age and roll elements to the newStudentDiv:
  newStudentDiv.append(nameOfStudent, ageOfStudent, rollOfStudent);
  // attacher la newStudentDiv to  the div principale:
  myStudentContainer.appendChild(newStudentDiv);
  myStudentContainer.style.display = students.length === 0 ? "none" : "flex";
};
// On cache la div .student si on a  aucune donnée, sinon on l'affiche flex:

myStudentContainer.style.display = students.length === 0 ? "none" : "flex";

// pour chaque student ajouter on va créer activer la fonction addStudentElement:
students.forEach(addStudentElement);

// On va ajouter un event lors du submit event:
myForm.onsubmit = (event) => {
  event.preventDefault(); // the page ne sera pas rafraîchi
  // On crée un nouveau student a partir des entrées et on utilisant la fonction addStudent():
  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );
  // On ajoute le nouveau student au DOM:
  addStudentElement(newStudent);
  // On vide les champs de saisie:
  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
  // On empêche la soumission du formulaire:
  return false;
  // focus on a new name entry:
  nameInput.focus();
};
