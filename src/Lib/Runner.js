import Compiler from "./Compiler";
class Runner{

    constructor(NodeList  , varList , dispatch , reducers){
        this.NodeList = NodeList;
        this.varList = varList;
        this.commandList = [];
        this.compiler = new Compiler(varList , dispatch , reducers);
    }



    run(nextNode){

        console.log('next node is ' , nextNode);

        this.commandList.push(nextNode.codeBlock);

        if(nextNode.next == null){
            console.log('end of linked list!');
            // this.compiler.compileCommands(this.commandList);
        }else{

            if(nextNode.next.type === 'If'){
                console.log('detected if node!' , nextNode.next);
                let nodeCodeBlockArr = nextNode.next.codeBlock.split('~');
                let conditionResult = this.compiler.compileAndGetIf(nodeCodeBlockArr);

                if(conditionResult){
                    console.log('condition is true!');
                    nextNode.next = nextNode.next.additionalData.trueNode;
                    console.log('if next node ' , nextNode.next);

                }else{
                    console.log('condition is false!');
                    nextNode.next = nextNode.next.additionalData.falseNode;
                    console.log('if next node ' , nextNode.next);
                }


            }else{
                this.compiler.compileLine(nextNode.next.codeBlock);
            }

            let next = nextNode.next;
            this.run(next);
        }


    }

}

export default Runner;