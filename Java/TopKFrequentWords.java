// https://leetcode.com/problems/top-k-frequent-words/submissions/
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String, Integer> freq = new HashMap<>();
        for(String word : words){
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        List<Map.Entry<String, Integer>> entries = new ArrayList<>(freq.entrySet());
        Collections.sort(entries, (a, b) -> {
            int i = b.getValue().compareTo(a.getValue());
            if(i == 0)
                return a.getKey().compareTo(b.getKey());
            return i;
        });
        List<String> result = new LinkedList<>();
        int c = 0;
        for(Map.Entry<String, Integer> entry : entries){
            if(++c > k)
                break;
            result.add(entry.getKey());
        }
        return result;
    }
}
