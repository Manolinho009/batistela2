var tristeArray = []

var grandeArray = []

var numero = 0
// function limpar() {
//     var nome = document.getElementById("inputNome");
//     var valor = document.getElementById("inputValor");
//     var horas = document.getElementById("inputHoras");

//     var erro1 = document.getElementById("erro1");
//     var erro2 = document.getElementById("warning");

//     nome.value = "";
//     valor.value = "";
//     horas.value = "";

//     erro2.style = "opacity: 100%";
//     setTimeout(() => { erro2.style = "opacity: 0%"}, 2000);
//     erro1.innerHTML = "Limpinho. 👍";
//     console.clear();
// }


function calcular() {
    var nome = document.getElementById("nome");
    var valor = document.getElementById("valHoras");
    var horas = document.getElementById("quantHoras");

    var erro1 = document.getElementById("erroDiv");
    var erro2 = document.getElementById("erroDiv2");

    if(nome.value.length!=0 && valor.value.length!=0 && horas.value.length!=0) {
        //Para o Dev
        //          salBruto = 0 | salLiquid = 1 | impostoRenda = 2;
        parseFloat(tristeArray[0] = valor.value * horas.value);

        if(tristeArray[0]<=22874.76){
            tristeArray[2] = "Isento.";
            tristeArray[1] = tristeArray[0] - 0;
        }
        if(tristeArray[0]>22847.76 && tristeArray[0]<=33912.81){
            tristeArray[1] = tristeArray[0] - 1713.58;
            tristeArray[2] = "7,5%";
        }
        if(tristeArray[0]>33912.81 && tristeArray[0]<=45012.61){
            tristeArray[1] = tristeArray[0] - 4256.57;
            tristeArray[2] = "15%";
        }
        if(tristeArray[0]>45012.61 && tristeArray[0]<=55976.16){
            tristeArray[1] = tristeArray[0] - 7633.51;
            tristeArray[2] = "22,5%";
        }
        if(tristeArray[0]>55976.16){
            tristeArray[1] = tristeArray[0] - 10432.32;
            tristeArray[2] = "27,5%";
        }

        console.log("salBruto: "+tristeArray[0]);
        console.log("salLiquid: "+tristeArray[1]);
        console.log("impostoRenda: "+tristeArray[2]);

        erro2.style = "opacity: 100%";
        setTimeout(() => { erro2.style = "opacity: 0%"}, 2000);
        erro1.innerText = "Salário Bruto: R$"+tristeArray[0]+
        "\nSalário Líquido: R$"+tristeArray[1]+
        "\nImposto de Renda: "+tristeArray[2]
        var myObj = { salBrute: tristeArray[0], salLiquidow: tristeArray[1] ,impostow: tristeArray[2]}
        var myJSON = JSON.stringify(myObj);
        console.log(myJSON);
        numero += 1
        grandeArray.push("Operação"+numero,tristeArray)
        //console.log(JSON.stringify(grandeArray))
    }else{
        erro2.style = "opacity: 100%";
        setTimeout(() => { erro2.style = "opacity: 0%"}, 2000);
        erro1.innerHTML = "Algum campo está faltando.";
        if(nome.value.length==0) {
            nome.style = "border-color: red;";
            setTimeout(() => { nome.style = "border-color: black;" }, 1000);
        }
        if(valor.value.length==0) {
            valor.style = "border-color: red;";
            setTimeout(() => { valor.style = "border-color: black;" }, 1000);
        }
        if(horas.value.length==0) {
            horas.style = "border-color: red;";
            setTimeout(() => { horas.style = "border-color: black;" }, 1000);
        }
    }
}


function printArray() {
    var erro1 = document.getElementById("erroDiv");
    var erro2 = document.getElementById("erroDiv2");
    erro2.style = "opacity: 100%";
    setTimeout(() => { erro2.style = "opacity: 0%"}, 2000);
    erro1.innerText = "Salário Bruto: R$"+tristeArray[0]+
    "\nSalário Líquido: R$"+tristeArray[1]+
    "\nImposto de Renda: "+tristeArray[2]
}

function historico(){
    console.log(JSON.stringify(grandeArray))
}


// confeti

const settings = {
    numConfetti: 150,
    distance: 75,
    colors: ["blue", "green", "yellow", "red", "pink"],
    shapes: ["square", "circle", "rectangle"]
  };
  
  function getRandomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getRotation() {
    return Math.floor(Math.random() * 360) + 1;
  }
  

  function emit() {
    var container = document.getElementById("confetti-container");
    var containerRect = container.getBoundingClientRect();
    var containerData = {
      x: containerRect.left,
      y: containerRect.top,
      height: containerRect.right - containerRect.left,
      width: containerRect.bottom - containerRect.top
    };
  

    var start = {
      x: containerData.x + containerData.width / 2,
      y: containerData.y + containerData.height / 2
    };
  
    var maxY = containerData.y + containerData.height + settings.distance;
    var minY = containerData.y - settings.distance;
  
    var maxX = containerData.x + containerData.width + settings.distance;
    var minX = containerData.x - settings.distance;
  
    var docFrag = document.createDocumentFragment();
  
    for (var i = 0; i < settings.numConfetti; i++) {
      let confetti = document.createElement("div");
      let color = getRandomArrayItem(settings.colors);
      let shape = getRandomArrayItem(settings.shapes);
      let size = getRandomInt(8, 4);
      let newX = getRandomInt(minX, maxX);
      let newY = getRandomInt(minY, maxY);
      confetti.className += "confetti " + color + " " + shape;
      confetti.style.top = start.y + "px";
      confetti.style.left = start.x + "px";
      confetti.style.height = size + "px";
      confetti.style.width = size + "px";
      confetti.style.transform = "rotate(" + getRotation() + "deg)";
      docFrag.appendChild(confetti);
  
      setTimeout(function() {
        confetti.style.transition = "all " + getRandomFloat(1.5, 0.5) + "s ease";
        confetti.style.top = newY + "px";
        confetti.style.left = newX + "px";
        confetti.style.transform = "rotate(" + getRotation() + "deg)";
  
        confetti.addEventListener("transitionend", function() {
          confetti.style.transition = "all " + getRandomFloat(1.25, 1) + " ease";
          confetti.style.opacity = 0;
          confetti.style.transform = "rotate(" + getRotation() + "deg)";
          confetti.style.top = parseInt(confetti.style.top) + 10 + "px";
          setTimeout(function() {
            confetti.remove();
            confetti = null;
          }, 1000);
        });
      }, 1);
    }
    document.body.appendChild(docFrag);
  }