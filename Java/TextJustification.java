package Java;

import java.util.*;

public class TextJustification {
    public List<String> fullJustify(String[] words, int maxWidth) {
        // consume words and add them to some data structure until the length of the words meets or exceeds the maxwidth - number of characters to account for spaces
        // then build line by summing the the numbers of characters to figure out the padding
        // it should be max-width - number of total chars/number of strings - 1 (and probably something else that I'm missing) 
        int sum = 0;
        int space = 0;
        Deque<String> stack = new LinkedList<String>();
        List<String> result = new ArrayList<String>();
        for(int i = 0; i < words.length; i++){
            sum += words[i].length();
            if(stack.size() > 0){
                space += 1;
            }
            if((sum + space) < maxWidth){
                stack.add(words[i]);
            } 
            if(i == words.length -1 && ((sum + space) < maxWidth)){
                int spaces = (maxWidth - sum - (stack.size() - 1));
                String str = "";
                while(stack.size() > 0){
                    str += stack.removeFirst();
                    if(stack.size() > 0){
                        str += " ";
                    } else {
                        for(int k = 0; k < spaces; k++){
                            str += " ";
                        }
                    }
                }
                System.out.println(str);
                result.add(str);
            }
            else if((sum + space) >= maxWidth){
                sum -= words[i].length();
                int spaces;
                if(stack.size() > 1){
                    spaces = ((maxWidth - sum) / (stack.size()-1));
                } else {
                    spaces = maxWidth - sum;
                }
                
                String str = "";
                boolean firstPopped = false;
                while(stack.size() > 0){
                    str += stack.removeFirst();
                    if(!firstPopped && (spaces%2) == 1 && (stack.size()%2 == 0)){
                        str += " ";
                        firstPopped = true;
                    }
                    for(int j = 0; j < spaces; j++){
                        str += " ";
                    }
                    if(stack.size() == 1){
                        str += stack.removeLast();
                    }
                }
                sum = 0;
                stack.clear();
                i -= 1;
                result.add(str);
                space = 0;
                
            } 
        }
        return result;
    }
    
    public List<String> fullJustifyTakeTwo(String[] words, int maxWidth) {
        List<String> result = new ArrayList<String>();
     
        if(words==null || words.length==0){
            return result;
        }
     
     
        int count=0;
        int last=0;
        for(int i=0; i<words.length; i++){
            count = count + words[i].length();
     
            if(count+i-last>maxWidth){
                int wordsLen = count-words[i].length();
                int spaceLen = maxWidth-wordsLen;
                int eachLen = 1;
                int extraLen = 0;
     
                if(i-last-1>0){
                    eachLen = spaceLen/(i-last-1);
                    extraLen = spaceLen%(i-last-1);
                }
     
                StringBuilder sb = new StringBuilder();
     
                for(int k=last; k<i-1; k++){
                    sb.append(words[k]);
     
                    int ce = 0;
                    while(ce<eachLen){
                        sb.append(" ");
                        ce++;
                    }
     
                    if(extraLen>0){
                        sb.append(" ");
                        extraLen--;
                    }
                }
     
                sb.append(words[i-1]);//last words in the line
                //if only one word in this line, need to fill left with space
                while(sb.length()<maxWidth){
                    sb.append(" ");
                }
     
                result.add(sb.toString());
     
                last = i;
                count=words[i].length();
            }
        }
     
        
        StringBuilder sb = new StringBuilder();
     
        for(int i=last; i<words.length-1; i++){
            count = count+words[i].length();
            sb.append(words[i]+" ");
        }
     
        sb.append(words[words.length-1]);
        
        while(sb.length()<maxWidth){
            sb.append(" ");
        }
        result.add(sb.toString());
     
        return result;
    }
}
