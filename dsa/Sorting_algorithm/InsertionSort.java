class InsertionSort{

    public static void Algo(int[] arr){
        for(int i=1; i<arr.length; i++){
            int currentElem = arr[i];
            int j = j -1;
            while(j >= 0 && currentElem < arr[j]){
                arr[j+1] = arr[j];
                j--;
            }

            arr[j+1] = currentElem;
        }
    }
    public static void main(String[] args){

    }
}