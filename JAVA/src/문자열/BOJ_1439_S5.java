package 문자열;

import java.io.*;

public class BOJ_1439_S5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String line = br.readLine();

        int result = 1;

        for (int i = 1; i < line.length(); i++) {
            if (line.charAt(i) != line.charAt(i - 1)) {
                result++;
            }

        }
        bw.write(String.valueOf(result/2));

        bw.flush();
        bw.close();
        br.close();

    }
}
