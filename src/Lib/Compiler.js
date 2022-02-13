class Compiler {

    constructor(varList , dispatch , reducers){
        this.varList = varList;
        this.dispatch = dispatch;
        this.reducers = reducers;
        this.localState = [];
        // this.localState = cvarList.map(elem => {
        //     return Object.assign(elem, {id:2});
        // });

        for(let i = 0; i < varList.length; i++){
            this.localState.push({key : varList[i].key , name : varList[i].name , value : varList[i].value});
        }

    }

    compileCommands(commandList){

        for(let i = 0; i < commandList.length; i++){
            this.compileLine(commandList[i]);
        }

    }

    compileLine(codeBlock){

        console.log(codeBlock);

        let codeBlockArr = codeBlock.split('~');

        if(codeBlockArr[0] == 'start'){
            this.compileStart(codeBlockArr);
        }else if(codeBlockArr[0] == 'end'){
            this.compileEnd(codeBlockArr);
        }else if(codeBlockArr[0] == 'process'){
            this.compileProcess(codeBlockArr);
        }else if(codeBlockArr[0] == 'output'){
            this.compileOutput(codeBlockArr);
        }else if(codeBlockArr[0] == 'input'){
            this.compileInput(codeBlockArr);
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

        if(varValue.includes('#')){
            //includes a variable
            let re = /#(\S+)\b/g;
            let var_list = [];
            let m;
            let varValCopy = varValue;
            let exec_val;

            let exec_string = '';

            while ((m=re.exec(varValCopy)) !== null) {
                var_list.push(m[1]);  
            }

            console.log('var_list : ' , var_list);

            for(let i = 0; i < var_list.length; i++){
                let var_value = this._get_local_var_value(var_list[i]);
                let x1 = varValCopy.replaceAll(`#${var_list[i]}` , var_value);
                let x2 = x1.replaceAll(`#${var_list[i]}` , '');
                exec_string = x2;
            }
            
            console.log('the cleaned string is ' , this._add_op_to_execute_string('exec_val' , operator , exec_string));

        }else{

        }


        // this.dispatch( this.reducers.updateVar({varName , varValue}) );
        // this._set_local_state(varName , varValue);
    }

    compileOutput(codeBlockArr){
        console.log(codeBlockArr , this.varList);
        let diplayText = codeBlockArr[1];
        let varName = codeBlockArr[2];

        let output = {
            key : Date.now(),
            output : `${diplayText} ${this._get_local_var_value(varName)}`
        }
        this.dispatch( this.reducers.addOutput(output) );
    }


    compileInput(codeBlockArr){
        console.log(codeBlockArr);
        let varName = codeBlockArr[1].replaceAll("'" , "");
        let displayText = codeBlockArr[2];

        let inp = prompt(displayText);

        console.log('input is : ' , inp);
        
        this.dispatch( this.reducers.updateVar({varName : varName , varValue : inp}) );
        this._set_local_state(varName , inp);

    }


    _get_var_value(varName){

        for(let i = 0; i < this.varList.length; i++){
            if(this.varList[i].name === varName){
                return this.varList[i].value;
            }
        }


    }

    _set_local_state(varName , varValue){

        console.log('local state : ' , this.localState , varValue);

        for(let i = 0; i < this.localState.length; i++){
            if(this.localState[i].name === varName){
                this.localState[i].value = varValue;
                return;
            }
        }


    }

    _get_local_var_value(varName){

        for(let i = 0; i < this.localState.length; i++){
            if(this.localState[i].name === varName){
                return this.localState[i].value;
            }
        }

    }

    _add_op_to_execute_string(varName , op , string){
        return `${varName} ${op} ${string}`;
    }

}


export default Compiler;