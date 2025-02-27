package 그리디;

import java.io.*;
import java.util.*;

public class BOJ_2141_G4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        long totalPeople = 0;
        List<long[]> houses = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            long x = Long.parseLong(st.nextToken());
            long a = Long.parseLong(st.nextToken());
            houses.add(new long[]{x, a});
            totalPeople += a;
        }

        // 마을을 X 기준으로 정렬
        houses.sort(Comparator.comparingLong(o -> o[0]));

        long sum = 0;
        for (long[] house : houses) {
            sum += house[1];
            if (sum >= (totalPeople + 1) / 2) {
                System.out.println(house[0]);
                return;
            }
        }
    }
}
