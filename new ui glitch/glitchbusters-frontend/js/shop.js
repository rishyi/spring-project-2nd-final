$(document).ready(function () {
    loadShops();

});

function loadShops() {
    $.get("http://localhost:8080/api/v1//shops/getAll", function (data) {
        let tableBody = "";
        data.forEach(shop => {
            tableBody += `<tr>
                <td>${shop.id}</td>
                <td>${shop.name}</td>
                <td>${shop.address}</td>
                <td>${shop.city}</td>
                <td>${shop.telephone}</td>
                <td>${shop.status}</td>
                <td>
                    <button class='btn btn-warning btn-sm' onclick='editShop(${JSON.stringify(shop)})'>Edit</button>
                    <button class='btn btn-danger btn-sm' onclick='deleteShop(${shop.id})'>Delete</button>
                </td>
            </tr>`;
        });
        $("#shopTableBody").html(tableBody);
    });
}
