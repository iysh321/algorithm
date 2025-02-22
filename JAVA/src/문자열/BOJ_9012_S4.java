package 문자열;

import java.io.*;

public class BOJ_9012_S4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {

            String str = br.readLine();
            int left = 0;
            int right = 0;
            String result = "YES\n";

            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(j) == '(') {
                    left++;
                } else {
                    right++;
                }

                if (right > left) {
                    result = "NO\n";
                    break;
                }
            }

            if (left != right) result = "NO\n";

            bw.write(result);


        }


        bw.flush();
        bw.close();
        br.close();

    }
}

