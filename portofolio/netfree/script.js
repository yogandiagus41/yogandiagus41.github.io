
function searchResult (){
    $('#movie-searchList').html('');

    const dataSearch = $('#search-input').val();
    localStorage.setItem('search', dataSearch);
    var a = [];
    a = JSON.parse(localStorage.getItem('history')) || [];
    a.push(dataSearch);
    let history = JSON.parse(localStorage.getItem('history'));

    if (history != dataSearch) {
    localStorage.setItem('history', JSON.stringify(a));}


    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '391b03cf',
            's': $('#search-input').val()
        },
        success: function(result){
           if(result.Response == "True"){
            let movies = result.Search;
            

            $.each(movies, function(i, data){
                var title=data.Title;
                var lt = title.length;
                if (lt > 15) {
                title = title.substring(0, 15);
                title = title + "...";
                }
                $('#movie-searchList').append(`
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="`+data.Poster+`" class="card-img-top" alt="..." style="width: 100%; height: 500px" />
                    <div class="card-body">
                        <h5 class="card-title">`+title+`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+data.Year+`</h6>
                        <a href="#" class="card-link detail"   data-id="`+data.imdbID+`">Detail</a>
                    </div>
                </div>
            </div>
                `)
            })
           }else {
            $('#movie-searchList').html(`
            <div class="col">
                <h1 class="text-center">`+result.Error+`</h1>
            </div>
            `)
           }
        }
        
    });
   

}
function backToSearch (e){
    $('#movie-searchList').html('');

  
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '391b03cf',
            's': e
        },
        success: function(result){
           if(result.Response == "True"){
            let movies = result.Search;
            

            $.each(movies, function(i, data){
                var title=data.Title;
                var lt = title.length;
                if (lt > 15) {
                title = title.substring(0, 15);
                title = title + "...";
                }
                $('#movie-searchList').append(`
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="`+data.Poster+`" class="card-img-top" alt="..." style="width: 100%; height: 500px" />
                    <div class="card-body">
                        <h5 class="card-title">`+title+`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+data.Year+`</h6>
                        <a href="#" class="card-link detail"  data-id="`+data.imdbID+`">Detail</a>
                    </div>
                </div>
            </div>
                `)
            })
           }else {
            $('#movie-searchList').html(`
            <div class="col">
                <h1 class="text-center">`+result.Error+`</h1>
            </div>
            `)
           }
        }
        
    });
   
}








$('#search-button').on('click', function(){
    searchResult();
});
$('#search-input').keyup(function(e){
    if(e.keyCode == 13){
        searchResult();
    }
});
$('#movie-searchList').on('click', '.detail', function(){
    $('#movie-searchList').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '391b03cf',
            'i': $(this).data('id')
        },
        success: function(result){
        if (result.Response === "True"){
            $('#movie-searchList').html(`
            
            <div class="card p-4">
      <div class="row p-4">
        <div class="close-detail" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x-circle float-end"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <img src="`+result.Poster+`" alt="" />
        </div>
        <div class="col-md-8">
          <h1>`+result.Title+`</h1>
          <dl>
            <dt>Released</dt>
            <dd>`+result.Released+`</dd>
            <dt>Genre</dt>
            <dd>`+result.Genre+`</dd>
            <dt>Director</dt>
            <dd>`+result.Director+`</dd>
            <dt>Actors</dt>
            <dd>`+result.Actors+`</dd>
          </dl>
          <div class="btn-group">
                <button class="btn btn-outline-primary mt-4">Download</button>
                <button class="btn btn-outline-success mt-4">Watch</button>
            </div>
        </div>
      </div>
    </div>
            `);
        }else {
            $('#movie-searchList').html(`
            <div class="col">
                <h1 class="text-center">Data not Found</h1>
            </div>
            `)
           }
        }
    });
});

$('#movie-searchList').on('click', '.close-detail', function(){
    dataSearchInLocalStorage=localStorage.getItem('search')
backToSearch(dataSearchInLocalStorage);

});


let history = JSON.parse(localStorage.getItem('history'));
let hr = history.reverse();
for(i=0;i<3;i++){
    $('#history').append(`
    <div class="col-md-4">
    <div class="d-grid">
      <a href="#" class="btn btn-outline-light btn-block mb-2"
        >`+hr[i]+`</a
      >
    </div>
    </div>
    `);

}

