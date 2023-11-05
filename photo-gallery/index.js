const btnEl = document.getElementById("btn")

function fetchImage(){
    const inputValue = document.getElementById("input").value;
    const errorMessageEl = document.getElementById("errorMessage");
    if (inputValue > 10 || inputValue < 1){
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be 1 to 10";
        return;
    }
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=3ReQ3BKD3VWrWLGxEt0Dj4J69ZD-fNKbfa7on8JQuNA`).then((res)=>res.json().then((data)=>{
        console.log(data);
    }));
    if (errorMessageEl.style.display != "none"){
        errorMessageEl.style.display = "none";
    }
}

btnEl.addEventListener("click", fetchImage);