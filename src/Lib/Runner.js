class Runner{

    constructor(NodeList){
        this.NodeList = NodeList;
    }

    run(nextNode){

        console.log(nextNode);

        if(nextNode.next == null){
            console.log('end of linked list!');
        }else{
            let next = nextNode.next;
            this.run(next);
        }

    }

}

export default Runner;