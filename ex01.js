var age;
var sexe;
var nationalite
age = prompt('Quel âge avez-vous ?');
sexe = prompt('Etes vous un garçon ou une fille?')
nationalite = prompt('De quelle nationalité êtes vous?')
if(age >= 18 && sexe == "garçon"){
      	alert('Vous êtes un garçon majeur ' +nationalite);
}
else if(age >= 18 && sexe == "fille"){
   		alert('Vous êtes une fille majeur ' +nationalite)
}
else if(age <= 18 && sexe == "fille"){
   		alert('Vous êtes une fille mineur ' +nationalite)
}
else if(age <= 18 && sexe == "garçon"){
   		alert('Vous êtes un garçon mineur ' +nationalite)
}

