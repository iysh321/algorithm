package 큐;

import java.io.*;
import java.util.Deque;
import java.util.LinkedList;

public class BOJ_18258_S4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        Deque<Integer> queue = new LinkedList<>();

        for (int i = 0; i < N; i++) {
            String command = br.readLine();

            if (command.startsWith("push")) {
                int value = Integer.parseInt(command.split(" ")[1]);
                queue.offer(value);
            } else if (command.equals("pop")) {
                bw.write(queue.isEmpty() ? "-1\n" : queue.poll() + "\n");
            } else if (command.equals("size")) {
                bw.write(queue.size() + "\n");
            } else if (command.equals("empty")) {
                bw.write(queue.isEmpty() ? "1\n" : "0\n");
            } else if (command.equals("front")) {
                bw.write(queue.isEmpty() ? "-1\n" : queue.peek() + "\n");
            } else if (command.equals("back")) {
                bw.write(queue.isEmpty() ? "-1\n" : queue.peekLast() + "\n");
            }
        }

        br.close();
        bw.flush();
        bw.close();
    }


}
