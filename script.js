var array = JSON.parse(localStorage.getItem('array')) || [];
const list = document.querySelector(".lista")

function Lista() {
    var valorInput = document.getElementById("valor").value;
    if (valorInput === "") {
        return
    } else {
        let itens = {
            nome: valorInput,
            chekout: false/true
        }
        array.push(itens.nome)
        localStorage.setItem('array', JSON.stringify(array))

        console.log(array)
        Itens();
    }
}

function Itens() {
    let itens = {
        chekout: false
    }
    list.innerHTML = ""
    array.forEach((item) => {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");
        const del = document.createElement("del");

        container.className = "container";
        checkbox.type = "checkbox";
        checkbox.checked = itens.chekout
        checkbox.addEventListener("change", () => {
            itens.chekout = checkbox.checked
            if (itens.chekout) {
                container.style.backgroundColor = "green"
                localStorage.setItem("chek", itens.chekout)
                array.push(itens.chekout)
                console.log(array)
            } else {
                container.style.backgroundColor = "white"
                localStorage.setItem("chek", itens.chekout)
            }
        });
        
        checkbox.className = "chek"
        button.className = "delete";
        p.innerText = item;
        del.innerText = item;
        p.className = "text"

        container.append(checkbox, p, button);
        list.appendChild(container);
    })
}

document.addEventListener("DOMContentLoaded", Itens);