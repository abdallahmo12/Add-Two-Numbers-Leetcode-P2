function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let previuosNode = new ListNode();
    const headNode = previuosNode;
    while(l1 || l2 || carry){
        let v1 = 0;
        let v2 = 0;
        if(l1){
            v1 = l1.val;
            l1 = l1.next;
        }
        if(l2){
            v2 = l2.val;
            l2 = l2.next;
        }
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum/10);
        const digit = sum % 10;
        // console.log(`${v1}`);
        const currentNode = new ListNode(digit);
        previuosNode.next = currentNode;
        previuosNode = currentNode;
    }  
    return headNode.next;
  };
  console.log(addTwoNumbers([1,3,6],[4,2,2]));


