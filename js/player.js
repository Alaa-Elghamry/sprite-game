const playerImage = new Image();
playerImage.src = 'assets/imgs/player.png';
export class Player {
      constructor (game) {
            this.game= game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 250;
            this.image = document.getElementById('player');
            this.speedY = 0
  }
  update(){
      if (this.game.keys.includes('ArrowUp')) this.speedY = -1;
      else if (this.game.keys.includes('ArrowDown')) this.speedY = 1;
      else this.speedY=0
      this.y += this.speedY;
  }
  draw(context) { 
      // context.drawImage(playerImage,0,0,this.width,this.height, this.x, this.y, this.width,this.height);
      context.fillRect(this.x, this.y, this.width, this.height);
  }
}