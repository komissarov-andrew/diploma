let obj;
var url = "http://localhost:5000";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    obj = data;
    console.log(obj);
    buildTable(obj)
  });

function buildTable(data){
var table = document.getElementById('myTable')
for (var i = 0; i < data.length; i++){
  var row = `<tr>
          <td>${data[i].date}</td>
          <td>${data[i].code}</td>
          <td>${data[i].name}</td>
          <td>${data[i].buy}</td>
          <td>${data[i].sell}</td>
        </tr>`
  table.innerHTML += row
  }
}