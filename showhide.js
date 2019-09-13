// Code for show hide game to handle all events, score, and other
let player_clicks = 0;
let player_score = 0;
const delay = 2000;
const targets = 5;

function main() {
  player_clicks = 0;
  player_score = 0;
  // get random spots on the board
  for (let i = 1; i <= 5; i++) {

    let target_num = getRandomInt(1,50);
    let target_cell_id = `td${target_num}`;
    let image_id = `img${target_num}`;
    // console.log(target_cell_id);
    $('#' + target_cell_id).append(`<img id=${image_id} src=fish.png />`);
  }
}

// Utility function to get a random table cell number
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Start the game!!!
main();
