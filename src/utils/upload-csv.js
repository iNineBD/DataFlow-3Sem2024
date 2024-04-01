document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var fileInput = document.getElementById('fileInput');
    var uploadArea = document.getElementById('uploadArea');
    var columns = document.getElementById('nameColumns');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append("multipartFile", fileInput.files[0]);

        fetch('http://localhost:8080/landing/upload?delimiter=,', {
        method: 'POST',
        body: formdata
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.critica != "Processamento efetuado com sucesso"){
                console.log(data.critica);
                return;
            }
            showColumnsName(data.response.columns);
            uploadArea.innerHTML = `
                    <img src="/src/assets/images/csv.png" alt="csv">
                    <h2>Arquivo carregado com sucesso!</h2>
                    `
        })
        .catch(error => {
            console.error('Erro:', error);
});
        

    });
    fileInput.addEventListener('change', function () {
        var fileName = fileInput.files[0].name;
        uploadArea.innerHTML = `
            <img src="/src/assets/images/csv.png" alt="csv">
            <h1>${fileName}</h1>
            <p>Clique para alterar o arquivo.</p>
        `;
    });


    function showColumnsName(columnsResponse) {

        columnsResponse.forEach(element => {
            columns.innerHTML += `
                   <p>${element.nome}</p>
                `;
        });
    }
});