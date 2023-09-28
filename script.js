var array = JSON.parse(localStorage.getItem('array')) || [];
const list = document.querySelector(".lista");

document.getElementById("valor").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      Lista();
    }
  });
function Lista() {
    var valorInput = document.getElementById("valor").value;
    if (valorInput === "") {
        return
    } else {
        let itens = {
            id: crypto.randomUUID(),
            nome: valorInput,
            checked: false
        }
        array.push(itens)
        localStorage.setItem('array', JSON.stringify(array))
        document.getElementById("valor").value = "";
        Itens();
    }
}

function Itens() {
    list.innerHTML = ""
    const reversedArray = [...array].reverse();
    reversedArray.forEach((item) => {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");
        const del = document.createElement("del");

        container.className = "container";
        checkbox.type = "checkbox";
        checkbox.checked = item.checked
        checkbox.addEventListener("change", (e) => {
           handleCheck(item.id, e.target.checked);
        });

        checkbox.className = "chek"
        console.log(array)
        button.className = "delete";
        button.innerHTML = `<p><ion-icon name="trash"></ion-icon></p>`
        button.addEventListener("click", () => {
            if (confirm("Você tem certeza que deseja excluir este item?")) {
                handleDelete(item.id);
            }
        });

        p.innerText = item.nome;
        del.innerText = item.nome;
        del.className = "text"
        p.className = "text"

        container.append(checkbox, item.checked ? del : p, button);
        list.appendChild(container);
    })

    console.log(array);
}

function handleCheck (id, value){
    const itemAtual = array.find(item => item.id === id);
    itemAtual.checked = value;
    localStorage.setItem("array",  JSON.stringify(array));

    Itens();
}

function handleDelete(id) {
    const itemIndex = array.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        array.splice(itemIndex, 1);
        localStorage.setItem("array", JSON.stringify(array));
        Itens();
    }
}

document.addEventListener("DOMContentLoaded", Itens);