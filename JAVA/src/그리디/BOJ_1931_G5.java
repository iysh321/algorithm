package 그리디;

import java.io.*;
import java.util.*;

// 정렬을 회의시간 빠른순 1순위 회의 종료시간, 2순위 회의 시작시간으로 정렬 후 순회하여 찾는다.

public class BOJ_1931_G5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // 회의 개수

        int[][] meetings = new int[N][2]; // 회의 정보를 저장할 배열

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            meetings[i][0] = Integer.parseInt(st.nextToken());
            meetings[i][1] = Integer.parseInt(st.nextToken());
        }

        // 종료 시간이 빠른 순
        Arrays.sort(meetings, (a, b) -> {
            if (a[1] == b[1]) {
                return Integer.compare(a[0], b[0]); // 같다면 시작 시간이 빠른 순
            }
            return Integer.compare(a[1], b[1]);
        });

        int count = 0;
        int lastTime = 0;

        for (int[] meeting : meetings) {
            if (meeting[0] >= lastTime) { // 회의 시작 시간이 마지막 회의 종료 시간 이후인지 확인
                count++;
                lastTime = meeting[1]; // 마지막 종료 시간 갱신
            }
        }

        System.out.println(count); // 최대 사용할 수 있는 회의 개수 출력
    }
}
