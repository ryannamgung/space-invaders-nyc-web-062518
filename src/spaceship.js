class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    if(crew.length > 0){
      this.docked = false;
    }else{
      this.docked = true;
    }

    this.crew = crew;
    crew.forEach((member) => {member.currentShip = this})
  }

}
