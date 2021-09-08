
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        contentType: 'application/json',
        cache: false,
        method: 'GET',
        dataType: 'json',
        data: JSON.stringify({
            id: 'test',
            command: 'echo leandro'
        }),
        success: function(data) {
            console.log(data);
            $("#logradouro").html(data.logradouro);
            $("#uf").html(data.uf);            
            $("#localidade").html(data.localidade);
            $("#bairro").html(data.bairro);
            $("titulo_cep").html("CEP" + data.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            // $("#logradouro").html(data.logradouro);
            // document.getElementById("logradouro").innerHTML = data.logradouro;
            // document.getElementById("bairro").innerHTML = data.bairro;
            // document.getElementById("localidade").innerHTML = data.localidade;
            // document.getElementById("uf").innerHTML = data.uf;
            // alert(data.logradouro);
        }
    });
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
