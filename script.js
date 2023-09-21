var array = [];

function Lista() {
    var valorInput = document.getElementById("valor").value;
    array.push(valorInput);
    if(valorInput === ""){

    }else{
        document.getElementById("root").innerHTML = array.map(item => 
            `<p>
                <input type="checkbox">
                ${item}
                <button onclick="Remover()"><ion-icon class="remover"  name="trash-outline"></ion-icon></button>
            </p>`).join("");
    }
}

function Remover() {
    document.getElementById("root").innerHTML = array = []; 
}






