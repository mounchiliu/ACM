class Solution {
public:
    /**
     * @param s: A string
     * @param k: An integer
     * @return: An integer
     */
    int lengthOfLongestSubstringKDistinct(string &s, int k) {
        int distinct = 0;
        int lo = 0;
        int max_len = 0;
        vector<int> count(256, 0);
        for (int hi = 0; hi < s.length(); hi++) {
            if (count[s.at(hi)] == 0) {
                distinct++;
            }
            count[s.at(hi)]++;
            
            while (distinct > k) {
                count[s.at(lo)]--;
                if (count[s.at(lo)] == 0) {
                    distinct--;
                }
                lo++;
            }
            max_len = max(max_len, hi - lo + 1);
        }
        return max_len;
    }
};
