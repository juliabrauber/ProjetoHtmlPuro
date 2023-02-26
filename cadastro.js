listaPessoas = [];

function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var cpf = document.getElementById("cpf").value;

    listaPessoas.push({ name: name, cpf: cpf });

    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    listaPessoas.forEach(function (pessoa) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        var cpfCell = document.createElement("td");
        nameCell.innerHTML = pessoa.name;
        cpfCell.innerHTML = pessoa.cpf;
        row.appendChild(nameCell);
        row.appendChild(cpfCell);
        tableBody.appendChild(row);
    });

    console.log(listaPessoas);
}