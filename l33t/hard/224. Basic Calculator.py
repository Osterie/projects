class Solution:
    def calculate(self, s: str) -> int:
        s = s.replace(' ', '')


        sum = 0
        prefix = 1
        depth = 0
        toadd = ''
        negative_stuffs = [0, ]

        for i in range(len(s)):

            if s[i] == '(':
                    
                depth += 1

                if depth not in negative_stuffs and -depth not in negative_stuffs:

                    if negative_stuffs[depth-1] < 0:
                        if s[i-1] == '-':
                            prefix *= -1
                            negative_stuffs.append(depth)

                        else:
                            negative_stuffs.append(-depth)

                    else:

                        if s[i-1] == '-':
                            prefix *= -1
                            negative_stuffs.append(-depth)

                        else:
                            negative_stuffs.append(depth)


            elif s[i] == ')':
                if negative_stuffs[depth] == negative_stuffs[-1]:
                    negative_stuffs.pop()

                depth -= 1
            

            elif s[i] == '-' and '-' not in toadd and s[i+1] != '(':
                toadd += '-'



            try:

                if type(int(s[i])) == int:
                    
                    try:

                        if type(int(s[i+1])) == int:
                            toadd += s[i]
                            continue

                    except:
                        
                        toadd += s[i]

                        if negative_stuffs[depth] < 0:
                            sum += (int(toadd) * -1)
                        
                        else:
                            sum += int(toadd)

                        toadd = ''
            
            except:
                pass

        return sum