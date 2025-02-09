/*
- 입력
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
- 한 줄 입력 받기
String input = br.readLine();
- 입력받은 값 String -> int(숫자) 변경
int N = Integer.parseInt(input);
- 한 줄 입력받은 값 공백 기준으로 배열 담기
String[] line = br.readLine().split(" ");

- 출력 (String만 출력 가능)
BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
bw.write()
bw.newLine(); // 줄바꿈
bw.flush(); // 버퍼 내용 출력
bw.close(); // BufferedWriter 닫기
br.close(); // BufferedReader 닫기
*/

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[] line = br.readLine().split(" ");

        int max = Integer.parseInt(line[0]);
        int min = Integer.parseInt(line[0]);

        for (int i = 1; i < N; i++) {
            max = Math.max(max, Integer.parseInt(line[i]));
            min = Math.min(min, Integer.parseInt(line[i]));
        }


        bw.write(String.valueOf(max * min));

        bw.flush();
        bw.close();
        br.close();
    }
}

//import java.io.*;
//import java.util.*;
//
//public class Main {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//        int N = Integer.parseInt(br.readLine());
//        String[] line = br.readLine().split(" ");
//
//        bw.flush();
//        bw.close();
//        br.close();
//    }
//}

