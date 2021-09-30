function limpar(){
    document.frm_login.txt_usuario.value = "";
    document.frm_login.txt_senha.value = "";
    document.frm_login.txt_usuario.focus();
}

function logar(){

    let usuario = document.frm_login.txt_usuario.value;
    let email = document.frm_login.txt_usuario.value;
    let senha = document.frm_login.txt_senha.value;

    if((usuario == "fatec" || email == "fatec@sp.gov.br") && senha == '1234'){
        alert("Login feito com Sucesso!!");
        window.location = "paginaInicial.html";
    }else if(usuario == "" || email == "" || senha == ""){
        alert("Preencha todos os Campos!!!");
    }else{
        alert("Conta Invalida!!");
        limpar();
    }
    

}

function limparAmi(){
    document.frm_indiqueAmigo.txt_cpf.value = "";
    document.frm_indiqueAmigo.txt_nome.value = "";
    document.frm_indiqueAmigo.txt_endereco.value = "";
    document.frm_indiqueAmigo.sexo.value = "";
    document.frm_indiqueAmigo.txt_email.value = "";
    document.frm_indiqueAmigo.txt_nome.value = "";
    document.frm_indiqueAmigo.genero.value = "";
    document.frm_indiqueAmigo.txt_cpf.focus();
}

function enviar(){
    
    let cpf = document.frm_indiqueAmigo.txt_cpf.value;
    let nome = document.frm_indiqueAmigo.txt_nome.value;
    let endereco = document.frm_indiqueAmigo.txt_endereco.value;
    let sexo = document.frm_indiqueAmigo.sexo.value;
    let cidade = document.frm_indiqueAmigo.cidade.value;
    let email = document.frm_indiqueAmigo.txt_email.value;
    let genero = document.frm_indiqueAmigo.genero.value;

    if(cpf == "" || nome == "" || endereco == "" || email == ""){
        alert("Campos Vázios, preencha todos!!!");
    }else{
        alert("Amigo Indicado, obrigado pela Coperação!!!");
        limparAmi();

        if(confirm("Deseja Indicar mais um Amigo?")){
            limparAmi();
        }else{
           alert("Obrigado!!");
        }
    }

}