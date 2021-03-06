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
            this.localState.push({key : varList[i].key , name : varList[i].name , value : varList[i].value , dataType : varList[i].dataType});
        }

    }

    compileCommands(commandList){

        for(let i = 0; i < commandList.length; i++){
            this.compileLine(commandList[i]);
        }

    }

    compileLine(codeBlock){

        console.log(" split undefined " , codeBlock);

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

    executeAndGet(codeBlock){

        let codeBlockArr = codeBlock.split('~');

        if(codeBlockArr[0] == 'if'){
            this.compileAndGetIf(codeBlockArr);
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
            let exec_val = null;
            let exec_string = '';

            while ((m=re.exec(varValCopy)) !== null) {
                var_list.push(m[1]);  
            }

            console.log('var_list : ' , var_list);

            for(let i = 0; i < var_list.length; i++){
                let var_value = this._get_local_var_value(var_list[i]);
                varValCopy = varValCopy.replaceAll(`#${var_list[i]}` , var_value);
                varValCopy = varValCopy.replaceAll(`#${var_list[i]}` , '');
            }

            exec_string += varValCopy;
            
            exec_string =  this._add_op_to_execute_string('exec_val' , operator , exec_string);

            console.log('exec string : ' , exec_string);

            let var_val_before = this._get_local_var_value(varName);

            exec_val = var_val_before;
            eval(exec_string);

            console.log('exec val : ' , exec_val);

            this.dispatch( this.reducers.updateVar({varName : varName , varValue:exec_val}) );
            this._set_local_state(varName , exec_val);

        }else{
            let exec_string = this._add_op_to_execute_string("exec_val" , operator , varValue);
            let var_val_before = this._get_local_var_value(varName);
            let exec_val = var_val_before;
            eval(exec_string);
            console.log('exec string : ' , exec_val);

            this.dispatch( this.reducers.updateVar({varName : varName , varValue:exec_val}) );
            this._set_local_state(varName , exec_val);


        }

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
        let varObject = this._get_local_var_object(varName);
        let displayText = codeBlockArr[2];

        console.log('varObject : ' , varObject);

        let inp = prompt(displayText);

        if(varObject.dataType == 'number'){

            let varValue = +inp;
            this.dispatch( this.reducers.updateVar({varName : varName , varValue:varValue}) );
            this._set_local_state(varName , varValue);
            console.log('number val')

        }else if(varObject.dataType == 'string'){

            let varValue = inp;
            this.dispatch( this.reducers.updateVar({varName : varName , varValue:varValue}) );
            this._set_local_state(varName , varValue);
            console.log('string val')

        }else if(varObject.dataType == 'boolean'){

            let varValue = inp === 'true';
            this.dispatch( this.reducers.updateVar({varName : varName , varValue:varValue}) );
            this._set_local_state(varName , varValue);
            console.log('boolean val')

        }

        console.log('end of input');

    }


    compileAndGetIf(codeBlockArr){

        let condition = codeBlockArr[1];

        if(condition.includes('#')){
            //includes a variable
            let re = /#(\S+)\b/g;
            let var_list = [];
            let m;
            let conditionValCopy = condition;
            let exec_val = null;
            let exec_string = '';

            while ((m=re.exec(conditionValCopy)) !== null) {
                var_list.push(m[1]);  
            }

            console.log('var_list : ' , var_list);

            for(let i = 0; i < var_list.length; i++){
                let var_value = this._get_local_var_value(var_list[i]);
                conditionValCopy = conditionValCopy.replaceAll(`#${var_list[i]}` , var_value);
                conditionValCopy = conditionValCopy.replaceAll(`#${var_list[i]}` , '');
            }

            exec_string += conditionValCopy;
            
            // exec_string =  this._add_op_to_execute_string('exec_val' , operator , exec_string);
            
            eval("exec_val = " + exec_string);
            return exec_val;

            // let var_val_before = this._get_local_var_value(varName);

            // exec_val = var_val_before;
            // eval(exec_string);

            // console.log('exec val : ' , exec_val);

            // this.dispatch( this.reducers.updateVar({varName : varName , varValue:exec_val}) );
            // this._set_local_state(varName , exec_val);

        }else{
            // let exec_string = this._add_op_to_execute_string("exec_val" , operator , varValue);
            // let var_val_before = this._get_local_var_value(varName);
            // let exec_val = var_val_before;
            // eval(exec_string);

        }

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

    _get_local_var_object(varName){
        for(let i = 0; i < this.localState.length; i++){
            if(this.localState[i].name === varName){
                return this.localState[i];
            }
        }
    }

    _add_op_to_execute_string(varName , op , string){
        return `${varName} ${op} ${string}`;
    }

}


export default Compiler;