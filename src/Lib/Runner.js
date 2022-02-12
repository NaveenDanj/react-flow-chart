class Runner{

    constructor(NodeList){
        this.NodeList = NodeList;
        this.commandList = [];
    }



    run(nextNode){

        console.log(nextNode);

        this.commandList.push(nextNode.codeBlock);

        if(nextNode.next == null){
            console.log('end of linked list!');
        }else{
            let next = nextNode.next;
            this.run(next);
        }

        this.compiler();

    }

    compiler(){
        console.log('the command list is ' , this.commandList);
    }

}

export default Runner;