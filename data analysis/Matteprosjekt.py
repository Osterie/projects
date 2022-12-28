import math
import datetime
import numbers
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os.path
import matplotlib as mpl
import time # brukes til time.sleep() som pauser koden i gitt antall sekunder
from os import path 



mittDatasett = "C:\\Users\\adria\\OneDrive\\Visual studio Python\\Koding prosjekt\\Matte\\Datasetter\\Ferdig_data.txt" #Endre denne basert på hvilken plassering datasettet har i filene dine

#Sjekker om datasett med all den forskjellige dataen i lag finnes
if path.exists(mittDatasett):
    datasett = pd.read_csv(mittDatasett)
else:
    #Datasett finnes ikke, produseres
    pris = pd.read_csv("./Datasetter/PowerPrice.txt", sep=";") # #Endre denne basert på hvilken plassering datasettet har i filene dine her og for den neste også.
    flow = pd.read_csv("./Datasetter/Flow.txt", sep=";") #bruker ordet flow for produksjon og forbruk. Endre PATH basert på hvilken plassering datasettet har
    #Splitter ut 2020-pris
    pris2020 = pris[pris['Aar'] == 2020].copy()
    #Splitter ut 2021-pris
    pris2021 = pris[pris['Aar'] == 2021].copy()
    #Nullstiller index 2021-pris
    pris2021.reset_index(drop=True, inplace=True)

    #Splitter ut 2020-flow
    flow2020 = flow[flow['F_Aar'] == 2020].copy()
    #Splitter ut 2021-flow
    flow2021 = flow[flow['F_Aar'] == 2021].copy()
    #Nullstiller index 2021-flow
    flow2021.reset_index(drop=True, inplace=True)

    #Looper 2021 datasett, legger til masse annen data som pris 2020, flow, forskjell og diverse, endrer senere navn på datasettet til et bedre ett
    for ind, row in pris2021.iterrows():

        #Legger til 2020
        pris2021['2020'] = '2020'

        #Legger til tidsstempel
        pris2021.loc[ind, "Timestamp2020"] = datetime.datetime(int("2020"),int(row["Mnd"]) , int(row["Dag"]), int(row["Time"]),0,0,0)
        pris2021.loc[ind, "Timestamp2021"] = datetime.datetime(int(row["Aar"]),int(row["Mnd"]) , int(row["Dag"]), int(row["Time"]),0,0,0)
    
        try:

            #Prøver å hente 2020 strømpris, legger til nytt felt Pris2020 til samme datasett med 2021 strømpris, legger til 2020 prisen om datoen for 2020 og 2021 prisene begge finnes
            tmp = pris2020.loc[(pris2020["Time"] == row["Time"]) & (pris2020["Dag"] == row["Dag"]) & (pris2020["Mnd"] == row["Mnd"])]
            pris2021.loc[ind,"Pris2020"] = tmp.iloc[0,5]
            pris2021 = pris2021.rename(columns={'PrisOre': 'Pris2021'}) #Endrer navn PrisOre til Pris2021
            pris2021 = pris2021.rename(columns={'Aar':'2021'}) #Endrer navn på Aar til 2021
            pris2021 = pris2021.rename(columns={'Ukedag':'Uke'})
            datasett = pris2021 #Endrer navnet på datasettet fra pris2021 til datasett siden det inneholder all data.

            #Legger til produksjon og forbruk for 2020
            tmp = flow2020.loc[(flow2020["F_Time"] == row["Time"])  & (flow2020["F_Dag"] == row["Dag"]) & (flow2020["F_Mnd"] == row["Mnd"])]
            datasett.loc[ind,"Prod2020"] = tmp.iloc[0,0]
            datasett.loc[ind,"Forbruk2020"] = tmp.iloc[0,1]

            #Legger til produksjon og forbruk for 2021
            tmp = flow2021.loc[(flow2021["F_Time"] == row["Time"])  & (flow2021["F_Dag"] == row["Dag"]) & (flow2021["F_Mnd"] == row["Mnd"])]
            datasett.loc[ind,"Prod2021"] = tmp.iloc[0,0]
            datasett.loc[ind,"Forbruk2021"] = tmp.iloc[0,1]

            #Finner ut av og legger til produksjon - forbruk for 2020 og 2021
            forskjell_2020 = flow2020.loc[(flow2020["F_Time"] == row["Time"])  & (flow2020["F_Dag"] == row["Dag"]) & (flow2020["F_Mnd"] == row["Mnd"])]
            datasett.loc[ind,"Dif2020"] = forskjell_2020.iloc[0,0] - forskjell_2020.iloc[0,1]
            forskjell_2021 = flow2021.loc[(flow2021["F_Time"] == row["Time"])  & (flow2021["F_Dag"] == row["Dag"]) & (flow2021["F_Mnd"] == row["Mnd"])]
            datasett.loc[ind,"Dif2021"] = forskjell_2021.iloc[0,0] - forskjell_2021.iloc[0,1]



        except:
            pass
    #cacher datasett til ny fil
    datasett.to_csv(mittDatasett)



#----------------------------------------------------------Ulike lister og diverse for bruk i ploting-------------------------------------------------

timer = []
for x in range(1,25,1):
    timer.append(x)

ind_t = np.arange(0,24,1) 

dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag']
ind_d = np.arange(1, 8, 1)

måneder = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des']
ind_m = np.arange(1, 13, 1)

ind_å = np.arange(0, 365, 31)




#-----------------------------------------------------Variabler for å kjøre menyen----------------------------------------


x = 0 #Brukes for sammenligning SUBPLOT
valg = []
run = True
comparing = 0
gyldig = ['BACK', 'BF', 'EXIT','COMPARE','PRIS2020','PRIS2021','PROD2020','PROD2021','FORBRUK2020','FORBRUK2021','DIF2020','DIF2021','TIME','UKE','MND','SKIP']
dataer = ['PRIS2020','PRIS2021','PROD2020','PROD2021','FORBRUK2020','FORBRUK2021','DIF2020','DIF2021']
tider = ['TIME','UKE','MND']
teller_valg = 0  #Denne brukes til å passe på at den ønsket dataen velges før tiden.
teller_grense = 0   #Denne brukes for å forsikre at kun 4 dataer velges.




#------------------------------------------------------Defs for å korte ned menyen-----------------------------------------


def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)

def info():
        
    print(' \n---------------------------------------------------------------------\n ')
    print('VIKTIG INFORMASJON')
    print('Skriv \'back\' eller \'b\' for å gå tilbake')
    print('Skriv \'bf\' for å gå tilbake raskere')
    print('Skriv \'exit\' eller \'e\' for å slutte snakkingen') 
    print('Skriv \'run\' eller \'r\' for å kjøre koden')
    print('\nDu kan sammenligne opp til 4 ting, dette gjør du ved å skrive hva du vil se på, f.eks \"PRIS2020\" også en tid, f.eks \"TIME\". Dette kan gjentas totalt 4 ganger.')
    print(' \n---------------------------------------------------------------------\n ')
    print('Her kan du se på dataene for det som står under, etter du har skrevet inn en av alternativene som ')
    print('står i parantesene Så kan du velge mellom å se på informasjon for timen, dagen og måneden\n')
    print('-Priser 2020(PRIS2020) \n-Priser 2021(PRIS2021\n')
    print('-Produksjon2020(PROD2020)\n-Produksjon2021(PROD2021)\n')
    print('-Forbruk2020(FORBRUK2020)\n-Forbruk2021(FORBRUK2021)\n')
    print('-Forskjell2020(DIF2020) (DIF er eksport når positiv og import når negativ)\n-Forskjell2021(DIF2021) (DIF er eksport når positiv og import når negativ)')

def back(): # går tilbake til start

    start = True
    run = True
    for i in range(1,4,1):
        print(' Tilbake til menyen'+'.'*i, end ='\r', flush =False) #legger til en . . . på "Går tilbake i menyen", ser skikkelig kult ut bare.
        time.sleep(0.5) # Litt dramatisk pause mellom . . .
        
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
    info()
def endring():
    global svar
    if svar == 'B':
        svar = 'BACK'
    
    elif svar == 'E':
        svar = 'EXIT'
    
    elif svar =='C':
        svar = 'COMPARE'

    elif svar == 'R':
        svar = 'RUN'
    
    else:
        pass

def behandling():
    global overskrift
    global ylabel
    global data


    if data in ['PRIS2020','PRIS2021']:
        overskrift = 'Snittpris for hver ' + tid + ' i ' + data.replace("pris","") #Fjerner ordet pris fra pris2020/2021, slik at kun året er igjen, slik vi får rett år i overskriften.
        ylabel = 'Prisøre/kWh'
        

    elif data in ['PROD2020','PROD2021']:
        overskrift = 'Produksjon kWh for hver ' + tid + ' i ' + data.replace("prod","") #Fjerner ordet pris fra pris2020/2021, slik at kun året er igjen, slik vi får rett år i overskriften.
        ylabel = 'Produksjon kWh'

    elif data in ['FORBRUK2020','FORBRUK2021']:
        overskrift = 'Forbruk kWh for hver ' + tid + ' i ' + data.replace("forbruk","") #Fjerner ordet pris fra pris2020/2021, slik at kun året er igjen, slik vi får rett år i overskriften.
        ylabel = 'Forbruk kWh'

    elif data in ['DIF2020','DIF2021']:
        overskrift = 'Eksport kWh for hver ' + tid + ' i ' + data.replace("dif","") #Fjerner ordet pris fra pris2020/2021, slik at kun året er igjen, slik vi får rett år i overskriften.
        ylabel = 'Eksport kWh'

def regler():
    global run
    global test
    global gyldig
    global comparing
    global teller_valg
    global valg
    global teller_grense

    if  len(valg) >= 2  and valg[-1] == valg[-2]: # Hvis listen har hvertfall 2 items, og de to siste items er like, så kan de ikke være korrekte, fjernes.
        print('svaret er ikke gyldig, prøv igjen')

        if valg[-1] in tider:
            teller_valg += 1

        elif valg[-1] in dataer:
            teller_valg -= 1
            teller_grense -= 1
        
        else:
            pass

        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')

    
    if 'EXIT' in valg:
        run = False
        valg = []

    if 'RUN' in valg:
        run = False
    
    if 'BACK' in valg and len(valg) >= 2:
        back()
        valg.pop(-1)

        if valg[-1] in tider:
            teller_valg += 1

        elif valg[-1] in dataer:
            teller_valg -= 1
            teller_grense -= 1
        
        else:
            pass

        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')

    if 'BF' in valg and len(valg) >= 2:
        valg.pop(-1)

        if valg[-1] in tider:
            teller_valg += 1
            valg.pop(-1)

        elif valg[-1] in dataer:
            teller_valg -= 1
            teller_grense -= 1
            valg.pop(-1)
        
        else:
            pass

        
        print((colored(255, 0, 0, valg)) + '\n')
    
    if len(valg) ==1 and 'BACK' in valg: 
        print('kan ikke gå tilbake')
        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')
    
    if svar not in gyldig:
        print('svaret er ikke gyldig, prøv igjen')
        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')
    
    if teller_valg > 1:
        print('Du må velge hvilken tid du vil se på!')
        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')
        teller_valg = 1
    
    elif teller_valg == -1:
        print('Du må velge hvilken data du vil se på!')
        valg.pop(-1)
        print((colored(255, 0, 0, valg)) + '\n')
        teller_valg = 0
   
    if teller_grense == 5:
        print('Du kan ikke velge mer data å se på, kjør koden!')
        valg.pop(-1)

    elif teller_grense == 4:
        print('Nå har du valgt så mange dataer som du kan, skriv en tid også kjør koden!')


    else:
        pass

#------------------------------------------------------------------------Menyen----------------------------------

info()
while run == True:
    svar = input('Hva vil du vite/gjøre?:').upper()
    endring()

    if svar in dataer:
        teller_valg += 1
        teller_grense += 1
    
    elif svar in tider:
        teller_valg -= 1

    else:
        pass

    
    valg.append(svar)


    
    print((colored(255, 0, 0, valg)) + '\n')
    regler()
    
if 'SKIP' in valg:
    valg.remove('SKIP')

if 'COMPARE' in valg:
    valg.remove('COMPARE')

if 'EXIT' in valg:
    valg.remove('EXIT')

print((colored(0, 255, 0, valg)) + '\n')

while len(valg) > 0:

    if valg[0] in dataer:
        data = valg[0]
        valg.pop(0)

    elif valg[0] in tider:
        tid = valg[0]
        valg.pop(0)
        
        if tid in ['TIME','UKE','MND']:
            x = x + 1

            if tid in ['TIME']:
                label = ind_t
                akse = timer
                
                
            elif tid in ['UKE']: 
                label = ind_d
                akse = dager
                

            elif tid in ['MND']:
                label = ind_m
                akse = måneder
                
                    
            behandling()
            plt.subplot(2,2,x)
            datasett.groupby([tid.capitalize()])[data.capitalize()].mean().plot(label=(overskrift), legend=True,layout='constrained').set_xticks(label)
            plt.ylabel(ylabel)


plt.show()






#Finne verdier
MaxPris = 0
MaxDato = "" 
MinPris = 1000
MinDato = "" 
antall = 0
totalpris = 0


# ENDRE HER, TRENGER 2020 i datasettet! tror jeg
for ind, row in datasett.iterrows():
    tmp = row["Pris2020"] #pris 2020, kan endres ved å sette inn navn av andre kolonner.
    dennePeriode = int(row["Mnd"]) #"Mnd" kan endres for "Time" og "Uke" for å se på de tidene.
    denne2020 = row["Pris2020"]
    antall = antall + 1
    
    if not math.isnan(row["Pris2020"]): #"Pris2020" kan byttes ut for f.eks "Pris2021" osv.
        totalpris = totalpris + row["Pris2020"] #"Pris2020" kan byttes ut for f.eks "Pris2021" osv.
    
    else:
        pass

    if dennePeriode==12:
        if tmp>MaxPris:
            MaxPris = tmp
            MaxDato = row["Timestamp2020"] # "2020" i timestamp må byttes ut for "2021" om man ser på data for 2021
        if tmp<MinPris:
            MinPris = tmp
            MinDato = row["Timestamp2020"] # "2020" i timestamp må byttes ut for "2021" om man ser på data for 2021

"""
print("Min strømpris: ", MinPris)
print("Min strømpris var : ", MinDato)
print("Maks strømpris: ", MaxPris)
print("Maks strømpris var : ", MaxDato)
print("Gjennomsnitt strømpris: ", totalpris/antall)
"""