// Fusion:fujs


print('\n -----Oppgave 1----- \n');

var min_temp = [-10.2, -11.1, -5.1, -3.7, 0, 6.9, 7.8, 6.5, 4.2, -1.0, -6.1, -7.3];
var maks_temp = [8.9, 15.4, 13.8, 16.5, 21.2, 26.4, 29.1, 26.2, 21.8, 19.7, 15.0, 11.8];


print('minimum temperaturer:', min_temp);
print('maximum temperaturer:', maks_temp);


// ------------------------------------------------------------------------------------


print('\n -----Oppgave 2----- \n');

print('måned, min_temp, maks_temp');

//Løkken kjører 12 ganger og starter på 0 siden det er start index til lister og diverse, derfor er det "i+1" i første leddet av printen,
//siden den står får måneden
for (let i = 0; i <= 11; i++) 
{
    print(i+1, '\t' , min_temp[i], '\t', maks_temp[i]);
}


// ------------------------------------------------------------------------------------


print('\n -----Oppgave 3----- \n');

var differanse_temp = [];

//Gir forskjell mellom maks og min verdier i like store lister
function differanse(maks, min) 
{
    var dif_temp = [];
    
    if (len(maks) != len(min))
    {
        //om listene er forskjellige størrelser vil det føre til problemer, 
        //En mulig løsning kunne ha vært å utvide den listen som var for liten med 0 verdier,
        //men det hadde ikke gitt rett resultat.
        return print("Listene må være like store! feil svar om ikke");
    }

    for (let i = 0; i < maks.length; i++) 
    {
        dif_temp.push(maks[i] - min[i]);
    }
    
    return dif_temp;
}

differanse_temp = differanse(maks_temp, min_temp);

print('Forskjeller mellom maks og min temp:');
//Mer oversiktelig når det printes hver for seg syns jeg 
for (let i = 0; i< differanse_temp.length; i++)
{
    print(differanse_temp[i]);   
}


// ------------------------------------------------------------------------------------


print('\n -----Oppgave 4----- \n');

var gjennomsnitt_temp = [];

function gjennomsnitt(maks, min) 
{
    var gjen_temp = [];
    
    if (len(maks) != len(min))
    {
        return print("Listene må være like store! feil svar om ikke");
    }

    for (let i = 0; i < maks.length; i++) 
    {
        gjen_temp.push( ((maks[i] + min[i])/2).toFixed(1));
    }
    
    return gjen_temp;
}

gjennomsnitt_temp = gjennomsnitt(maks_temp, min_temp);

print('Gjennomsnitt av maks og min temp:');
//Mer oversiktelig når det printes hver for seg syns jeg 
for (let i = 0; i< gjennomsnitt_temp.length; i++)
{
    print(gjennomsnitt_temp[i]);   
}


// ------------------------------------------------------------------------------------


print('\n -----Oppgave 5----- \n');

print('Måned:', 'Temperatur for måned');

for (let i = 0; i < maks_temp.length; i++) 
{
    if (maks_temp[i] > 20)
    {
        print(i+1, '\t\t', maks_temp[i]);
    }
}


// ------------------------------------------------------------------------------------


print('\n -----Oppgave 6----- \n');



var måneder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


tegnTittel("TEMPERATURER", 'svart', '18', 'Calibri');
tegnAkser("Måned", "Temperatur", 0, 1, true, true, false);


function plot(xliste, yliste, graf_farge, tekst)
{   
    //Denne er ikke god for en generell funksjon, men er styr å lage en variabel for
    //min og maks x-verdi, i tillegg er ikke det heller en god løsning,
    //Siden det kan lage grafer som er veldig vanskelig å lese,
    //Konklusjon: dette er bra nokk for det den brukes til.
    tegnBrukXY(0, 13, -20, 30);
    
    tegnTekst(tekst, xliste[0], yliste[0] -3 , graf_farge , 0, 'left', 20, 'Calibri', 'bottom');
    
    tegnKurve(xliste, yliste, graf_farge, 'strek', 2);
}

// KOMMENTAR: siden det ikke var viktig å lage en "generell funksjon" har jeg ikke laget en løkke til å finne
// maks y-verdi og min-yverdi til tegnBrukXY
// Som med x-verdien kan det også lage vanskelige å lese grafer om man velger max og min for en akse verdi

plot(måneder, maks_temp         , "rød"     , "Maks temp");
plot(måneder, min_temp          , "svart"   , "Min temp");
plot(måneder, differanse_temp   , "grønn"   , "Diff maks og min");
plot(måneder, gjennomsnitt_temp , "blå"     , "Gjennomsnitt temp");