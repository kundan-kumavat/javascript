class SelectionSort{
    public static void Algo(int[] arr){
        if(arr.length == 0){
            return;
        }

        for(int i=0; i<arr.length - 1; i++){
            int smallest = i;
            for(int j=i+1; j<arr.length; j++){
                if(arr[smallest] > arr[j]){
                    smallest = j;
                }
            }
            int temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
    }
    public static void main(String[] args){

    }
}