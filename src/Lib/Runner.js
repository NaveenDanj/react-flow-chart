class Runner{

    constructor(NodeList){
        this.NodeList = NodeList;
    }

    run(nextNode){

        if(nextNode.next == null){
            console.log('end of linked list!');
        }else{
            console.log('node value is ' , nextNode);
            let next = nextNode.next;
            this.run(next);
        }

    }

}