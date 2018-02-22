function Bug (){
    var img = 'data:image/png;base64,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';
    var img_sec = 'data:image/png;base64,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';
    //var img = "#";

    this.id = 0;
    this._posy = (-50);
    this._rotation = 0;
    this._turningWhile = 0;
    this._isSpawning = true;
    this._hp = 100;
    this._amIDead = false;
    this._opacity = 1;


    this._turningChance = 30;
    this._fowardChance = 100 - this._turningChance;
    this._rotateThreshold = 2;
    this._movePxThreshold = 1;
    this._outOfScreenThreshold = 20;//usado para saber se o bug esta fora da tela
    this._posx = this.getRandomInt(this._outOfScreenThreshold, window.innerWidth - this._outOfScreenThreshold);

    this.setID = function(i){
      this.id = i;
    }

    this.getID = function(){
      return this.id;
    }

    this.getImg = function(c){
      if (c){
        return img_sec;
      }
      else {
        return img;
      }
    }
}

Bug.prototype.amINearWhichBounds = function(){
    var left = false, right = false, top = false, bottom = false;
    var w = window.innerWidth, h = window.innerHeight;

    if (this._posx > (w - (this._outOfScreenThreshold)))
        right = true;

    if (this._posy > (h - (this._outOfScreenThreshold)))
        top = true;

    if (this._posx < (this._outOfScreenThreshold))
        left = true;

    if (this._posy < (this._outOfScreenThreshold))
        bottom = true;

    return {top: top, bottom: bottom, left: left, right: right};

};

Bug.prototype.AmIOffScreen = function(){
    if (
            (!this._isSpawning) &&
            (
                !this.isBetween(this._posy,(-this._outOfScreenThreshold), window.innerHeight + this._outOfScreenThreshold) ||
                !this.isBetween(this._posx,(-this._outOfScreenThreshold), window.innerWidth + this._outOfScreenThreshold)
            )
        ){
        return true;
    }
    return false;
};

Bug.prototype.move = function(){
    if (this._amIDead)return;

    if (this.AmIOffScreen()){this.resetMe();}

    var moveFw, turnL, turnR;
    moveFw = this.shouldIMoveFoward();
    turnL = this.shouldITurnLeft();
    turnR = this.shouldITurnRight();

    if (this.spawnControl()){
      this.moveFoward();
      this.drawMe(this.id);
      return;
    }

    var mustGoTo = this.forceMeTurnThatWay();
    if (mustGoTo == "left"){
      this.turnLeft();
      this.drawMe(this.id);return;
    } else if (mustGoTo == "right"){
      this.turnRight();
      this.drawMe(this.id);return;
    }


    if (moveFw){this.moveFoward(); this.drawMe(this.id); return;};

    if (turnR && turnL){
        var unTie = Math.random() * 100;
        turnL = (unTie > 50);
        turnR = !turnL;
    }

    if (turnR){this.turnRight(); this.drawMe(this.id); return;};

    if(turnL){this.turnLeft(); this.drawMe(this.id); return;};
    this.drawMe(this.id);
};

Bug.prototype.spawnControl = function(){

      if (this._isSpawning && this._posy <= this._outOfScreenThreshold)
          return true;
      else if (this._isSpawning)
          this._isSpawning = false;
        return false;
};

Bug.prototype.shouldIMoveFoward = function(){

    var bounds = this.amINearWhichBounds();
    if (bounds.bottom && this._rotation == 0)
        return true;

    if (bounds.top || bounds.bottom || bounds.left || bounds.right)
        return false;

    if (this._turningWhile !== 0) return false;

    var chance = Math.random() * 100;
    return (chance < this._fowardChance);
};

Bug.prototype.shouldITurnLeft = function(){
    /*if (this._turningWhile >= 0) return false;

    if (this._turningWhile < 0) return true;
*/
    var chance = Math.random() * 100;
    return (chance < this._turningChance);
};

Bug.prototype.shouldITurnRight = function(){
    /*if (this._turningWhile <= 0) return false;

    if (this._turningWhile > 0) return true;
*/
    var chance = Math.random() * 100;
    return (chance < this._turningChance);
};

Bug.prototype.forceMeTurnThatWay = function(){
    var bounds = this.amINearWhichBounds();
    var moveTo = "";

    if (bounds.top || bounds.bottom || bounds.left || bounds.right)
    {
        this._turningWhile = 0;

        var quad = (this._rotation >= 180);
        if (quad && (moveTo === "") && ((bounds.top && bounds.right) || (bounds.bottom && bounds.right) || (bounds.bottom) || (bounds.bottom && bounds.left)/*180*/ || (bounds.left && bounds.top)))
            moveTo = "left";

        quad = (this._rotation < 180);
        if (quad && (moveTo === "") && ( (bounds.bottom) || (bounds.bottom && bounds.left)))
            moveTo = "left";


        quad = (this._rotation < 180);
        if (quad && (moveTo === "") && ((bounds.top) || (bounds.top && bounds.right) || (bounds.right) || (bounds.left && bounds.top) || (bounds.left) /*<180*/|| (bounds.bottom && bounds.right)))
            moveTo = "right";

        quad = (this._rotation >= 180);
        if (quad && (moveTo === "") && ((bounds.top) || (bounds.right) ||  (bounds.left) ))
            moveTo = "right";
    }
    return moveTo == ""?"dontMove":moveTo;
}

Bug.prototype.turnLeft = function(){
    if (this._turningWhile == 0)
    {
        this._turningWhile = Math.floor(Math.random() * 10)+1;
    }
    this._turningWhile = this._turningWhile - 1;
    this._rotation = this._rotation - this._rotateThreshold;
    this.moveFoward();
};

Bug.prototype.turnRight = function(){
    if (this._turningWhile == 0)
    {
        this._turningWhile = (-Math.floor(Math.random() * 10))-1;
    }
    this._turningWhile = this._turningWhile + 1;
    this._rotation = this._rotation + this._rotateThreshold;
    this.moveFoward();
};

Bug.prototype.moveFoward = function(){
    var tetaX = 0;//sin
    var tetaY = 0;//cos
    var sin = 0;
    var cos = 0;

    if (this._rotation >= 360)
        this._rotation = this._rotation - 360;
    if (this._rotation < 0)
        this._rotation = this._rotation + 360;

    tetaX = 360 - this._rotation;
    tetaY = this._rotation;

    if (tetaX >= 360)
        tetaX = tetaX - 360;

    if (tetaY >= 360)
        tetaY = tetaY - 360;

    sin = this.sinDegrees(tetaY);
    cos = this.cosDegrees(tetaX);

    this._posx = this._posx + (sin * this._movePxThreshold);
    this._posy =this._posy + (cos * this._movePxThreshold);

};

Bug.prototype.isBetween = function(val, min, max){
    if (val > min && val < max)
        return true;
    return false;
};

Bug.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Bug.prototype.drawMe = function(id){
    var bug = document.getElementById(this.id);
    bug.style.bottom = this._posy+"px";
    bug.style.left = this._posx+"px";
    bug.style.transform = "rotate("+this._rotation+"deg)";
};

Bug.prototype.resetMe = function(){
    this._posx = this.getRandomInt(this._outOfScreenThreshold, window.innerWidth - this._outOfScreenThreshold);
    this._posy = (-48);
    this._rotation = 0;
    this._turningWhile = 0;
    this._isSpawning = true;
    this._hp = 100;
    this._amIDead = false;
    this.drawMe(this.id);
};

Bug.prototype.setHealth = function(){
      var bugHpBar = document.getElementById("hp" + this.id);
      bugHpBar.parentElement.style.display = "block";

      if (this._hp < 40)
        bugHpBar.style.backgroundColor = "red";
      else if (this._hp < 70)
        bugHpBar.style.backgroundColor = "yellow";


      bugHpBar.style.width = this._hp+"%";
};

Bug.prototype.getHit = function(damage){
    if (this._hp <= 0)return;

    this._hp = (this._hp - damage) < 0 ? 0 : (this._hp - damage);
    this.setHealth();

    if (this._hp == 0)
    {
      this._amIDead = true;
      this.imDying();
    }
};

Bug.prototype.imDying = function(){
    var bug = document.getElementById(this.id);
    self = this;
    var it = setInterval(function(){
        self._opacity = self._opacity - 0.1;
        self._opacity = self._opacity < 0.1 ? 0 : self._opacity;
        bug.style.opacity = self._opacity;
        if (self._opacity < 0.00001){
          bug.style.zIndex = (-1000-self.id);
          clearInterval(it);
        }
    }, 100);
};

Bug.prototype.sinDegrees = function(angle) {return Math.sin(angle/180*Math.PI);};
Bug.prototype.cosDegrees = function(angle) {return Math.cos(angle/180*Math.PI);};








/*-----------------------------------------------------*/
function Swarm(){
    var swarmLenght = 50;
    var bugMoveInterval = 15;
    var bugColor = 'default';
    var color = 'red';

    var swarm = {};

    Swarm.prototype.setColor = function(cl){
      color = cl;
    }

    Swarm.prototype.getColor = function(){
      return color;
    }

    Swarm.prototype.setBugColor = function(cl){
      bugColor = cl;
    }

    Swarm.prototype.getBugColor = function(){
      return cl;
    }

    Swarm.prototype.spawnTheSwarm = function (){
      var i = 0;
      var tmId = 0;
      tmId = setInterval(function () {
          if (i < swarmLenght){
            spawnABug(i);
            i = i + 1;
          }
          else {
            clearInterval(tmId);
          }
      }, Math.floor(Math.random() * (1000 - 10 + 1)) + 10);
    };

    var spawnABug = function(id){
        swarm[id] = new Bug();
        swarm[id].setID(id);
        if (createBugElement(swarm[id]))
        {
            var iID = setInterval(function(){
                swarm[id].move();
            }, bugMoveInterval);
            swarm[id].iID = iID;
        }
    };

    var createBugElement = function(bug){
        var node = document.createElement("DIV");
        var img = document.createElement("IMG");
        var maxHp = document.createElement("DIV");
        var hp = document.createElement("DIV");

        node.appendChild(img);
        node.appendChild(maxHp);

        node.id = bug.getID();
        node.style.position = "fixed";
        node.style.bottom = "-100000px";
        node.style.left = "-100000px";
        node.style.transform = "rotate(0deg)";

        maxHp.style.position = "relative";
        maxHp.style.display = "none";
        maxHp.style.width = "100%";
        maxHp.style.height = "5px";
        maxHp.style.backgroundColor = "grey";
        maxHp.appendChild(hp);

        hp.id = 'hp' + node.id;
        hp.style.position = "absolute";
        hp.style.width = "100%";
        hp.style.height = "100%";
        hp.style.backgroundColor = "green";

        switch (bugColor){
          case 'red':
            img.src = bug.getImg(true);
          break;
          case 'yellow':
            img.src = bug.getImg();
          break;
          default:
            if (color == 'red'){
              img.src = bug.getImg(true);
              color = 'yellow';
            }
            else {
              img.src = bug.getImg();
              color = 'red';
            }
          break;
        }
        node.onclick = function(){
          swarm[node.id].getHit(swarm[node.id].getRandomInt(10, 40));
        }
        return (!!document.body.appendChild(node));
    };
}




$(document).ready(function(){
  $(document).on("keydown", function(e){
    if (e.ctrlKey && e.shiftKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.setBugColor('yellow');
      swarm.spawnTheSwarm();
      return;
    }

    if (e.ctrlKey && e.altKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.setBugColor('red');
      swarm.spawnTheSwarm();
      return;
    }

    if (e.ctrlKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.spawnTheSwarm();
    }
  });

});
