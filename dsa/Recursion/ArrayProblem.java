class ArrayProblem{
    public static boolean isSorrted(int[] arr, int idx){
        if(idx == arr.length -1){
            return true;
        }

        if(arr[idx] < arr[idex + 1]){
            isSorrted(arr, idx + 1);
        } else{
            return false;
        }
    }
}