package 수학;

import java.io.*;

public class BOJ_14910_B2 {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            String[] line = br.readLine().split(" ");
            String result = "Good";

            for(int i = 1; i < line.length; i++){

                if(Integer.parseInt(line[i-1]) > Integer.parseInt(line[i])){
                    result = "Bad";
                    break;
                }
            }

            bw.write(result);


            bw.flush();
            bw.close();
            br.close();
        }
    }