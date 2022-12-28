/**
 * @param {string} s
 * @return {string}
 */

 var makeGood = function(s) {

    for (let i = 0; i < s.length; i++)
    {   
        if (s[i] == s[i].toLowerCase() && s[i].toUpperCase() == s[i+1])
        {   
            s = s.slice(0, i) + s.slice(i+2)
            i = 0
        }
        
        else if (s[i] == s[i].toUpperCase() &&  s[i].toLowerCase() == s[i+1])
        {
            s = s.slice(0, i) + s.slice(i+2) 
            i = 0
        }       
    }


    for (let i = 0; i < s.length; i++)
    {   
        if (s[i] == s[i].toLowerCase() && s[i].toUpperCase() == s[i+1])
        {   
            s = s.slice(0, i) + s.slice(i+2)
        }
        
        else if (s[i] == s[i].toUpperCase() &&  s[i].toLowerCase() == s[i+1])
        {
        s = s.slice(0, i) + s.slice(i+2) 
        }       
    }
    return s
 }
// makeGood('abBAcC')