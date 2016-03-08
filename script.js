var Player = function(nameplate, race, spec){
    this.nameplate = nameplate;
    this.race = race;
    this.spec = spec;
    this.health = 0;
    this.force = 0;
}

var Spec = function(specname, )

Player.prototype.sheet = function(){
    console.log("-################-\nName: "+this.nameplate+"\nRace: "+this.race+"\nClass: "+this.spec+"\n-################-");
}

var player1 = new Player("Jake", "Human", "Warrior");

player1.sheet();