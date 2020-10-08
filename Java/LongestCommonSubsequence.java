// https://leetcode.com/problems/longest-common-subsequence
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int[][] dp = new int[text1.length()][text2.length()];
        for(int[] d : dp)
            Arrays.fill(d, -1);
        return lcs(text1, text2, text1.length() - 1, text2.length() - 1, dp);
    }
    
    public int lcs(String t1, String t2, int i, int j, int[][] dp){
        if(i < 0 || j < 0) return 0;
        
        if(dp[i][j] == -1) {
            if(t1.charAt(i) == t2.charAt(j))
                dp[i][j] = lcs(t1, t2, i-1, j-1, dp) + 1;
            else
                dp[i][j] = Math.max(lcs(t1, t2, i-1, j, dp), lcs(t1, t2, i, j-1, dp));
        }
        return dp[i][j];
    }
}
