loadProducts();

document.querySelector("#submit").addEventListener("click", function(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector("#search-form"));

    fetch("search.php", {method: "POST", body: formData})
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    const resultsContainer = document.querySelector("#search-results");
                    resultsContainer.innerHTML = ""; 

                    data.forEach(item => {
                        const div = document.createElement("div");
                        div.innerHTML = `${item.name} - $${item.price}`;
                        resultsContainer.appendChild(div);
                    });
                });
            }
        })
});

// Function to load products from the server
function loadProducts() {
    fetch("api.php")
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    for (let i = 0; i < data.length; i++) {
                        let r = document.createElement("tr");
                        let c1 = document.createElement("td");
                        let c2 = document.createElement("td");
                        let c3 = document.createElement("td");
                        c1.innerHTML = data[i].id;
                        c2.innerHTML = data[i].name;
                        c3.innerHTML = data[i].price;
                        r.appendChild(c1);
                        r.appendChild(c2);
                        r.appendChild(c3);
                        document.querySelector("#products tbody").appendChild(r);
                    }
                });
            }
        })
}
