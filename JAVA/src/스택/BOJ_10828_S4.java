package 스택;

import java.io.*;
import java.util.*;

public class BOJ_10828_S4 {
    public class Main {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            int N = Integer.parseInt(br.readLine());
            Stack<Integer> stack = new Stack<>();

            for (int i = 0; i < N; i++) {
                String command = br.readLine();

                if (command.startsWith("push")) {
                    int value = Integer.parseInt(command.split(" ")[1]);
                    stack.push(value);
                } else if (command.equals("pop")) {
                    bw.write(stack.isEmpty() ? "-1\n" : stack.pop() + "\n");
                } else if (command.equals("size")) {
                    bw.write(stack.size() + "\n");
                } else if (command.equals("empty")) {
                    bw.write(stack.isEmpty() ? "1\n" : "0\n");
                } else if (command.equals("top")) {
                    bw.write(stack.isEmpty() ? "-1\n" : stack.peek() + "\n");
                }
            }

            br.close();
            bw.flush();
            bw.close();
        }
    }
}
