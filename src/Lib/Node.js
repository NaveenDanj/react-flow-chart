class Node {

    constructor(data , type , next){
        this.next = next;
        this.data = data;
        this.nodeType = type; //oneway or twoway
    }

    getNextNode(){
        return this.next;
    }

    getNodeData(){
        return this.data;
    }

    setNextNode(node){
        this.next = node;
    }

}

export default Node;