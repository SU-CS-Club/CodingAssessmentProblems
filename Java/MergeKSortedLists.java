/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 * 
 * LC: https://leetcode.com/problems/merge-k-sorted-lists/submissions/
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        Queue<ListNode> q = new PriorityQueue<>((a, b) -> a.val - b.val);
        for(ListNode node : lists){
            if(node != null)
                q.add(node);
        }
        ListNode head = new ListNode(0);
        ListNode point = head;
        while(!q.isEmpty()){
            ListNode node = q.poll();
            point.next = new ListNode(node.val);
            point = point.next;
            node = node.next;
            if(node != null)
                q.add(node);
        }
        return head.next;
    }
}
