## Introduction to Java Language
```java
System.out.println('Welcome Java')
```

## WHat is Java?
- Java is an object-oriented language
- Java is also used in mobile app development
- Java is Immportable langugage :- which means JDK convert java code into Byte Code.class which can be runned on any OS
- Java is statically-typed language :- which means we need to specifty the type of the variable

## Setup
1. Install Java Development Kit(JDK)
2. Install Any Code Editor(eg. VScode)
3. Install Java Extension in Code Editor
4. Write code and run the code

## Data Types in Java
1. Primitive Data Type 
- byte :- 1byte
- short
- char :- 2byte
- boolean :- 1btye
- int :- 4byte
- long :- 8byte
- float :- 4btye
- double :- 8btye

2. Non-primitive Data Type
- String
- Array
- Class
- Object
- Interface

## Priority of Operators
// * / % + -

## Components in Java
1. Functions
```java
void main(){
    // Code to perform a specific task
}
```
- main functions will always be executed first

2. Class Component
```java
//class name should be same as file name
class Example{
    public static void main(Strings[] args){
        //Code to executed
    }
}
```
- It stores various functions

## code to take inputs from user
-Scanner object is used to take user input
```java
//Library to import Scanner class
import java.util.*;

class Example{
    public static void main(Strings[] args){
        Scanner sc = new Scanner(System.in);

        // It take only one word as input
        String name = sc.next();

        // It takes the whole string line as input
        String name = sc.nextLine();

        // It takes Integer as input
        Int num = sc.nextInt();

        //It takes FLoat as input
        float num = sc.nextFloat();
    }
}
```