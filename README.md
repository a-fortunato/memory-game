# Memory Game (React Native + Expo)
Classic Concentration / Memory cards game. This is a short coding challenge for an interview.

## **Game Instructions**
Right now it's as simple as it can be:

A fixed number of cards (currently 32) are shuffled and layed out facing down.
Touching a card reveals its content (right now it's a number, ideally it will be an image).
When two cards are flipped:
- if there's a match (have the same content), they disappear from the board
- if there's no match, they go back to being face down.

When all pairs have been found, the game has finished.
Now you can start over! :D


## **Things to add or to make better:**
- Dynamic amount of cards (maybe by selecting difficulty?)
- Scoring (it could be counting the times a couple cards have been flipped or mesuring the time)
- Friendlier interface, in the sense of adding instructions to the app, adding images instead of plain numbers... In general: more visual pleasure
- Animations!: Flipping the card and seeing it happen visually would be awesome!
- Multiplayer. Adding at least a local multiplayer could be fun! The scoring system decided could be use for each player and let the competition going

## **How to run the project**
You need to install Expo Go in your mobile/tablet to be able to test it in the device!
To check the project out as easiest possible:

Clone or download the repo and enter its folder.

Install dependencies with `npm install`.

Run the code with `npm start` (expo-cli is already installed in devDependencies, so it will take it from the folder ;D).

Open Expo Go in the mobile/tablet, and there you go!
For Android you can scan the QR and for iOS you'll have to paste the url on the webbrowser.

Enjoy!

