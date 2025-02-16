package 수학;

import java.io.*;

public class BOJ_2576_B3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int sum = 0;
        int oddMin = Integer.MAX_VALUE;
        boolean odd = false;

        for (int i = 0; i < 7; i++) {
            int num = Integer.parseInt(br.readLine());

            if (num % 2 != 0) {
                sum += num;
                oddMin = Math.min(oddMin, num);
                odd = true;
            }
        }

        if (odd) {
            bw.write(sum + "\n");
            bw.write(oddMin + "\n");
        } else {
            bw.write("-1\n");
        }

        bw.flush();
        bw.close();
        br.close();
    }
}