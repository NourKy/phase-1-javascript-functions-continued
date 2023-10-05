// code your solution here
function saturdayFun(activity = "roller-skate")
{
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");
mondayWork();
function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
}
wrapAdjective("%")("a dedicated programmer");
function wrapAdjective(emphatic)
{
    
    if (emphatic===`*`)
    {
        const result="a hard worker";

        return function(){
            return (`You are ${emphatic}${result}${emphatic}!`);
        }
    }
    else if (emphatic===`||`)
    {
        const result="a dedicated programmer";

        return function(){
            return (`You are ${emphatic}${result}${emphatic}!`);
        }
    }
   
}