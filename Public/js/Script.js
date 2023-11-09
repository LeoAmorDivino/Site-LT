/*Script que verifica se algum campo do formulario se encontra vazio*/
let botao = document.getElementById("bot")

botao.onclick =()=>{
  let camponome = document.getElementById("nome").value
  let campods = document.getElementById("dn").value
  let campocpf = document.getElementById("cpf").value
  let camporg = document.getElementById("rg").value
  let campotel = document.getElementById("telefone").value
  let campoemail = document.getElementById("email").value
  let campoend = document.getElementById("endereço").value
  let campodc = document.getElementById("dc").value
  let campohc = document.getElementById("hc").value
 
  if(camponome == ""){
    document.getElementById("res").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res").innerText= "Preenchido"
  }

  if(campods == ""){
    document.getElementById("res2").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res2").innerText= "Preenchido"
  }
  if(campocpf == ""){
    document.getElementById("res3").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res3").innerText= "Preenchido"
  }
  if(camporg == ""){
    document.getElementById("res4").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res4").innerText= "Preenchido"
  }
  if(campotel == ""){
    document.getElementById("res5").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res5").innerText= "Preenchido"
  }

  if(campoemail == ""){
    document.getElementById("res6").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res6").innerText= "Preenchido"
  }

  if(campoend == ""){
    document.getElementById("res7").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res7").innerText= "Preenchido"
  }

  if(campodc == ""){
    document.getElementById("res8").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res8").innerText= "Preenchido"
  }

  if(campohc == ""){
    document.getElementById("res9").innerText= "*Preencha este campo"
  
  }else{
    document.getElementById("res9").innerText= "Preenchido"
  }
}