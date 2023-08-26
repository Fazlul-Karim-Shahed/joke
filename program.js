
document.getElementById("btn").addEventListener("click", jokes);

function jokes() {


    var number = Number(document.getElementById("txt").value);
    console.log(number, typeof (number))
    if (number == "" || number == 0) {
        number = 1
    }

    fetch(`https://v2.jokeapi.dev/joke/Any?amount=${number}`).then(res => res.json().then(data => {

        console.log(data)

        var jokes = data.jokes

        var ol = "<ol>"

        if (number === 1) {
            ol += `<li><h3>${data.setup}</h3> <h6>${data.delivery}</h6></li>`
        }
        else {
            jokes.forEach(item => {

                ol += `<li><h3>${item.setup}</h3> <h6>${item.delivery}</h6></li>`

            });
        }

        ol += "</ol>"
        document.querySelector(".myList").innerHTML = ol;
        document.getElementById("txt").value = ""

    }))

}

document.getElementById("clear").addEventListener("click", function () {

    document.querySelector(".myList").innerHTML = ""

})