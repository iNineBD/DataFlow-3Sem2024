function mock() {

    let simuladDados = {"columns": [
        {
            "nome": "submission_date"
            },
        {
            "nome": "reviewer_id"
            },
        {
            "nome": "product_id"
            },
        {
            "nome": "product_name"
            },
        {
            "nome": "product_brand"
            },
        {
            "nome": "site_category_lv1"
            },
        {
            "nome": "site_category_lv2"
            },
        {
            "nome": "review_title"
            },
        {
            "nome": "overall_rating"
            },
        {
            "nome": "recommend_to_a_friend"
            },
        {
            "nome": "review_text"
            },
        {
            "nome": "reviewer_birth_year"
            },
        {
            "nome": "reviewer_gender"
            },
        {
            "nome": "reviewer_state"
            }
    ]}

    localStorage.setItem('dadosUpload',JSON.stringify(simuladDados))
}