class TreeNode {
  constructor(data) {
    this.value = data;
    this.left = null; // type: TreeNode
    this.right = null;
  }
}

function preOrderTraverse(root){
  if(root.value === null) {
    return;
  }

  console.log(root.value);
  preOrderTraverse(root.left);
  preOrderTraverse(root.right);
} 

function postOrderTraverse(root) {
  if(root.value === null) {
    return;
  }

  postOrderTraverse(root.left);
  postOrderTraverse(root.right);
  console.log(root.value);
}

function inOrderTraverse(root) {
  if(root.value === null) {
    return;
  }

  inOrderTraverse(root.left);
  console.log(root.value);
  inOrderTraverse(root.right);
}

