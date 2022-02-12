import Compiler from "./Compiler";
class Runner{

    constructor(NodeList , varList , dispatch , reducers){
        this.NodeList = NodeList;
        this.varList = varList;
        this.commandList = [];
        this.compiler = new Compiler(varList , dispatch , reducers);
    }



    run(nextNode){

        console.log(nextNode);

        this.commandList.push(nextNode.codeBlock);

        if(nextNode.next == null){
            console.log('end of linked list!');
            this.compiler.compileCommands(this.commandList);
        }else{
            let next = nextNode.next;
            this.run(next);
        }


    }

}

export default Runner;