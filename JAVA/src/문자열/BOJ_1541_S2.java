package 문자열;

import java.io.*;

public class BOJ_1541_S2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[] km = br.readLine().split(" ");
        String[] price = br.readLine().split(" ");

        long result = Long.parseLong(km[0]) * Long.parseLong(price[0]);
        long min = Long.parseLong(price[0]);

        for (int i = 1; i < N - 1; i++) {
            min = Math.min(min, Long.parseLong(price[i]));
            result += min * Long.parseLong(km[i]);
        }

        bw.write(String.valueOf(result));

        bw.flush();
        bw.close();
        br.close();
    }
}
