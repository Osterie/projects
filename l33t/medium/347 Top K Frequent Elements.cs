
using System;
using System.IO.Pipes;
using System.Xml.Linq;

public class Solution
{
    public int[] TopKFrequent(int[] nums, int k)
    {
        int[] unique_nums = nums.Distinct().ToArray();
        int[] frequency_array = Enumerable.Repeat(0, unique_nums.Length).ToArray();

        for (int j = 0; j < nums.Length; j++)
        {
            var index = Array.IndexOf(unique_nums, nums[j]);
            frequency_array[index] += 1;
        }

        int[] most_frequent_indexes = GetIndexesKMostFrequentElemets(frequency_array, k);
        
        int[] ans = new int[most_frequent_indexes.Length];

        for (int i = 0; i < most_frequent_indexes.Length; i++)
        {
            ans[i] = unique_nums[most_frequent_indexes[i]];
        }
        return ans;
    }



    public int[] GetIndexesKMostFrequentElemets(int[] nums, int k)
    {

        int[] most_frequent_indexes = new int[k];

        for (int i = 0; i < k; i++)
        {
            int max = -1000000000;

            for (int j = 0; j < nums.Length; j++)
            {
                if (nums[j] > max)
                {
                    max = nums[j];
                }
            }
            int index = Array.IndexOf(nums, max);

            most_frequent_indexes[i] = index;
            nums[index] = 0;
        }
        return most_frequent_indexes;
    }

}


