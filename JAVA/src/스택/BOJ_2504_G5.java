package 스택;

import java.util.*;

public class BOJ_2504_G5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        scanner.close();

        System.out.println(bracketValue(input));
    }

    public static int bracketValue(String s) {
        Stack<Character> stack = new Stack<>();

        int temp = 1;
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == '(') {
                stack.push(c);
                temp *= 2;
            } else if (c == '[') {
                stack.push(c);
                temp *= 3;
            } else if (c == ')') {
                if (stack.isEmpty() || stack.peek() != '(') return 0;
                if (s.charAt(i - 1) == '(') result += temp;
                stack.pop();
                temp /= 2;
            } else if (c == ']') {
                if (stack.isEmpty() || stack.peek() != '[') return 0;
                if (s.charAt(i - 1) == '[') result += temp;
                stack.pop();
                temp /= 3;
            }
        }

        return stack.isEmpty() ? result : 0;
    }
}
