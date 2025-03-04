package 문자열;

import java.io.*;

public class BOJ_5525_S1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        String S = br.readLine();

        int count = 0;
        int patternCount = 0;
        for (int i = 1; i < M - 1; i++) {
            if (S.charAt(i - 1) == 'I' && S.charAt(i) == 'O' && S.charAt(i + 1) == 'I') {
                patternCount++;

                if (patternCount >= N) count++; // 최소 N개의 "IOI" 패턴이 쌓이면 카운트
                i++; // "OI" 다음 위치로 이동하여 중복 검사 방지
            } else {
                patternCount = 0; // 연속 패턴 깨지면 초기화
            }
        }

        bw.write(String.valueOf(count));
        bw.flush();
        bw.close();
        br.close();
    }
}