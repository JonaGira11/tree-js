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
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root,found = false;
        while(current && !found ) {
            if(value < current.value){
              current = current.left;  
            }else if (value > current.value){
                current = current.right;
            }else {
                found = true 
            }
        }
        if(!found) return undefined;
        return current;
    }
    BFS(){
        const data = []
       let node = this.root
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        return data;
    }
}


//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)


console.log(tree.BFS())