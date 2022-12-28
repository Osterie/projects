import time # brukes til time.sleep() 

def step():
    for j in range(1,4):
        for i in range(0,21):

            space_start = ' '*i
            space_end = ' '*(20-i*2)
            dot = '.'  


            if space_end != '':
                time.sleep(0.02)


                loading = space_start+dot+space_end+dot
                print(loading)
                
                
            elif space_end == '':
                time.sleep(0.02)
                space_start = ' '*(20-i)
                space_end2 = ' '*(2*(i-10))
                loading = space_start+dot+space_end2+dot
                print(loading)


def back(): # går tilbake til start

    for i in range(1,4,1):
        print(' Tilbake til menyen'+'.'*i, end ='\r', flush =False) #legger til en . . . på "Går tilbake i menyen", ser skikkelig kult ut bare.
        time.sleep(0.5) # Litt dramatisk pause mellom . . .
        
    step()
    for j in range(1,4):
        for i in range(0,21):

            space_start = ' '*i
            space_end = ' '*(20-i*2)
            dot = '.'  


            if space_end != '':
                time.sleep(0.02)


                loading = space_start+dot+space_end+dot
                print(loading)
                
                
            elif space_end == '':
                time.sleep(0.02)
                space_start = ' '*(20-i)
                space_end2 = ' '*(2*(i-10))
                loading = space_start+dot+space_end2+dot
                print(loading)

back()