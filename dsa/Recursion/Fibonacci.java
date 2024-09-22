class Fibonacci{
    public static void FibSeries(int a, int b, int n){
        if(n==0){
            return ;
        }
        int c = a + b;
        System.out.print(c);
        FibSeries(b, c, n-1);
    }

    public static void(String[] args){
        int n = 7;
        int a= 0, b= 1;
        System.out.print(a);
        System.out.print(b);
        FibSeries(a, b, n);
    }
}