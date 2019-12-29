const initialrange = 8;
const three =3;
const gold = 100;
const silver = 50;
const bronze = 25;
let range = initialrange;
let rangeiterration = 4;
let totalprize = 0;
let prizes = [gold, silver, bronze];
let commoniterration = 1;
let confirmtext = 'Do you want to play a game?';
let byealert = 'You did not become a billionaire, but can.';
let agree = confirm(confirmtext);
let attempt = 3;
    while (agree) {
      let guessnum = Math.floor(Math.random() * range+1);
      console.log(guessnum);
                for (; attempt > 0; attempt-- ) {
                    let letstry = parseInt(prompt('Choose a roulet pocket number from 0 to '+
                    range+ '\nAttempts left: '+attempt+'\nTotal prize = '+ totalprize+ '$'+
                    '\nPossible prize on current attempt: '+commoniterration*prizes[three-attempt]+ '$'));
                            if (letstry === guessnum) {
                              totalprize = commoniterration*prizes[three-attempt]+totalprize;
                              commoniterration++;
                              range = range + rangeiterration;
                              agree = confirm('Congratulations, you won! Your prize is '+ totalprize+
                              '$'+'\nDo you want to continue?');
                              byealert = 'Thank you for your participation. Your prize is '+ totalprize+'$';
                              break;
                            }
                    }
              if (attempt === 0) {
                alert('Thank you for your participation.Your prize is '+ totalprize+ '$');
                byealert = 'Thank you for your participation. Your prize is '+ totalprize+'$';
                agree = confirm('Do you want to play Again?');
                commoniterration = 1;
                range = initialrange;
              }
              attempt = three;
    }
alert(byealert);
