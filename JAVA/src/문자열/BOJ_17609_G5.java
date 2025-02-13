package 문자열;

    import java.io.*;

    public class BOJ_17609_G5 {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            int N = Integer.parseInt(br.readLine());

            for (int i = 0; i < N; i++) {
                String str = br.readLine();
                int result = checkPalindromeType(str);
                bw.write(String.valueOf(result));
                bw.newLine();
            }

            bw.flush();
            bw.close();
            br.close();
        }

        // 0: 회문, 1: 유사회문, 2: 일반 문자열
        public static int checkPalindromeType(String str) {
            int left = 0;
            int right = str.length() - 1;

            while (left < right) {
                if (str.charAt(left) != str.charAt(right)) {
                    // 한 문자를 제거했을 때 회문인지 확인
                    if (isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)) {
                        return 1; // 유사회문
                    } else {
                        return 2; // 일반 문자열
                    }
                }
                left++;
                right--;
            }
            return 0; // 회문
        }

        // 특정 구간이 회문인지 확인하는 함수
        public static boolean isPalindrome(String str, int left, int right) {
            while (left < right) {
                if (str.charAt(left) != str.charAt(right)) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }
    }

