$(document).ready(function(){
    $('#formulaire_inscription').on('submit',function(){
        let formulaire = $('#formulaire_inscription').serialize();
        $.ajax({
            url: 'assets/ajax/form.php',
            method: 'GET',
            data: formulaire ,
            dataType: 'html',
        })
        .done(function(response){
            alert(response);
        })
        .fail(function(error){
            alert('Le formulaire ne peut être enregistré');
        });
        return false;
    });
});