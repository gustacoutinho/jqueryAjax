$(function(){
    $('#AjaxRequest').submit(function(){ //#pega o id
        //ajax
        var form = $(this).serialize();
        var request = $.ajax({
            method: 'POST',
            url: 'curso/post.php',
            data: form, /*name: $(':input[name=name]').val(),
                        email:$(':input[name=email]').val(),
                        tel:$(':input[name=tel]').val()*/
            dataType: 'json'
        });

        request.fail(function(e){ //sempre vai trazer o resultado
            console.log('fail');
            console.log(e);
        })
        request.done(function(e){ //sempre vai trazer o resultado
            for(var k in e){
                $(':input[name=k]').val(e[k]); //adiciona apenas no console
            }
            console.log(e);
        })
        request.always(function(e){ //sempre vai trazer o resultado
            console.log('always');
            console.log(e);
            for(var k in e){
                $(':input[name='+k+']').val(e[k]); //adiciona no próprio input
            }
        })

        return false; // não recarrega a página
    })
})