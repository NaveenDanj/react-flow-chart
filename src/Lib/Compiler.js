class Compiler {

    constructor(varList , dispatch , reducers){
        this.varList = varList;
        this.dispatch = dispatch;
        this.reducers = reducers;
    }

    compileCommands(commandList){

        for(let i = 0; i < commandList.length; i++){
            this.compileLine(commandList[i]);
        }

    }

    compileLine(codeBlock){

        let codeBlockArr = codeBlock.split('-');

        if(codeBlockArr[0] == 'start'){
            this.compileStart(codeBlockArr);
        }else if(codeBlockArr[0] == 'end'){
            this.compileEnd(codeBlockArr);
        }else if(codeBlockArr[0] == 'process'){
            this.compileProcess(codeBlockArr);
        }

    }



    //compiler methods
    compileStart(codeBlockArr){
        return
    }

    compileEnd(codeBlockArr){
        return
    }   

    compileProcess(codeBlockArr){
        console.log(codeBlockArr);
        let varName = codeBlockArr[1];
        let operator = codeBlockArr[2];
        let varValue = codeBlockArr[3];

        let intialVarValue = this._get_var_value(varName);
        console.log('initial var value is : ' , intialVarValue);
        this.dispatch( this.reducers.updateVar({varName , varValue}) );
    }

    _get_var_value(varName){

        for(let i = 0; i < this.varList.length; i++){
            if(this.varList[i].name === varName){
                return this.varList[i].value;
            }
        }


    }


}


export default Compiler;