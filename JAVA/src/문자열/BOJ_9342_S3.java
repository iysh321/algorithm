package 문자열;

import java.io.*;

public class BOJ_9342_S3 {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            int N = Integer.parseInt(br.readLine());

            for (int i = 0; i < N; i++) {
                String str = br.readLine();
                boolean check = false;

                int a = str.indexOf('A');
                int f = str.indexOf('F');
                int c = str.indexOf('C');
                int lastA = str.lastIndexOf('A');
                int lastF = str.lastIndexOf('F');

                if (str.charAt(str.length() - 1) == 'A' || str.charAt(str.length() - 1) == 'F' || str.charAt(str.length() - 1) == 'C') {
                    if (a < f && f < c) {
                        if (lastA == f - 1 && lastF == c - 1) {
                            check = true;
                        }
                    }
                }

                if (check) {
                    bw.write("Infected!\n");
                } else {
                    bw.write("Good\n");
                }
            }

            bw.flush();
            bw.close();
            br.close();
        }
    }