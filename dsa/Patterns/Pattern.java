// Solid rectangle
class Pattern{
    public static void soildRectangle(int m, int n){
        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                System.out.print('*');
            }
            System.out.println();
        }
    }

    public static void holeyRectangle(int m, int n){
        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                if(i == 1 || i == m || j == 1 || j == n){
                    System.out.print('*');
                } else{
                    System.out.print(' ');
                }
            }
            System.out.println();
        }
    }

    public static void ascendingTraingle(int m){
        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= i; j++){
                System.out.print('*');
            }
            System.out.println();
        }
    }

    public static void ascendingTraingle1(int m){
        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= m-i; j++){
                System.out.print(' ');
            }
            for(int j = 1; j<= i; j++){
                System.out.print(' ');
            }
            System.out.println();
        }
    }

    public static void ascendingTraingle2(int m){
        for(int i = 1; i <= m; i++){
            for(int j=1; j <= i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    public static void ascendingTraingle3(int m){
        int num = 1;
        for(int i = 1; i <= m; i++){
            for(int j=1; j <= i; j++){
                System.out.print(j + " ");
                num = num + 1;
            }
            System.out.println();
        }
    }

    public static void ascendingTraingle4(int m){
        for(int i = 1; i <= m; i++){
            for(int j=1; j <= i; j++){
                int sum = i+j;
                if(sum % 2 == 0){
                    System.out.print('1');
                }else{
                    System.out.print('0');
                }
            }
            System.out.println();
        }
    }

    public static void descendingTraingle2(int m){
        for(int i = m; i >= 1; i--){
            for(int j = 1; j <= i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    public static void descendingTraingle(int m){
        for(int i = m; i >= 1; i--){
            for(int j = 1; j <= i; j++){
                System.out.print('*');
            }
            System.out.println();
        }
    }
    public static void main(String[] args){

    }
}