const response = document.createElement('h1');
response.id = 'response';
document.body.appendChild(response);

const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/data.json');
ajax.addEventListener('load', function () {
    const json = JSON.parse(ajax.responseText);
    const header = document.getElementById('response');
    header.textContent = json.response;
});
ajax.send();