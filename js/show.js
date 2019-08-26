//fetch
const url = "js/object.json";
//request
fetch(url)
//convert to..
.then(function(response) {
    return response.json();
})
//result after convert
.then(function(data) {
    let datas = document.querySelector('#card');
        data.forEach(element => {
            if (element.id <= 3) {
            datas.innerHTML += `
                <div class="card mt-5">
                    <div class="card-header">${element.native_name}</div>
                    <div class="card-body">
                        ${element.name}
                    </div>
                </div>
            `;
            }
        })
})
//request failed
.catch(function(error) {
    return console.log('Cannot get data');
})