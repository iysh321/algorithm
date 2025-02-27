package 그리디;

import java.io.*;
import java.util.StringTokenizer;
//재 금액 K에서 가장 큰 동전으로 나눠 사용 가능한 개수를 구하고, 남은 금액을 다음 동전으로 처리.
public class BOJ_11047_S4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int Target = Integer.parseInt(st.nextToken());


        int[] coins = new int[N]; // 동전 종류 배열

        for (int i = 0; i < N; i++) {
            coins[i] = Integer.parseInt(br.readLine());
        }

        int count = 0;

        for (int i = N - 1; i >= 0; i--) {
            if (Target >= coins[i]) {
                count += Target / coins[i];
                Target %= coins[i];
            }
        }


        bw.write(String.valueOf(count));
        bw.flush();
        bw.close();
        br.close();
    }
}

