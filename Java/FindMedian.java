// https://leetcode.com/problems/find-median-from-data-stream/submissions/
/**
 * My first thoughts were to have sorted list and just grab the two center elements on findMedian
 * but then at every add function there would be a log(n) hit for placement
 * So the idea of min/max heaps applied, by having two heaps (one max, one min) 
 * Each element is first added to the minHeap then the minimum element is popped out and offered to the maxHeap
 * This assures all elements in minheap are greater than maxheap
 * finally the two heaps are balanced
 * as a result the median when the heaps don't contain the same number of values is just the top of minHeap
 * if they have the same size then we peek the min and max heap and divide by 2
 * 
 */
package Java;

import java.util.Comparator;
import java.util.PriorityQueue;

class MedianFinder {
    PriorityQueue<Integer> minHeap = null;
    PriorityQueue<Integer> maxHeap = null;
    
    /** initialize your data structure here. */
    public MedianFinder() {
       minHeap = new PriorityQueue<>(); // set minHeap to priority queue
       maxHeap = new PriorityQueue<>(Comparator.reverseOrder()); // set maxHeap to same queue in reverse
    }
    
    public void addNum(int num) {
        minHeap.offer(num); // offer the current num
        maxHeap.offer(minHeap.poll()); // then pop the min value and place on maxheap

        if(minHeap.size() < maxHeap.size()){ // load balance between the two heaps
            minHeap.offer(maxHeap.poll());
        }
    }
    
    public double findMedian() { // return either minheap or minheap + maxheap / 2
        if(minHeap.size() > maxHeap.size()){
            return minHeap.peek();
        } else {
            return (minHeap.peek() + maxHeap.peek()) / 2.0;
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */