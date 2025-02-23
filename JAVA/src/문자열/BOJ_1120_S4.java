package 문자열;

import java.io.*;

public class BOJ_1120_S4 {
    public class Main {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            String[] line = br.readLine().split(" ");

            String A = line[0];
            String B = line[1];
            int result = 0;

            for (int b = 0; b <= B.length() - A.length(); b++) {
                int count = 0;
                for (int a = 0; a < A.length(); a++) {
                    if (B.charAt(b + a) == A.charAt(a)) {
                        count++;
                    }
                }
                result = Math.max(count, result);
            }

            bw.write(String.valueOf(A.length() - result));
            bw.flush();
            bw.close();
            br.close();

        }
    }
}
