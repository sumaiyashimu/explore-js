
function explain_callback( name, age, task){
    console.log('Good Morning', name);
    console.log('Your age is', age);
      task();
}

function washHand(){
    console.log('Wash your hand');
}

function takeShower(){
    console.log('take  shower');
}

explain_callback('sgor',44,washHand);
explain_callback('kobir uddin', 13,takeShower)