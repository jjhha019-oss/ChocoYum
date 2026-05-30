function placeOrder() {
    alert("thank you for your order! we will contact you soon");
 }

 function greetCustomer() {
    let name = document.getElementById("name").value;
    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "haya";
}
