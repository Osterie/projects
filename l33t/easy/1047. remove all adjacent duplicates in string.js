 var removeDuplicates = function(s) {


    for (let i = 0; i < s.length; i++)
    {   
        if (s[i] == s[i+1])
        {   
            s = s.slice(0, i) + s.slice(i+2)
            i = 0
            continue
        }
    }


    for (let i = 0; i < s.length; i++)
    {   
        if (s[i] == s[i+1])
        {   
            s = s.slice(0, i) + s.slice(i+2)    
        }     
    }
    return s
 }
// makeGood('abBAcC')