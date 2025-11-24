const BACKEND = "http://localhost:1111"


function postSignUp(string) {
    fetch(BACKEND + "/api/collections/users", {
        method: "POST",
        body: string,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

}


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const email = data.get('email');

    console.log({ email });
    postSignUp(JSON.stringify({ email }))
}

const form = document.getElementById("sign-up");
form.addEventListener('submit', handleSubmit);
