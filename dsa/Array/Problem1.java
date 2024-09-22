// Find largest number in an Array
import java.util.*;

public class Problem1{

    // Recursive way
    static int findLargestNumber(int[] arr){
        if(arr.length === 0){
            return 0;
        }
        int max = arr[0];
        for(int i=0; i< arr.length; i++){
            if(arr[i] >= max){
                max = arr[i];
            }
        }
        return max;
    }

    // Brute Force approch
    static int findLargestNumber(int[] arr){
        Arrays.sort(arr);
        return arr[arr.length - 1];
    }

    // Check if an array is sorted or not
    public static boolean isSorred(int[] arr){
        if(arr.length == 0){
            return true;
        }

        int i = 0;
        while(i < arr.length){
            if(arr[i]< arr[i+1]){
                i++;
            }else{
                return false;
            }
        }
    }

    public static void main(String[] args){
        int[] arr = {6, 7. 1, 4, 2};
        int max = findLargestNumber(arr);
        System.out.println("Largest number is: " + max);
    }
}