async function logoutUser(email) {
    url = 'http://localhost:8080/register/logout';
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ` + sessionStorage.getItem("authToken"),
        },
        body: JSON.stringify({ email: email }),
        })
    
}