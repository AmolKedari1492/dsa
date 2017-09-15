exports.Node = function (data)  {
  this.data = data;
  this.parent = null;
  this.child = [];

  this.add = function(childNodeData) {
    var childNode = new Node();
    childNode.data = childNodeData.data;
    childNode.parent = this.data;
    this.child.push(childNode);
    console.log(childNode);
  }

  this.remove = function(childNode) {
    for(var i = 0; i < this.node.child.length; i++) {
      child = this.node.child[i];
      if(child.data == childNode) {
        this.node.child.splice(i, 1);
      }
    }
  }

  this.print = function() {
    console.log('Root : ', this.data);
    var child;
    for(var i = 0; i < this.child.length; i++) {
      child = this.child[i];
      console.log('Child : ', child, child.child.length);
      if(child.child.length) {
        // var childNode = child.node;
        // console.log('has a child : ', child.data);
        // childNode.print();
      } else {
        // console.log('No Child : ', child.data);
      }
    }
  }
}

var Node = require('./link-list').Node;

var pricipleNode = new Node('Principle');
var facNode = new Node('Fac');
var hodNode = new Node('HOD');
var profNode = new Node('Prof');
var asstNode = new Node('Asst');
var tempNode = new Node('Temp');
var permNode = new Node('Perm');

facNode.add(tempNode);
facNode.add(permNode);
pricipleNode.add(hodNode);
pricipleNode.add(facNode);
// pricipleNode.add(profNode);
// pricipleNode.add(asstNode);
pricipleNode.print();
