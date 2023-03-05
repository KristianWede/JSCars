
document.getElementById("btn-get-all").onclick = getAllCars;

document.getElementById("btn-find-byId").onclick = findCar;

document.getElementById("btn-create-car").onclick = addCar;

document.getElementById("btn-to-find-car").onclick = findCarInEdit;

document.getElementById("submit-edited-car").onclick = editCar;




const URL = "http://localhost:8080/api/cars";

function getAllCars(event){
    fetch(URL)
    .then(res=>res.json())
    .then(cars => makeTable(cars))
}

function makeTable(cars){
    const tableRows = cars.map(car => `
    <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tableRows.join("")
    //Do this at the exam and you won't get more than max 02 - 4
    document.getElementById("table-body-cars").innerHTML = tableRowsAsString;
}

function findCar(event){

    const id = document.getElementById("text-for-id").value;

    fetch(URL+"/"+id)
    .then(res => {
        if(res.ok){
            return res.json();
        }
    }).then(data => {

        document.getElementById("car-found").innerHTML = data.id + " , " + data.model + " , " + data.pricePrDay;

    }).catch(error => document.getElementById("car-found").innerHTML = "No car found");

    }

function addCar(event){
    fetch(URL, {
        method: 'POST',
        headers: {
        "content-type" : "application/json"
        },
        body: JSON.stringify({
            brand: document.getElementById("brand-input").value,
            model: document.getElementById("model-input").value,
            pricePrDay: document.getElementById("pricePrDay-input").value,
        }
        )
        })
        
        .then(response => response.json())
        .then(data => {
          document.getElementById("returnedData").innerHTML = `Request Body: ${JSON.stringify(data)}`;
        })
        .catch(error => console.error(error)); 
        
}

function editCar(event){

    const id = document.getElementById("text-for-id2").value;

    fetch(URL+"/"+id, {
        method: 'PUT',
        headers: {
        "content-type" : "application/json"
        },
        body: JSON.stringify({
            brand: document.getElementById("brand-edit").value,
            model: document.getElementById("model-edit").value,
            pricePrDay: document.getElementById("pricePrDay-edit").value
        })
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Data replaced:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

function findCarInEdit(event){

    const id = document.getElementById("text-for-id2").value;

    fetch(URL+"/"+id)
    .then(res => {
        if(res.ok){
            return res.json();
        }
    }).then(data => {

        document.getElementById("returnedData").innerHTML = `Request Body: ${JSON.stringify(data)}`;

        document.getElementById("brand-edit").value = data.brand;
        //console.log("brand field filled!")
        document.getElementById("model-edit").value = data.model;
        //console.log("model field filled!")
        document.getElementById("pricePrDay-edit").value = data.pricePrDay;
        //console.log("pricePerDay field filled!")

    }).catch(error => document.getElementById("car-found2").innerHTML = "No car found.");

    }
