
document.getElementById("btn").addEventListener("click", jokes);

function jokes(){


    var number = Number(document.getElementById("txt").value);
    if(number == ""){
        window.alert("Please enter any number")
    }

    else {
            var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true)

        xhr.onreadystatechange = function(){

            if(this.readyState === 3){
                document.querySelector(".myList").innerHTML = "<h3>Request received<br>Data loading...</h3>"
            }

            if(this.readyState === 4){
                var text = JSON.parse(this.responseText)
                
                var ol = "<ol>"

                for(var i=0; i<number; i++){
                    var data = text.value[i].joke;
                    ol += `<li>${data}</li>`
                }

                ol += "</ol>"
                document.querySelector(".myList").innerHTML = ol;
                document.getElementById("txt").value = ""
            }

        }
        xhr.send()
    }

}

document.getElementById("clear").addEventListener("click", function(){

    document.querySelector(".myList").innerHTML = ""

})