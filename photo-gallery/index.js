const btnEl = document.getElementById("btn")

function fetchImage(){
    const inputValue = document.getElementById("input").value;
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=3ReQ3BKD3VWrWLGxEt0Dj4J69ZD-fNKbfa7on8JQuNA`).then((res)=>res.json().then((data)=>{
        console.log(data);
    }));
}

btnEl.addEventListener("click", fetchImage);