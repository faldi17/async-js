const response = document.createElement('h1');
response.id = 'response';
document.body.appendChild(response);

function displayResponse(json) {
    const header = document.getElementById('response');
    header.textContent = json.response;
}

const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/data.json');
// ajax.open('GET', 'api/salah.json');
ajax.addEventListener('load', function () {
    if (ajax.status === 200) {
        const json = JSON.parse(ajax.responseText);
        displayResponse(json);
    } else {
        displayResponse({
            response: `Terjadi kesalahan dengan status ${ajax.status}`
        })
    }
    
});
ajax.send();