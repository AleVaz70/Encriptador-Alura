

function encriptar() {

    var texto = document.getElementById('ingresarTexto').value.toLowerCase();

if (texto === '') {
        document.getElementById('no-mensaje').style.display = 'block';
        document.getElementById('solucion').style.display = 'none';   
        return;
    }

    var txtCifrado = texto.replace(/e/igm,'enter');
    var txtCifrado = txtCifrado.replace(/o/igm,'ober');
    var txtCifrado = txtCifrado.replace(/i/igm,'imes');
    var txtCifrado = txtCifrado.replace(/a/igm,'ai');
    var txtCifrado = txtCifrado.replace(/u/igm,'ufat');

    document.getElementById('munie').style.display = 'none';
    document.getElementById('no-mensaje').style.display = 'none';
    document.getElementById('solucion').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';
}

function desencriptar() {
    var texto = document.getElementById('ingresarTexto').value.toLowerCase();
    
    if (texto === '') {
        document.getElementById('no-mensaje').style.display = 'block';
        document.getElementById('solucion').style.display = 'none';   
        return;
    }
    
    var txtCifrado = texto.replace(/enter/igm,'e');
    var txtCifrado = txtCifrado.replace(/ober/igm,'o');
    var txtCifrado = txtCifrado.replace(/imes/igm,'i');
    var txtCifrado = txtCifrado.replace(/ai/igm,'a');
    var txtCifrado = txtCifrado.replace(/ufat/igm,'u');

    document.getElementById('munie').style.display = 'none';
    document.getElementById('solucion').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';
    document.getElementById('no-mensaje').style.display ='none';
}

   

function copy() {
    
    var resultado = document.querySelector('#solucion');
    navigator.clipboard.writeText(resultado.innerHTML)
  .then(() => {
    alert('Texto copiado al portapapeles');
   } )}

//Para acceder al historial del Portapapeles en cualquier momento, 
//presiona la tecla del logotipo de Windows + V.
