class Node {

    constructor(data , type , next){
        this.next = next;
        this.data = data;
        this.nodeType = type; //oneway or twoway
        this.codeBlock = null;
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

    setCodeBlock(codeBlock){
        this.codeBlock = codeBlock;
    }

}

export default Node;