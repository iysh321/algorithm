package 수학;

import java.io.*;

public class BOJ_1037_B1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[] line = br.readLine().split(" ");

        int max = Integer.parseInt(line[0]);
        int min = Integer.parseInt(line[0]);

        for (int i = 1; i < N; i++) {
            max = Math.max(max, Integer.parseInt(line[i]));
            min = Math.min(min, Integer.parseInt(line[i]));
        }


        bw.write(String.valueOf(max * min));

        bw.flush();
        bw.close();
        br.close();
    }
}
