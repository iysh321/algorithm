package 문자열;

import java.io.*;

public class BOJ_2789_B2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String word = br.readLine();
        String delete = "CAMBRIDGE";
        String result = "";

        for (int i = 0; i < word.length(); i++) {

            if (delete.indexOf(word.charAt(i)) == -1) {
                result += word.charAt(i);
            }
        }

        bw.write(result);

        bw.flush();
        bw.close();
        br.close();
    }
}
