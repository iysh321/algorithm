package 문자열;
import java.io.*;

public class BOJ_17413_S3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String S = br.readLine();
        StringBuilder sb = new StringBuilder();
        StringBuilder word = new StringBuilder();

        boolean inTag = false;

        for (char c : S.toCharArray()) {
            if (c == '<') { // 태그 시작
                sb.append(word.reverse()); // 이전 단어 뒤집어서 추가
                word = new StringBuilder(); // 단어 초기화
                inTag = true;
            }

            if (inTag) {
                sb.append(c);
                if (c == '>') inTag = false; // 태그 종료
            } else {
                if (c == ' ') { // 공백이면 단어 종료
                    sb.append(word.reverse()).append(' ');
                    word = new StringBuilder();
                } else {
                    word.append(c);
                }
            }
        }

        sb.append(word.reverse()); // 마지막 단어 추가

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
