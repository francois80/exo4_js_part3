// Dans le fichier HTML fourni, mettre les bordures des inputs en rouge
  // si les mots de passe sont différents. Sinon les mettre en vert.
// Déclarer les variables

document.querySelector('button').addEventListener('click' , function(){
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

// conditions (ne pas oublier "value" pour récupérer les valeurs des champs)
if(password.value == confirmPassword.value){
  password.style.border = '3px solid green';
  confirmPassword.style.border = '3px solid green';
  // Possibilité d'utiliser la propriété "style.borderColor",
  // il faut supprimer "3px solid" et juste préciser la couleur
}
else{
  password.style.border = '3px solid red';
  confirmPassword.style.border = '3px solid red';
}
});
