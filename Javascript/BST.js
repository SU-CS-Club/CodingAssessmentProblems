// first I'm going to redo the binary search tree algorithm for sorted arrays
/**
 * 
 * @param {Sorted Array} arr 
 * @param {value we're searching for} searchFor 
 * @param {left Index} left 
 * @param {Right Index} right 
 */
const bst = (arr, searchFor, left=0, right=arr.length -1)=>{
    // javascript lets us assign left and right in the event no parameter is passed
    if(left > right){
        return false;
    }

    const mid = Math.floor((left + right) / 2) // int division will take the floor of this expression (ex. 5 / 2 = 2) - forcing this in javascript

    if(arr[mid] === searchFor){
        return true;
    }
    else if(searchFor < arr[mid]){
        // search left
        return bst(arr, searchFor, left, mid -1)
    } else {
        // search th right
        return bst(arr, searchFor, mid + 1, right)
        
    }

}

function iterativeBinarySearch(n, arr) {
    let start = 0;
    let end = arr.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === n) {
        return true;
      } else if (arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }

// create test array
test = [1, 4, 5, 2, 1, 6, 564, 23, 12, 43, 2343, 21, 1232, 8]

test.sort((a, b)=> a-b) // sort asc

if(bst(test, 23)){
    console.log("23 was found")
}
if(!bst(test, 0)){
    console.log("0 was not found")
}

if(iterativeBinarySearch(test, 23)){
    console.log("23 was found")
}
if(!iterativeBinarySearch(test, 0)){
    console.log("0 was not found")
}


// now lets loook at a BST problem
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ - leetcode 235

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.



Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Constraints:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.


 */
/**
 * 
 * @param {Val} val 
 */
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }
 /**
  * What we're doing here is looking for the lowest root node that contains both p and q
  * @param {Root tree node} root 
  * @param {Child} p 
  * @param {Child} q 
  */
 const lowestCommonAncestor = (root, p, q)=>{
     // if both the children are left of the current root then traverse to the left
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q)
    } 
    // if both p and q are greater than current root then traverse to the right
    else if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q)
    } else { // else p and q are on both sides of the current root and we're at the correct node 
        return root;
    }

 }