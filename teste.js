const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';
function searchSubmit(event) {
    window.location.href = "https://www.themoviedb.org/search?language=pt-BR&query=" + document.getElementById('txtPesquisa').value;
    return false;
}


// Função que cria os cards dos filmes
function MostraFilmesEmCartaz () {
    //Executar requisição AJAX
    console.log("teste");
    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing?language=pt-BR',
        data: { 
            api_key: '79cba082ada54744a0ad1191e3f7c6ad'
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
        
         // Montar os cards
         for (i=0; i< data.results.length; i++) {

            // Concatenar o código do Card com os dados do JSON
            let url  = "https://www.themoviedb.org/movie/"+ data.results[i].id;
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            codigo_html += ` <li class="item-a">
            <div class="latest-box">
                <!--img-------->
                <div class="latest-b-img">
                    <img src="${imagem}">
                </div>
                <!--text---------->
                <div class="latest-b-text">
                    <strong>${titulo}</strong>
                    <p>${descricao}</p>
                    <a href="${url}">Leia mais ...</a>
                </div>
            </div>
        </li>`;
         }
        // Repassar os cards para a página
         $('#lateste_list').html(codigo_html)
    });
}
$( document ).ready(function () {
    MostraFilmesEmCartaz ();
    $('#btn_Pesquisar').click (searchSubmit);
});


