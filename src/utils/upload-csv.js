document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var fileInput = document.getElementById('fileInput');
    var uploadArea = document.getElementById('uploadArea');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "multipart/form-data; boundary=");

    //     const formdata = new FormData();
    //     formdata.append("multipartFile", fileInput.files[0]);

    //     const requestOptions = {
    //         mode: "no-cors",
    //         method: "POST",
    //         headers: myHeaders,
    //         body: formdata,
    //     };

    //     fetch("http://localhost:8080/landing/upload?delimiter=;", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.error(error));

    // });


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "multipart/form-data");

        const formdata = new FormData(form);
        formdata.append('multipartFile', fileInput.files[0]);

        fetch('http://localhost:8080/landing/upload?delimiter=;', {
            mode: 'no-cors',
            method: 'POST',
            headers: myHeaders,
            body: formdata
        })
            .then(response => {
                if (response.ok) {
                    console.log('Sucesso:', response);
                    uploadArea.innerHTML = `
                    <img src="/src/assets/images/csv.png" alt="csv">
                    <h2>Arquivo carregado com sucesso!</h2>
                    `
                } else {
                    console.error("Erro:", response.body)
                }
            })

    });

    fileInput.addEventListener('change', function () {
        var fileName = fileInput.files[0].name;
        uploadArea.innerHTML = `
            <img src="/src/assets/images/csv.png" alt="csv">
            <h1>${fileName}</h1>
            <p>Clique para alterar o arquivo.</p>
        `;
    });
});
