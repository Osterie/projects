import math
import time # brukes til time.sleep() 
import os  # Brukes til å finne bredde til terminal



from numpy import False_

#-----------------------------------------------------------Learning---------------------------------------------------------------------------------------


#Rød, oransj, gul, grønn, cyan, blå, lilla
#rød   =            (255, 0,    0  )
#gul   =            (255, 255,  0  )
#grønn =            (0,   255,  0  )
#cyan  =            (0,   255,  255)
#blå   =            (0,   0,    255)
#lilla =            (128, 0,    128)


#-----------------------------------------------------------Bearbeiding av variabler-----------------------------------------------------------------------


#Bearbeiding av size, denne gjør at jeg kan få loadingen så brei som mulig
terminal_size = (str(os.get_terminal_size())[25:28]) #os.get_terminal_size skriver en lang setning om lengden og bredden til terminalen. [25:28] gjør at jeg kun får bredden.
terminal_size = int(terminal_size.replace(',', '')) #Fjerner komma om der er 
#print(terminal_size)
#print('.'*(terminal_size))

#print('X')






#-----------------------------------------------------------Konstanter-----------------------------------------------------------------------------------



x = 1 #Brukes for å kjøre en løkke inni en annen løkke kun 1 gang per run, IKKE ENDRE
red = 255 #Brukes til å gi outputet farge
blue = 0
green = 0
rest_count= 1 # Brukses til rest.
intersected = False
spc = 100 # brukes til mellomromer

pair_ic = False # Endres litt lenger nede til True om icon_amount er partall

placeholder = False
space_end = 'Placeholder'

pair_size= False
odd_size = False



spk = 0
rise = True
fall = False




if terminal_size % 2 == 0: #Gjør om til partall
    pair_size = True
else:
    odd_size = True










#-----------------------------------------------------------Variabler som kan endres av bruker-------------------------------------------------------------


runs = 1  # Denne bestemmer hvor mange repetisjoner av sekvensen som kjører.


multiplied = False





icon_amount = 5 # Denne bestemmer hvor mange brei loading søylene er
icon = '/'


size = (terminal_size) - icon_amount*2 -1   #BRUK KUN NATURLIGE PARTALL FOR SIZE! Om ikke hele terminalen skal fylles av output, kan terminal_size byttes ut med et partall.

size = 140
print(size)

spikes = False
spike_icon = '>'

spike_size = 5

max_spikes= int(size/4)
huge_spikes = True

color = True # kan endres, True om farger ønskes, False om ingen farge ønskes.
color_grade = 5 # Kan velge fra og med 1 til og med 8, bestemmer hvor fort fargen endres.

rest = 5 #Recommended 6 kan velge fra og med 1 til og med 8, bestemmer hastigheten til loadingen. 




#-----------------------------------------------------------Arbitrary kode + endring av konstant(er)---------------------------------------------------------------------------------


if rest == 1:
    rest = 0.00
    
elif rest == 2:
    rest = 0.01
    rest_count = 5

elif rest == 3:
    rest = 0.01
    rest_count = 4

elif rest == 4:
    rest = 0.01
    rest_count = 3

elif rest == 5:
    rest = 0.01
    rest_count = 2

elif rest == 6:
    rest = 0.01

elif rest == 7:
    rest = 0.05
    
elif rest == 8:
    rest = 0.1
    
v = rest_count

if icon_amount % 2 == 0:
    pair_ic = True

else:
    odd_ic = True



#-----------------------------------------------------------Defs for å korte ned---------------------------------------------------------------------------


def nap():
    global rest_count
    global v

    v -=1

    if v <= 1:

        v = rest_count
        time.sleep(rest)


def colored(r, g, b, text):

    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)


def color_changing():
    global color_grade


    if color_grade == 8:
        color_grade = 255

    elif color_grade == 7:
        color_grade = 85
        
    elif color_grade == 6:
        color_grade = 51

    elif color_grade == 5:
        color_grade = 17

    elif color_grade == 4:
        color_grade = 15

    elif color_grade == 3:
        color_grade = 5

    elif color_grade == 2:
        color_grade = 3

    elif color_grade == 1:
        color_grade = 1


def color_change():
    global red
    global blue
    global green
    
    
    color_changing()

    if color == True:
            
        if red == 255 and green <= 254 and blue == 0 :  # Lager gul
            green += int(color_grade)
            
        
        elif red <= 255 and red >= 1 and green == 255 and blue == 0:  # Lager grønn
            red -= int(color_grade)
            

        elif red == 0 and green == 255 and blue <= 254:  # Lager cyan
            blue += int(color_grade)
            

        elif red == 0 and green <= 255 and green != 0 and blue == 255:  # Lager blå
            green -= int(color_grade)
        
        elif red <= 255 and green == 0 and blue <= 255: # Lager lilla
            red += int(color_grade)
            blue -= int(color_grade)
        
        else:
            pass


def icon_changes():
    global spikes_left
    global spikes_right
    global left_icon
    global right_icon
    global middle

    if spike_icon == '<' or '>':
        spikes_left = '>'
        spikes_right = '<'
    
    if icon == '/' or icon == '\\':
        left_icon = '\\'
        right_icon = '/'
        middle = 'X'

    else:
        left_icon = icon
        right_icon = icon
        middle = icon


icon_changes()




def printer():
    global spk
    global spike_size
    global rise
    global fall



    if spikes == True:

        if rise == True:
            spk += 1
            
        elif fall == True:
            spk -= 1
        
        if spk == int(size/4) and pair_ic == True:
            spk -= 1
            fall = True
            rise = False

        print(colored(red, green, blue, (spikes_left*spk + loading[spk:size+icon_amount+2] + ' '*3 + spikes_right*spk)))


        if spk == max_spikes and huge_spikes == True:
            fall = True
            rise = False
        
        if spk == spike_size and huge_spikes == False:
            fall = True
            rise = False

        if spk == 0:
            
            rise = True
            fall = False
    
    else:
        print(colored(red, green, blue, loading))
#-----------------------------------------------------------Defs-------------------------------------------------------------------------------------------
size = 121
print(size)

def back():
    global space_start
    global space_end
    global left
    global right
    global left_icon
    global right_icon
    global x
    global loading
    global i
    
    global intersected
    global spc
    global pair_size
    global placeholder
    global pair_space_mid
    global odd_space_mid
    global pair_space_end
    global odd_space_end
    

    for r in range(0,runs):
        pair_space_end = False
        pair_space_mid = False
        odd_space_end = False
        odd_space_mid = False

        x = 1
        spc = 100
        intersected = False
        
        
        

        for i in range( 0, size - icon_amount - (  ( int(size/2) + icon_amount*2  + pair_ic  )* multiplied)): #FIXME: -1 kanskje endres med pair_space_mid? #FIXME: kanskje - endres med math.ceil(icon_amount/2)

            color_change()
            
            

            left = left_icon *icon_amount
            right = right_icon *icon_amount

                
                
            if multiplied == True:
                
                
                
                multiplied_intersection()
                #print(pair_space_mid)

                space_start = ' '*i      
                space_end = ' '*((int(size/2)-icon_amount*2)-i*2)


                loading = space_start+left+space_end+right
                loading = (' '*icon_amount) + loading + ' ' + space_start + loading 
                
                #loading = ' '*icon_amount + loading[:int((size/2)-i)-icon_amount-1+3] + right + space_start*2 + ' ' + left + loading[int((size/2)-i)+icon_amount*2+len(space_start)*2+icon_amount-3:] + 's'
                

                    
                if intersected == True and i*2 - spc*2 <= i+2:
                    
                    
                    loading = (' '*(icon_amount - 2 + odd_space_end*2 + pair_ic*2 + (pair_space_mid*2)) + space_start).replace(' ', '',  (i)*2 - spc*2 - 4 + pair_ic*2 + pair_space_mid - odd_space_mid+2 ) + right  + (space_start*2).replace(' ', '', spc*2 + 2-odd_space_mid ) + left 
                    loading = loading + space_start.replace( ' ', '', i*2 - spc*2 - 2 ) + loading.replace(' ', '', icon_amount) 
                    

                    
                    
                    nap()
                    printer()


                        
                    
                    if (i)*2 - spc*2  == i+1:
                        
                        intersection()
       
            if multiplied == False:

                space_start = ' '* i        
                space_end = ' '*((size-icon_amount)-i*2)


                loading = space_start+left+space_end+right 
                
                            
                if space_end == '':
                    
                    if placeholder == True:

                        loading = space_start+left+space_end+right 
                        printer()
                        placeholder = False

                    intersection()
                    
                    space_start = ' '*((size)-i-l-m)
                    
                    space_end2 = ' '*int(2*((i+ math.floor(icon_amount/2))-int((size)/2)))



                    loading = space_start+right+ ' ' +space_end2+left

                elif space_end != '':
                    
                    loading = space_start+left+space_end+right 
                    
                    if len(space_end) % 2 == 0:
                        placeholder = True

            if (i)*2 - spc*2 != i and intersected == False:
                
                
                nap()
                printer()
                


def intersection():
    global x
    global pair_space_end
    global odd_space_end
    global l
    global m
    

    
    while x == 1:
        x = 0

        if multiplied == True:
            check = len(space_start.replace( ' ', '', i*2 - spc*2 - 2))
        
        else:
            check = pair_size
        
        
        if check == 0 or False:
            pair_space_end = True
            odd_space_end = False
            

        elif check == 1 or True:
            odd_space_end = True
            pair_space_end = False
        
        


        for l in range(1, math.ceil(icon_amount/2)+1- odd_size):
            
            loading = ((space_start)+ ' '*pair_space_end + left.replace( left_icon*2 ,' ', l-1 ).replace(left_icon ,'', 1+pair_space_end) + (right.replace( right_icon , middle ,l*2-1+pair_space_end)))  #FIXME: fjernet + odd_space_end fra right.replace 
            

            if l == math.ceil(icon_amount/2) and multiplied == False and pair_ic == True:
                
                printer()
                print('hvordan')
            
            elif l == math.ceil(icon_amount/2) and odd_size == True and multiplied == False:

                loading = 'tips'
                
                printer()
                print('var her')
             
                
                

            if multiplied == True:
                                

                loading = (space_start + ' '*((l*2)-1+ pair_ic) + left.replace( left_icon*2 ,'',l-1).replace( left_icon ,'',1)+(right.replace( right_icon , middle ,l*2-1)))
                loading = ' '*(icon_amount-l) +  right + loading + space_start  + ' '*((l*2)-1+pair_ic) + left 
                
                if l == math.ceil(icon_amount/2) and icon_amount % 2 == 1:
                    
                    #print(loading.replace('/', '|').replace('\\', '|'))
                    loading = (space_start + ' '*((l*2)-1) + left.replace('\\\\','',l-1).replace('\\','',1)+(right.replace('/','X',l*2-1)))
                    loading = ' '*(icon_amount-l) +  left.replace('\\', '|') + loading + space_start + ' '*((l*2)-(odd_space_end)) + left.replace('\\', '|') 
                
                
            nap()
            print(colored(red, green, blue, loading))
            


        

        for m in range(0, math.ceil(icon_amount/2) - 1):
            
    

            loading = (space_start + right.replace( right_icon*2 , ' ' , l-m-1 ).replace( right_icon , '' , 1 ) + ( left.replace( left_icon , middle , (l-m)*2-1 ))) +'hade'
            

            if multiplied == True:

                if pair_ic == True and m == 1: #om icon_amount er et partall er midten delen 2 brei, derfor printes midten 2 ganger
                    
                    loading = (space_start + ' '*((l*2)-1+ pair_ic) + right.replace( right_icon*2 ,'',l-1).replace( right_icon ,'',1) + (left.replace( left_icon , middle ,l*2-1)))
                    loading = ' '*(icon_amount-l) +  left + loading + space_start + ' '*((l*2)-1+pair_ic) + right

                    nap()
                    print(colored(red, green, blue, loading))

                
                loading = space_start + ' '*( l-m-1+pair_ic ) + right.replace( right_icon*2 , ' ' , l-m-1 ).replace( right_icon , ' ' , 1 ) + ( left.replace( left_icon , middle , (l-m)*2-1 ))
                loading = ' '*(m+l-1+pair_ic) + left + loading + space_start + ' '*(icon_amount-m*2) +  right




            print('asjkjasljdk')
            nap()
            print(colored(red, green, blue, loading))


def multiplied_intersection(): #TODO: integrer med vanlig interseciton
    global loading
    global i
    global intersected
    global spc
    global space_end

    global pair_space_mid
    global odd_space_mid

    
    #if len(space_start) >= int((size/2)-i) and intersected == False:
    
    if (space_end == '' or space_end == ' ') and intersected == False and i != 0:
        
        
        if space_end == '':
            pair_space_mid = True
            odd_space_mid = False
        

        elif space_end == ' ':
            odd_space_mid = True
            pair_space_mid = False
    

        #print(pair_space_mid)
        #print(odd_space_mid)
        
        
        
        for l in range(0, math.ceil(icon_amount/2)-1+odd_space_mid):


            
            loading = ((space_start) + ' '*icon_amount +left.replace( left_icon*2 ,' ',l).replace( left_icon*(1+pair_space_mid) ,' ',1)+(right.replace( right_icon , middle ,(l+1)*2 - odd_space_mid))) 
            loading = loading + space_start.replace(' ', '', icon_amount-odd_space_mid) + ' '*(l+1+pair_space_mid) +  loading
            
            nap()
            printer()
            
            
            if l == math.ceil(icon_amount/2)-2+odd_space_mid and (odd_space_mid == True and pair_ic == True) or l == math.ceil(icon_amount/2)-2+odd_space_mid and pair_space_mid == True:
                
                #(odd_space_mid == True and pair_ic == True)
                loading = ((space_start) + ' '*icon_amount +right.replace(right_icon*2 ,' ',l).replace( right_icon*(1+pair_space_mid) ,' ',1)+(left.replace( left_icon , middle ,(l+1)*2 - odd_space_mid))) 

                loading = loading + space_start.replace(' ', '', icon_amount-odd_space_mid) + ' '*(l+1+pair_space_mid) + loading

                printer()





        for m in range(1, math.ceil(icon_amount/2)-1+odd_space_mid):
            
            
            
            loading = ((space_start)+ ' '*(icon_amount+odd_space_mid) + right.replace( right_icon*2 ,' ',l-m+pair_space_mid).replace( right_icon ,'',1-pair_space_mid) + (left.replace( left_icon , middle , (l-m)*2 + 1 + pair_space_mid))) 
            loading = loading + space_start + ' '*(odd_space_mid*2-pair_ic)  + loading.replace(' ','', (l + m + pair_space_mid + odd_space_mid))  # FIXME: odd_space_mid kanskje endres med pair_ic?
            
            
            nap()
            printer()

        
        spc = len(space_start)
        
        intersected = True
        



back()