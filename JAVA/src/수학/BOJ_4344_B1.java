package 수학;

import java.io.*;

public class BOJ_4344_B1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int C = Integer.parseInt(br.readLine());

        for (int c = 0; c < C; c++) {
            String[] line = br.readLine().split(" ");

            int N = Integer.parseInt(line[0]);
            int[] scores = new int[N];

            for (int i = 0; i < N; i++) {
                scores[i] = Integer.parseInt(line[i + 1]);
            }

            double sum = 0;
            for (int score : scores) {
                sum += score;
            }
            double avg = sum / N;

            int count = 0;
            for (int score : scores) {
                if (score > avg) {
                    count++;
                }
            }

            double percentage = (count / (double) N) * 100;
            System.out.printf("%.3f%%\n", percentage);
        }

        br.close();
    }
}

//5
//5 50 50 70 80 100
//7 100 95 90 80 70 60 50
//3 70 90 80
//3 70 90 81
//9 100 99 98 97 96 95 94 93 91




