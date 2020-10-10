// https://leetcode.com/problems/lru-cache/
// Design a data structure that follows the constraints fo a Least Recently Used Cache

class LRU_Cache {
    constructor(cap){
        this.cap = cap;
        this.head = null;
        this.tail = null;
        this.map = new Map();
    }
    /**
     * returns value or -1 if key not found
     * @param {number} key 
     */
    get = (key)=>{
        if(this.map.get(key) == null){ // if we don't have key, return -1
            return -1;
        }
        const t = this.map.get(key); // since we have the key, lets set t = the key/value node
        this.removeNode(t); // then remove and replace it as the most recently accessed node
        this.offerNode(t);
        return t.value;
    }
    /**
     * receives key/value, if key already exist updates value to passed value
     * if key doesn't exist adds key/value, if size exceeds capacity removes the least access unit
     * @param {number} key 
     * @param {number} value 
     */
    put = (key, value)=>{
        // first lets check if we already have the key
        if(this.map.has(key)){
            const t = this.map.get(key) // grab t
            t.value = value; // updates its value
            this.removeNode(t); // then update order since its the most recently touched node
            this.offerNode(t);
        } else {
            if(this.map.size >= this.cap){
                //since we're adding to the end, we want to remove the head
                this.map.delete(this.head.key);
                this.removeNode(this.head); // now we've removed it from the head within this class and our map
            }
            const node = new Node(key, value);
            this.offerNode(node);
            this.map.set(key, node) // we know it's not in the map and we've added the node the tail as the most recently touched node
        }

    }
    /**
     * remove current node and check if it is head/tail and adjust accordingly
     * @param {Node} node 
     */
    removeNode = (node)=>{
        if(node.prev != null){ // if there's a node before this node
            node.prev.next = node.next // bypass current node in link
        } else {
            this.head = node.next; // else this node is the current head so bypass this node from the head
        }
        if(node.next != null){
            node.next.prev = node.prev; // bypass current node in link
        } else {
            this.tail = node.prev
        }
    }
    /**
     * take passed node and add it to tail - tail is most recently accessed node
     * @param {Node} node 
     */
    offerNode = (node)=>{
        if(this.tail != null){
            this.tail.next = node;
        } 
        node.prev = this.tail;
        node.next = null;
        this.tail =  node;
        if (this.head == null){
            this.head = this.tail;
        }
    }

}

class Node{ // doubly linked list
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

myCache = new LRU_Cache(5)
console.log(myCache.get(2)) // should return -1 since nothing has been added
myCache.put(0, 1)
console.log(myCache.get(0))
myCache.put(0, 3)
console.log(myCache.get(0)) // should return 3 now
for(let i = 0; i < 8; i++){
    myCache.put(i, i+1)
}
for(let i = 0; i < 5; i++){
    console.log(myCache.get(i))
}
// the first three values were replaced as a result of the cap and there for we only return 4 then 5 which were the most recently added
