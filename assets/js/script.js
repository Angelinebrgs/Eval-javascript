function GMDP(){
let caracteres = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN&é,.çà+=!?@*0123456789'
let long = Math.floor(Math.random()*8);
long = 8+long;
let motdepasse = '';
    for(let i = 0;i <= long;i++){
        motdepasse+= caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        document.getElementById('mdp').value = motdepasse;
        document.getElementById('mdpr').value = motdepasse;
    }
}
function mdpcorespondent(){
    let mdp = document.getElementById('mdp');
    let mdpr = document.getElementById('mdpr');
    if(mdp.value == mdpr.value){
        if(mdp.value.length >= 8){
            return true;
        } else{
            document.getElementById('message').innerHTML = 'le mot de passe est trop court'
            return false;
        }
    } 
    else {
        document.getElementById('message').innerHTML = 'Les deux mots de passe ne correspondent pas';
        return false;
    }
}
//vérification de l'adresse email
function Email(element){
    let regex = /^[a-z0-9.-]{4,}@+[a-z0-9.-]{4,}.+[a-z]{2,}$/i;
    if(regex.test(element.value)){
        return true;
    } else {
        document.getElementById('message').innerText = "Le format de l'Email n'est pas bon";
        return false;
    }
}
//verification du téléphone
function Tel(element){
    let regex = /^0+[1-9]{1}[0-9]{8}$/i;
    if(regex.test(element.value)){
        element.style.background = 'green';
        return true;
    } else {
        element.style.background = 'red';
        document.getElementById('message').innerText = "Le format du numéro de téléphone n'est pas bon";
        return false;
    }
}