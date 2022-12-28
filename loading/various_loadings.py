import math
import time # brukes til time.sleep() 
import os # Brukes til å finne bredde til terminal


#-------------------------------------------Learning---------------------------------------------
#Rød, oransj, gul, grønn, cyan, blå, lilla
#rød =              (255, 0,    0  )
#gul =              (255, 255,  0  )
#grønn = blå + gul  (0,   255,  0  )
#cyan =             (0,   255,  255)
#blå =              (0,   0,    255)
#lilla =            (128, 0,    128)




#TODO: FOr color chaning, både en feature som gjør at fargen starter på rød og ender på blå, og en feature som starter på rød og looper fargene.
#-----------------------------------------------------------Bearbeiding av variabler------------------------------------------------- 

#Bearbeiding av size, denne gjør at jeg kan få loadingen så brei som mulig



terminal_size = (str(os.get_terminal_size())[25:28]) #os.get_terminal_size skriver en lang setning om lengden og bredden til terminalen. [25:28] gjør at jeg kun får bredden.
terminal_size = int(terminal_size.replace(',', ' ')) #Fjerner komma om der er 
if terminal_size % 2 != 0: #Gjør om til partall
    terminal_size -= 1

#-----------------------------------------------------------Defs for å korte ned--------------------------------------------------------

def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)


#-------------------------------------------------------------Konstant(er)




x = 1 #Brukes for å kjøre en løkke inni en annen løkke kun 1 gang, IKKE ENDRE

#-----------------------------------------------------------Variabler----------------------------------------------------------------

runs = 1   # Denne bestemmer hvor mange repetisjoner av sekvensen som kjører.
icon_amount = 4 # Denne bestemmer hvor mange prikker brei loading søylene er? 
size = terminal_size - icon_amount*2   #BRUK KUN NATURLIGE PARTALL FOR SIZE!
icon = 'X'


red = 255
blue = 0
green = 0
color = True
color_grade = 5 # Kan velge fra og med 1 til og med 8

rest = 0.01

#-------------------------------------------------------Defs-------------------------------------------------

def back(): # går tilbake til start
    global space_start
    global ic
    global x
    global red
    global blue
    global green
    

    for r in range(0,runs):
        x = 1

        for i in range(0,size):  
            color_change()
            space_start = ' '* i  
            space_end = ' '*((size-1)-i*2)
            ic = icon *icon_amount


            if space_end != '':
                time.sleep(rest)
                
                loading = space_start+ic+space_end+ic
                print(colored(red, green, blue, loading))
                               


            elif space_end == '':
                time.sleep(rest)
                intersection()
                
               
                space_start = ' '*((size-1)-i)
                space_end2 = ' '*int(2*(i-int((size-1)/2))-1)
                
                loading = space_start+ic+space_end2+ic
                print(colored(red, green, blue, loading))

            else:
                pass

def intersection():
    global x
    
    
    while x == 1:
        x = 0

        for l in range(1, math.ceil(icon_amount/2)+1):
            time.sleep(rest)

            loading = ((space_start)+ic.replace(icon,' ',l-1)+(ic.replace(icon,'',l)))
           
            print(colored(red, green, blue, loading))
        
        if icon_amount % 2 == 0: #om icon_amount er et partall er midten delen 2 brei, derfor printes midten 2 ganger
            print(colored(red, green, blue, loading))

        for m in range(1, math.ceil(icon_amount/2)):
            time.sleep(rest)
            
            loading = ((space_start)+ic.replace(icon,' ',l-m-1)+(ic.replace(icon,'',l-m))) 
            print(colored(red, green, blue, loading))


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


back()
