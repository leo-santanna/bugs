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
        node.style.width = "80px";
        node.style.height = "80px";

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
