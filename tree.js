class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null; 

    }
    inser(value){
        let newNode = new Node(value)
        if(this.root = newNode){
            this.root === null;
            return this;
        }else {
            let current = this.root;
            while(true){
                if(value < current.value){
                
                    if(current.left === null){
                        current.left === newNode;
                        return this;
                    } 
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15)
tree.root.left = new Node(7);
tree.root.right.left = new Node(9);

//    10 
// 5 13 
// 2 7

console.log(tree)