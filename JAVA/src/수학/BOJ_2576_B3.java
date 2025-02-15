package 수학;

import java.io.*;

public class BOJ_2576_B3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        int sum = 0;
        int[] odd = new int[N];

        for (int i = 0; i < N; i++) {
            String input = br.readLine();
            int num = Integer.parseInt(input);

            if (num % 2 != 0) {
                odd[i] = num;
            }
        }

        int oddMin = Integer.MAX_VALUE;

        for (int num : odd) {
            oddMin = Math.min(oddMin, num);
            sum += num;
        }

        bw.write(sum);
        bw.write(oddMin);


        bw.write(String.valueOf(N));

        bw.flush();
        bw.close();
        br.close();
    }

}
