$(document).ready(function ()
{

    let url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=fd20bf4c34eb4bf4b79aa4a924fda274";
  
    /*fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=fd20bf4c34eb4bf4b79aa4a924fda274')
    .then(response => response.json())
    .then(data => 
    {

        let output = "";
        let latestNews = response.articles;
        for (var i in latestNews) 
        {
          output += `
            <div class="col l4 m6 s12">
            <div class="card medium hoverable">
              <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img" alt="${latestNews[i].title}">
              </div>
              <div class="card-content">
                <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                <h6 class="truncate">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
                <p><b>Author</b>: ${latestNews[i].author} </p>
                <p><b>News source</b>: ${latestNews[i].source.name} </p>
                <p><b>Published</b>: ${latestNews[i].publishedAt} </p>
              </div>
  
              <div class="card-reveal">
                <span class="card-title"><i class="material-icons right">close</i></span>
                <p><b>Description</b>: ${latestNews[i].description}</p>
              </div>
  
              <div class="card-action">
                <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
              </div>
             </div>
            </div>
          `;
        }
    });*/

 $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON",     
  
      beforeSend: function () {
        $(".loader").show();
      },
  
      complete: function () {
        $(".loader").hide();
      },

    success: function (newsdata) {
        let output = "";
        let latestNews = newsdata.articles;
        for (var i in latestNews) {
          output += `
              <div class="col-lg-4 mb-5">
                <div class="card medium hoverable px-5 py-5">
                  <div class="card-image">
                    <img src="${latestNews[i].urlToImage}" class="responsive-img mb-2" alt="${latestNews[i].title}" width="80%">
                  </div>
                  <div class="card-content">
                    <!-- <span class="card-title activator"><i class="material-icons right">more_vert</i></span> -->
                    <h6 class="truncate"><b>Title</b>: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
                    
                    <div class="card-reveal">
                      <!-- <span class="card-title btn btn-secondary"><i class="material-icons right">close</i></span> -->
                      <p><b>Description</b>: ${latestNews[i].description}</p>
                    </div>

                    <div class="card-action">
                      <a href="${latestNews[i].url}" target="_blank" class="btn btn-primary mb-4">Read More</a>
                    </div>
                    
                    <p><b>Author</b>: ${latestNews[i].author} </p>
                    <p><b>News source</b>: ${latestNews[i].source.name} </p>
                    <p><b>Published</b>: ${latestNews[i].publishedAt} </p>
                  </div>
                </div>
              </div>
          `;
        }
  
        if (output !== "") {
          $("#newsResults").html(output);
        }
  
      },
  
      error: function () {
        let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
        $("#newsResults").html(errorMsg);
      }
    })
  
    });