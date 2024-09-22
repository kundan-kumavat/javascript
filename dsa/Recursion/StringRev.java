class StringRev{
    public static void printRev(String str, int idx){
        if(idx == 0){
            System.out.print(str.charAt(idx));
            return;
        }

        System.out.print(str.charAt(idx));
        printRev(str, idx-1);

    }

    //function to remove first and last occurance of an element
    public static int firstOccurance = -1;
    public static int lastOccurance = -1;
    public static void findOccurance(String str, char element, int idx){
        if(str.length() == 0){
            System.out.println('Enter valid string');
            return;
        }
        if(idx == str.length()){
            System.out.println('First occurance: ' + firstOccurance + 'last occrance' + lastOccurance);
            return;
        }
        char currChar = str.charAt(idx);
        if(currChar == element){
            if(firstOccurance == -1){
                firstOccurance = idx;
            }
            else{
                lastOccurance = idx;
            }
        } 
        findOccurance(String str, char element, idx + 1);
    }

    // move all x to the end of string
    public static void moveToEnd(String str, int count, String newStr,  int idx){
        if(idx == str.length()){
            for(int i =0; i< count; i++){
                newStr += 'x';
            }
            System.out.println(newStr);
            return;
        }

        Char currChar = str.charAt(idx);
        if(currChar == 'x'){
            count++;
            moveToEnd(str, count, newStr, idx+1);
        }else{
            newStr += currChar;
            moveToEnd(str, count, newStr, idx+1);
        }
    };
    
    public static void main(String[] args){
        String str = 'abcd';
        printRev(str, str.length()-1);
        findOccurance(str, 'c', 0);
    }
}