function mock() {

    let simuladDados = {
        
        "response": {
            "fileName": "B2W-Reviews01.csv",
            "usuario": "usuario1@email.com",
            "fileSize": 57.1047477722168,
            "columns": [
                {
                    "nome": "submission_date"
                },
                {
                    "nome": "reviewer_id"
                }
            ]
        }
    }

    localStorage.setItem('dadosUpload', JSON.stringify(simuladDados))
}