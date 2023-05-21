const playerImage = new Image();
playerImage.src = 'assets/imgs/player.png';
export class Player {
      constructor (game) {
            this.game= game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = this.game.height - this.height;
            this.image = document.getElementById('player');
            console.log(playerImage);
  }
  update(){
        //this.x++;
  }
  draw(context) {
  
      context.drawImage(playerImage,0,0,this.width,this.height, this.x, this.y, this.width,this.height);
  }
}