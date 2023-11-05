const btnEl = document.getElementById("btn")

function fetchImage(){
    const inputValue = document.getElementById("input").value;
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1`).then((res)=>res.json().then((data)=>{
        console.log(data);
    }));
}

btnEl.addEventListener("click", fetchImage);