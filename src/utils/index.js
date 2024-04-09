//const emailInput = document.getElementById("email");

window.addEventListener("load", () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": "usuario1@email.com"
    });

    const requestOptions = {
        method: "GET",
        body: raw,
    };
    


    fetch("http://localhost:8080/home/filesOrg", requestOptions)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
    //.catch((error) => console.error(error));
})
