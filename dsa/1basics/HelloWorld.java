
import java.util.*;

public class HelloWorld {

    // logging in same in java
    public static void main1(String[] args) {
        System.out.print("Hello, World!");
        System.out.print(" Hello, World!");
        // Hello, World! Hello, World!
    }

    // logging in next line
    public static void main2(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Hello, World!");
        // Hello, World!
        // Hello, World!
    }

    // Print start like this :
    // *
    // **
    // ***
    public static void main3(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // variable declaration
    public static void main4(String[] args) {
        String name = "Deepak";
        int age = 23;
        char gender = 'M';
        float height = 5.8f;
        double weight = 75.5;
        boolean isMarried = false;
        long phoneNumber = 1234567890;
        short pinCode = 12345;
        byte ageInMonths = 24;

        // we can change the value of these variables

        System.out.println(
                name + " is " + age + " years old, " + gender + ", " + height + " cm, " + weight + " kg, " + isMarried
                        + ", " + phoneNumber + ", " + pinCode + ", " + ageInMonths);
    }

    // accpect input from user
    public static void main5(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Enter your age: ");
        int age = sc.nextInt();
        System.out.print(name + " " + age);
    }

    // for loop
    public static void main6(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }

    // while loop
    public static void main7(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println(i);
            i++;
        }
    }

    // do while loop
    public static void main8(String[] args) {
        int i = 1;
        do {
            System.out.println(i);
            i++;
        } while (i <= 5);
    }

}
