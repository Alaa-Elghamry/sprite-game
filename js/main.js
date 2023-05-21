 import { Player } from './player.js';

 window.addEventListener('load', function(){
 const canvas = document.getElementById('canvas1');
 const ctx = canvas.getContext('2d' );
 canvas.width = 1280;
 canvas.height = 720;

// InputHandler Class
 class InputHandler {
   constructor (game) {
         this.game= game;
         window.addEventListener('keydown', e => {
             if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && this.game.keys.indexOf(e.key) === -1) {
                 this.game.keys.push(e.key)
                console.log(this.game.keys);
         }});
         window.addEventListener('keyup', e =>{
             if (this.game.keys.indexOf(e.key) > -1){
                 this.game.keys.splice (this.game.keys.indexOf(e.key), 1);
             }
             console.log(this.game.keys);
         });
   }
 }

// Main Game Class
 class Game {
 constructor (width, height) {
 this.width = width;
 this.height = height;
 this.x=0;
 this.y=0;
 this.keys =[];
 this.player = new Player(this);
 this.InputHandler = new InputHandler(this);
 }
 update() {
// this.player.update();
 }
 draw(context) {
 this.player.draw(context);
 }
 }

 const game = new Game (canvas.width, canvas.height);
 console.log(game);

 function animate() {
   //  game.update();
    game.draw(ctx);
 requestAnimationFrame(animate);
 }
 animate();
 });