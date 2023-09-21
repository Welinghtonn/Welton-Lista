var array = [];
array = {
    id: 1,
    name: valorInput,
    del: Boolean
}

const list = document.querySelector(".lista")

function Lista() {
    var valorInput = document.getElementById("valor").value;
    if (valorInput === "") {
        return
    } else {
        list.innerHTML = ""
        array.push(valorInput);
        array.forEach((item) => {
            let container = document.createElement("div");
            let checkbox = document.createElement("input");
            let p = document.createElement("p");
            let button = document.createElement("button");
            const del = document.createElement("del");

            container.className = "container";
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", () => {
                console.log(`Check no item: ${item}`);
                if(checkbox.checked === true){
                    container.style.backgroundColor = "green"
                }else{
                    container.style.backgroundColor = "white"
                }
            });

            checkbox.className = "chek"
            button.className = "delete";
            p.innerText = item;
            del.innerText = item;
            p.className = "text"

            container.append(checkbox, p, button);
            list.appendChild(container);

            button.addEventListener('click', function handleClick() {
                container.innerHTML = ""
                array = []

            });
        })
    }
}


