document.getElementById('search-btn').addEventListener('click', function(){
    const searchField= document.getElementById('input-field');
    const searchText=searchField.value;


    const searshQuantity=document.getElementById('search-quantity');
    const searchResult=document.getElementById('search-result');

     /*---------------
      APILinK 
     ----------------*/
    const url = `https://openlibrary.org/search.json?q=${searchText}`

    if (searchText=== "") {
        searchResult.textContent=``;
         return searshQuantity.innerText='plz write a book name';
    }
    searchField.value="";
    searchResult.textContent=``;

    /*---------------
      fetch 
     ----------------*/

    fetch(url)
    .then(res => res.json())
    .then(data=>
        {
            showSearchResult(data.docs)
        const searshQuantity=document.getElementById('search-quantity');
        searshQuantity.innerHTML=`result found ${data.numFound}`
        
        if (data.docs.length===0) {
            return searshQuantity.innerHTML=`result found ${data.docs.length}. plz write a  valid book name `
            
        }
        
        })
})


/*---------------
      showSearchResult 
     ----------------*/

const showSearchResult=book=>{
    book.forEach(book => {
       
        const searchResult=document.getElementById('search-result');
        
        const div =document.createElement('div');

        div.innerHTML=`
        <div class="col">
        <div class="card">
        <img height='200px' width='200px' class="fluid" src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg'></img>
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p>author: ${book.author_name}</p>
        <p>published: ${book.publish_date}</p>
        </div>
        </div>
        </div>
        `
       searchResult.appendChild(div);
       
       
    });
}