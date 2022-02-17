class Node {

    constructor(data , type , nodeBlockType , next){
        this.next = next;
        this.data = data;
        this.nodeType = type; //oneway or twoway
        this.codeBlock = null;
        this.type = nodeBlockType;
        this.additionalData = {};
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