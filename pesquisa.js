const API_KEY = '79cba082ada54744a0ad1191e3f7c6ad';

function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    /*console.log(dados);*/
    for (i=0; i< dados.results.length; i++) {
        let movie = dados.results[i];
        let data = new Date (movie.release_date);
        let url  = "https://www.themoviedb.org/movie/"+movie.id ;
        let imagem = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        texto = texto + `
            <div class="box-noticia">
                <img src="${imagem}" alt="">
                <span class="titulo">${movie.original_title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()}
                   </span><br>
                <span class="text">
                ${movie.overview} <a href="${url}">Leia mais ...</a>
                </span>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    const movie = window.location.search.split('=')[1];
    //let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}&language=pt-BR`);
    xhr.send ();
}

$( document ).ready(function () {
    executaPesquisa();
});