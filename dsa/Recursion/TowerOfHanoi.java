class TowerOfHanoi{
    public static void Process(int n, String src, String helper, String dest){
        if(n==1){
            System.out.println('Disk:'+ n + 'is transferd from' + src "to" + dest);
            return;
        }

        Process(n-1, src, dest, helper);
        System.out.println('Disk:'+ n + 'is transferd from' + src "to" + dest);
        Process(n-1, helper, dest,src);
    }
}