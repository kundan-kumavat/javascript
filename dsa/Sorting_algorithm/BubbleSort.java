class BubbleSort{
    public static void Algo(int[] arr){
        if(arr.length == 0){
            return;
        }

        for(int i = 0; i< arr.length - 1; i++){
            for(int j = 0; j< arr.length - i -1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String[] args){
        int[] arr = {7, 8, 3, 1, 2};

    }
};

// Complexity is O(n^2)