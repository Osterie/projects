import os
import time
import random
from random import choice
import copy
import msvcrt
from threading import Thread


#IDEER
#TODO: DEATH, om røttene går gjennom slangen, kan de bli rød, det hadde vært kult
#Kan legge til et game mode hvor hele x/y aksen er mat, og når man treffer maten så blir man lenger og dem emdrer plass
#TODO: Legg til fart til slangen, slow, normal, fast, endrer time.sleep en lenger nede
#TODO: Lage en innstilling for å velge random symbol, sides, topp, bunn, hale osv.
#TODO: kanskje death skal gro lag for lag med liten pause, ikke en grein om gangen

#----------------------------------------------CONSTANTS-----------------------

s = 0
orient = False

slow = 0.2
normal = 0.1
fast = 0.02


#---------------------------------------------------Symboler-----------------------------------
#FIXME: Ser ut som at symbolene har forskjellig character size enn vanlige symbol
###slangen
##Body?
#█ 
#★ 
#☀
#X 
#⬤


###TAIL
# <, >, v, A  #NAME: less_than_tail
#W, M, Σ, ᴟ   #NAME: siamese_tail
#△, ◁, ▷, ◁ #NAME: py_tail
#T, 


###KOMBOER
##PLANE, ARROWS
#TOP    : ↦ :
#Side_r : ↧  :
#Bunn   : ↤ :
#Side_l : ↥  :

##SNAKE, ROTATING


rotating_segments = ['-', '/', '|', '⑊']   #NAME:rotating_segments

rotating_arrows= ['↥', '↗', '↦', '↘', '↧', '↙', '↤', '↖'] #NAME:rotating_arrows


##SNAKE, INCREASING

progressbar = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'] #NAME: progressbar, Liker den

tree = ['┗', '┣', '╋']  #NAME: tree, Dårlig



##SNAKE, MATHS

numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X']  #NAME: Numbers


##SNAKE, LOOP
loop = ['8', '∾', '8', '∾'] 

arrows = ['↥', '↦' '↧', '↤']

oriented_symbols = [loop, arrows]
##SNAKE, CHESS
#HEAD  :  ♕
#BODY  :  ♙



###Top, BOT
#TOP:  ︽  :  ︿  :  ︶
#BOT:  ︾  :  ﹀  :  ︵


###Sides
##Left/right combo

#〈  ,  〉
#《  ,  》
#〔  ,  〕
# «  ,  »
# ‹  ,  ›

#--------------------------------------------------------SETTINGS---------------------------------------------------------

#width kan også endres til en tall verdi som er mindre enn bredden til terminalen
width = (str(os.get_terminal_size())[25:28]) #os.get_terminal_size skriver en lang setning om lengden og bredden til terminalen. [25:28] gjør at jeg kun får bredden.
width = int(width.replace(',', '')) #Fjerner komma om der er 

#height kan også endres til en tall verdi som er mindre enn høyden til terminalen
height = (str(os.get_terminal_size())[35:40])
height = int(height.replace(')', '').replace('=', ''))
height = height - 3 #denne konstanten trengs for at funksjoner skal fungere som de skal


#Disse symbolene er for toppen, bunnen og sidene til spillfeltet, kan endres til andre kule symboler om ønsket
top, bot       =  '_'  ,  '‾'
side_l, side_r =  '|'  ,  '|'

#Snake_body kan ikke være samme som mat symbolet
snake_tail, snake_body, snake_head = 'T' , 'X' , 'H'
snake_symbol = None #progressbar #OM DENNE IKKE ER None overrider den tail, body, head 

if snake_symbol in oriented_symbols:
    orient = True


speed = fast # velg mellom slow, normal og fast.

#Start lengden til slangen, slangen blir totalt 1 lenger på grunn av halen.
length = 8

#Bestemmer hvor mye lenger 1 matbit skal gjøre slangen
calories = 20


food_symbol = 'F' ##MAT SYMBOLET kan ikke være samme som snake_body

#Start posisjonen til slangen
x = 5
y = 5

#Start retningen til slangen
direct = 'd'  #ANBEFALER 'd',  velg mellom 'w', 'a', 's', og 'd'




#------------------------------------------------------------Konstanter---------------------------------------------------
###--------Plane_maker()--------
#Liste for spillfeltet
plane = []

#Lager toppen, bunnen og sidene
horizontal_top = top * (width-4)
horizontal_bot = bot * (width-4)
vertical = side_l + ' '*(width-6) + side_r


###------Food_spawner()-------
#Konstant som for at slangen er spist, spawner en ny mat bit
eaten = False

#Første matbiten som lages
first_meal = True



###-------While alive == True-----
#Spille fortsatter bare mens slangen lever
alive = True

#Spør hvor slangen skal bevege seg / om spiller skal avsluttes
ask = True

#Liste for veien slangen har fulgt
path = [' ']

#Threading
t1 = None

#------------------------------------------------------------------FUNKSJONER--------------------------------------
def plane_maker(): 

    plane.append(horizontal_top) #Topp

    for i in range (1, height):

        plane.append(vertical)   #Sider

    plane.append(horizontal_bot) #Bunn
    

plane_maker()



def food_spawner():
    global eaten
    global food_x
    global food_y
    global length
    global first_meal
    
    if eaten == True or first_meal == True:
        if first_meal == False:
            length += calories
        food_x = random.randrange(1 , width-5)
        food_y = random.randrange(1,height)
        first_meal = False
        eaten = False


custom = True
def symbols():
    global snake_head
    global snake_body
    global snake_tail
    global snake_symbol
    global s
    global custom
    
    
    

    

    if snake_symbol != None:
        snake_tail, snake_body, snake_head = (snake_symbol[s]) , (snake_symbol[s]) , (snake_symbol[s])
        custom = True
        s += 1
        if s == len(snake_symbol):
            s = 0
    


    
        


def path_reader():
    global tail_x
    global tail_y
    global traceback_x
    global traceback_y

    n = 0
    e = 0
    w = 0
    s = 0

    tail_x = 0
    tail_y = 0
    traceback_x = []
    traceback_y = []
    path_copy = copy.deepcopy(path)

    
    for i in range(0, len(path_copy)):
        not_last = 1 #FIXME: TODO: KAnskje bruke not_last til tail også?
        

        if i == int(len(path_copy)):
            not_last = 0
        
        if path_copy[-1] == 'w':
            n += 1*not_last
            
            path_copy.pop()
            tail_y += 1


            
            
        elif path_copy[-1] == 'a':
            w += 1*not_last
            
            path_copy.pop()
            tail_x += 1

            

        
        elif path_copy[-1] == 's':
            s -= 1*not_last

            path_copy.pop()
            tail_y -= 1

            
            


        elif path_copy[-1] == 'd':
            e -= 1*not_last

            path_copy.pop()
            tail_x -= 1

        
        traceback_x.append((x + e+w))
        traceback_y.append((y + n+s))
    del traceback_x[-1]
    del traceback_y[-1]   



def asking():
    global direct

    direct = msvcrt.getwch()







print(plane) 
while alive == True:
    symbols()

    
    food_spawner()

    plane[food_y] = plane[food_y][0:food_x] + food_symbol + plane[food_y][food_x+1:width]


    
    if ask == True:
        
        if t1 is None or not t1.is_alive():
            t1 = Thread(target=asking)
            t1.start()


    ask = True

    if direct == 'w' and path[-1] != 's':
        y -= 1


    elif direct == 'a' and path[-1] != 'd':
        x -= 1


    elif direct == 's' and path[-1] != 'w':
        y += 1


    elif direct == 'd' and path[-1] != 'a':
        x += 1


    elif direct == 'e':
        alive = False


    elif 'python' in direct:
        alive = False


    else:
        direct = path[-1]
        ask = False
        continue

    path.append(direct)

    
    if len(path) > length: 
        del path[0]
    



    

    path_reader()
    
    if snake_symbol == None:
        plane = [s.replace(snake_head, snake_body, 1) for s in plane]
    
        plane = [s.replace(snake_tail, ' ', 1) for s in plane]
 
    
    plane[y+tail_y] = plane[y+tail_y][0:x+tail_x] + ' ' + plane[y+tail_y][ x + tail_x + 1 :width] 
    #plane[y+tail_y] = plane[y+tail_y][0:x+tail_x] + snake_tail + plane[y+tail_y][ x + tail_x + 1 :width] 
    
    plane[y] = plane[y][0:x] + snake_head + plane[y][x+1:width]



    #path_reader()
    

    


    
    if (food_x == (x)) and (food_y == (y)):
        eaten = True
        
        



        
    
    os.system('cls')

    
    if alive == True:
        
        print(plane)
        if path[-1] == 'w' or path[-1] == 's':
            time.sleep(speed*10)

        
        elif path[-1] == 'a' or path[-1] == 'd':
            time.sleep(speed)


    if y == 0 or y == height or x == 0 or x == width - 5:
        alive = False


    for i in range(0, len(traceback_x)):

        if traceback_x[i] == (x) and traceback_y[i] == y:
            alive = False
        
        else:
            pass


    



#-------------------------------------------------------------------------------------DEATH---------------------------------------------------------------------------------------

y = 0
x = 0

branches_amount = (random.randrange(1, int(width/6))) # KAN ENDRES PÅ


print(plane)

for i in range(0, branches_amount):

    branches_trunk = []

    orientation = random.randrange(1, 4)

    if orientation == 1:
        direct_symb = '/'  #TODO: ALTERNATIV ER '(' og ')'
    
    elif orientation == 2:
        direct_symb = '|'
    
    elif orientation == 3:
        
        direct_symb = '⑊'


    x = choice([i for i in range(2, width-6) if i not in branches_trunk]) 
    branches_trunk.append(x)
    
    
    
    plane[y] = plane[y][0:x] + direct_symb + plane[y][x+1:width]
    os.system('cls')
    print(plane)



for i in range(1, height+1):
    y += 1
    x = 0
    facts = []
    branches_path = []
    

    for j in range(1, width-6):
        
        
        if plane[y-1][j] == '_':
            pass
        
        elif plane[y-1][j] == ' ':
            pass
        
        elif plane[y-1][j] == '/':
            facts.append(j)
            facts.append('left')
            
        
        elif plane[y-1][j] == '|': 
            
            facts.append(j)
            facts.append('straight')
            
        
        elif plane[y-1][j] == '⑊':
            facts.append(j)
            facts.append('right')
           
        
        else:
            pass

        branches_amount = int(len(facts)/2)
        

        
            
    for k in range(0, branches_amount): #TODO: READ FACTS

        
        x = facts[0]



        if facts[1] == 'left' and facts[0] != 0:
            x -=1
        
        elif facts[1] == 'straight':
            pass


        elif facts[1] == 'right' and facts[0] != width-4:
            x +=1

        else:
            print('stor feil har skjedd')
            time.sleep(2)
        

        if x not in branches_path:


            branches_path.append(x)

            side = choice([i for i in range(-1, 2) if i not in [0]])

            
            if facts[0] == 0 or facts[0] == 1 :
                orientation = random.randrange(2, 4)


            
            elif facts[0] == width-4 or facts[0] == width-3:
                orientation = random.randrange(1, 3)

            

            
            elif facts[1] == 'left':
                
                orientation_chance = random.randrange(40,75) # KAN ENDRES PÅ


                if orientation_chance >= 50:
                    orientation = 1
                
                elif orientation_chance < 50:
                    orientation = 2
                    
                
                else:
                    print('FEIL LINJE 181 CA')
                    os.abort
                


            

            elif facts[1] == 'straight':
                
                orientation_chance = random.randrange(25,75) #KAN ENDRES PÅ

                if orientation_chance >= 50:
                    orientation = 2
                
                elif orientation_chance < 50:
                    orientation = choice([i for i in range(1, 4) if i not in [2]]) 
                   

                else:
                    print('FEIL LINJE 181 CA')
                    os.abort



            elif facts[1] == 'right':
                
                orientation_chance = random.randrange(40,75) #KAN ENDRES PÅ

                if orientation_chance >= 50:
                    orientation = 3
                
                elif orientation_chance < 50:
                    orientation = 2
                
                else:
                    print('FEIL LINJE 181 CA')
                    os.abort  
                


            if orientation == 1:
                direct_symb = '/'  #TODO: ALTERNATIV ER '(' og ')'
            
            elif orientation == 2:
                direct_symb = '|'
            
            elif orientation == 3:
                
                direct_symb = '⑊'
            
                  

            
            
            
            plane[y] =  plane[y][0:x] + direct_symb + plane[y][x+1:width]

            del facts[0]
            del facts [0]
            os.system('cls')
            print(plane)
            
            branching_chance = random.randrange(20,60) # KAN ENDRES PÅ

            if branching_chance >= 50:

                if side == 1:

                    if direct_symb == '|':
                        direct_symb = '⑊'
                    
                    elif direct_symb == '/':
                        direct_symb = random.choice(['|', '⑊'])
                    
                    else:
                        direct_symb = ' '
                    

                elif side == -1:

                    if direct_symb == '|':
                        direct_symb = '/'
                    
                    elif direct_symb == '⑊':
                        direct_symb = random.choice(['|', '/'])
                    
                    else:
                        direct_symb = ' '

                plane[y] =  plane[y][0:x+side] + direct_symb + plane[y][x+side+1:width]






        elif x in branches_path:
            del facts[0]
            del facts[0]
            
            






            

    









#TODO: IDE, kan ha hele x-aksen eller y-aksen være mat, også når man treffer den blir man 1 lenger.
