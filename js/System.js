class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(enteredCode,300,300)
        //adicionar código para return true se a resposta correta for inserida.
        if (actualCode === enteredCode){
            return true
        }
        
    }

}