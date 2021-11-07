const numbers= [29, 35, 36, 88, 44,55];

numbers.map(num => num*2);
numbers.filter(num => num>35);
numbers.find(num => num>33);
const total=numbers.reduce(( sum, num)=> {
       return sum+num
}, 0);




const friends= [ 
    {name: "Rashed", money: 12},
    {name: "munia", money: 25},
    {name: "kamal", money: 55},
    {name: " jorina", money: 77}
];

const totals= friends.reduce( (sum, friend) =>  sum+ friend.money,0);

console.log(totals);


const arr =[ 1 , 2, 3, 4, 5, 6, 7, 87, 9];

const sum= arr.reduce((a,b) => a+b);

console.log(sum);
