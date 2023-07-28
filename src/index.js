import Character from './js/character.js';
import Team from './js/team.js';

const char1 = new Character('huy', '1', 'stable', 'attack');
const char2 = new Character('chuy', '1', 'stable', 'attack');
const team1 = new Team();
// team1.add(char1);
// team1.add(char2);
team1.addAll(char1, char2, char1);

console.log(team1.toArray());
