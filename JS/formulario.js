function validarFormulario() {
    
    
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const telefono = document.getElementById("telefono").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const repetirContrasena = document.getElementById("repetir-contrasena").value.trim();
  
   
    if (!nombre || !correo || !fecha || !ciudad || !sexo || !telefono || !contrasena || !repetirContrasena) {
      alert("Please complete all fields");
      return false;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Email is invalid");
      return false;
    }
  
    if (contrasena !== repetirContrasena) {
      alert("Passwords do not match");
      return false;
    }
  
    const telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(telefono)) {
      alert("The phone number is invalid");
      return false;
    }
  
    return true;
  }

  // ------------------------------------ questionnaire ---------------------


function check(){
var q1 = document.getElementById("q1").value;
var q2 = document.getElementById("q2").value;
var q3 = document.getElementById("q3").value;
var q41 = document.getElementById("q41").checked;
var q42 = document.getElementById("q42").checked;
var q43 = document.getElementById("q43").checked;
var q44 = document.getElementById("q44").checked;
var q45 = document.getElementById("q45").checked;
var q51 = document.getElementById("q51").checked;
var q52 = document.getElementById("q52").checked;
var q53 = document.getElementById("q53").checked;
var q54 = document.getElementById("q54").checked;


var mark=0;

var feedback="Feedback: <br> ";

//question 1
if(q1=="1453-05-29"){
  mark=2;
}else if (q1==""){
  mark+=0;
} else{
  mark-=1;
}

 //question 2
if(q2=="7"){
  mark+=2;
} else if (q2==""){
  mark+=0;
} else{
  mark-=1;
}

 //question 3
if(q3=="Turkey"){
  mark+=2;
} else if (q3==""){
  mark+=0;
} else{
  mark-=1;
}

 //question 4
if(q43){
  mark+=2;
} else if (!q41 && !q42 && !q44 && !q45){
  mark+=-1;
}

 //question 5
if(!q51 && !q54){
  mark+=2;
}else;
  mark-=1;

  if (+mark>=5){feedback="Congratulations!! You have passed the quiz about Istanbul.";
} else if (+mark<=5 ){
feedback="Next time do better";
} else {
feedback="You must inform yourself better to pass this questionnaire"
}
alert("Your score is " + mark + " - " + feedback);

/*document.getElementById("mark").innerHTML="You have obtained a score of  " +mark;
document.getElementById("feedback").innerHTML=feedback;*/

}
