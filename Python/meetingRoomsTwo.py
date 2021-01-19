# https://leetcode.com/problems/meeting-rooms-ii/

# space: O(n), time: O(nlogn)
import heapq


def minMeetingRooms(intervals: list[list[int]]) -> int:
    if len(intervals) == 1:
        return 1
    answer = 1
    sorted_intervals = sorted(intervals, key=lambda x: x[0])
    # add the first interval's end time to the heap
    end_times_min_heap = [sorted_intervals[0][1]]
    for interval in sorted_intervals[1:]:
        min_end_time = heapq.nsmallest(1, end_times_min_heap)[0]
        if interval[0] < min_end_time:
            heapq.heappush(end_times_min_heap, interval[1])
            answer += 1
        else:
            heapq.heapreplace(end_times_min_heap, interval[1])
    return answer