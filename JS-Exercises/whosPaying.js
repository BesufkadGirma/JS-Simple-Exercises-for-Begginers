function whosPaying(names) {
    var randomIndex = Math.floor(Math.random()*names.length);
    console.log(`${names[randomIndex]} is going to buy lunch today!`)
}
//let's create an array containing name list
names = ['Ramin', 'Webster', 'Besufkad', 'Milka', 'Kathriyna'];
whosPaying(names);