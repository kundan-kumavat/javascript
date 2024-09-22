// Print number from 5 to 1
class Problem1{
    public static void printNumb(int n){
        if(n==0){
            return;
        }
        System.out.print(n);
        printNumb(n-1);
    }

    public static void printSum(int i,int n, int sum){
        if(i==n){
            sum += i;
            System.out.print(sum);
        }

        sum += i;
        printSum(i+1, n, sum);
    }

    public static int calcFactorial(int n){
        if(n==0 || n== 1){
            return 1;
        }
        fact = n * calcFactorial(n-1);
        return fact;
    }
}

