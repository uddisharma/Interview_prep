package dsa.day1;

public class Patterns {
    // Solid rectangle
    // *****
    // *****
    // *****
    // *****
    public static void main(String[] args) {
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // <------------------------------------------------->

    // Hollow rectangle
    // *****
    // * *
    // * *
    // *****
    public static void main1(String[] args) {
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 5; j++) {
                if (i == 1 || j == 1 || i == 4 || j == 5) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }

    // <------------------------------------------------->

    // Half pyramid
    // *
    // **
    // ***
    // ****
    public static void main2(String[] args) {
        for (int i = 4; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // <------------------------------------------------->

    // Reverse half pyramid
    // ****
    // ***
    // **
    // *
    public static void main3(String[] args) {
        for (int i = 4; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // <------------------------------------------------->

    // *
    // **
    // ***
    // ****
    public static void main4(String[] args) {
        int n = 4;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
