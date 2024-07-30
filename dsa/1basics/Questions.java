import java.util.*;

public class Questions {

    // average
    public static void main1(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();
        int o = sc.nextInt();

        int average = (n + m + o) / 3;
        System.out.println(average);
    }

    public static void main2(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    }

    public static void main3(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();

        System.out.println(Math.max(n, m));
    }

    public static void main4(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        System.out.println(2 * Math.PI * n);
    }

    public static void main5(String[] args) {
        do {
            System.out.println("Hello World");
        } while (true);

    }

    public static void main6(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int positiveCount = 0;
        int negativeCount = 0;
        int zeroCount = 0;
        String choice;

        do {
            System.out.print("Enter a number: ");
            int number = scanner.nextInt();

            if (number > 0) {
                positiveCount++;
            } else if (number < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }

            System.out.print("Do you want to enter another number? (yes/no): ");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("yes"));

        System.out.println("Count of positive numbers: " + positiveCount);
        System.out.println("Count of negative numbers: " + negativeCount);
        System.out.println("Count of zeros: " + zeroCount);
    }

    public static void main7(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Please enter a positive number.");
        } else {
            System.out.print("Fibonacci Series: ");
            int a = 0, b = 1;
            for (int i = 1; i <= n; i++) {
                System.out.print(a + " ");
                a = b;
                b = a + b;
            }
        }
    }

    public static void main8(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Please enter a positive number.");
        } else {
            System.out.print("Fibonacci Series: ");
            for (int i = 0; i < n; i++) {
                System.out.print(fibonacci(i) + " ");
            }
        }
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main9(String[] args) {
        int num1 = 56;
        int num2 = 98;
        System.out.println("The GCD of " + num1 + " and " + num2 + " is: " + findGCD(num1, num2));
    }

    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            System.out.println("133 " + b + " " + temp);
            a = temp;
        }
        return a;
    }

    public static void main10(String[] args) {
        int[] Newarray = new int[5];
        int[][] twodarray = new int[5][5];
    }

}