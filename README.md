## Two Pairs of Animals

python3 -m http.server

---
This is a simple memory game; in this memory game the goal is to make as many pairs of cards by turning over cards with the same picture.

To make the game more difficult you can choose a different level. You can choose from the following levels:
*   Easy    2 x 4
*   Med     3 x 4
*   Hard    4 x 4

The images I use are of different animals.

Instructions of the game:
Remember the locations of the cards and make pairs of 2 of the same cards
You can increase the number of cards and the difficulty in the top left corner. By choosing the levels EASY, MED and HARD. When u want to start over, press the Reset button. You can start by turning the cards over. Good Luck!

[live site Two Pairs of Animals](https://gwenjo.github.io/memory-game/) 

## User Experience (UX)
---
<img src="readme-documents/mockup.jpg">

**User Story:**
* As a user, I want to play an easy and simple game when I have a break from work/ school.
* As a user, I want an easy navigation website so that I can play a game quickly.
* As a user, I want to have different levels in the game so that I can improve my memory skills.
* As a user, when the cards are turned over, I want to see if I have the correct card.

**Site owner’s Goal:**
* As the site owner, I want the user to have an easily accessible site.
* As the site owner, I want the user to have fun with this game.

**Strategy**

The goal is to build a simple and easy to navigate game with a welcome / instruction message with different game levels.
The game is fun for everyone whether they are young or old.

**Scope**

The goal for me was that I have a user-friendly, simple and gentle on the eyes game. With simple colors such as black, gray and white.

**Structure**

The structure of this game is divided over three pages, on the homepage, where the game starts right with the level of EASY.
On all pages, at the top left corner you can find the different levels that can be played. Consisting of EASY-MED and -HARD.
Everytime when u reset the game there will be a instruction message of the game.
The reset button allows you to shuffle the cards again and start a new game.

**Skeleton**

For the user stories I used [Balsamiq](https://balsamiq.com/) to create a nice and simple layout for the desktop and mobile screen.
Links to the wireframes can be found here:

Desktop Wireframes <br>
<img src="readme-documents/wireframe-desktop.png" width="60%" height="60%">

Desktop Wireframe, for bigger image [Click here](readme-documents/wireframe-desktop.png)

Tablet Wireframe <br>
<img src="readme-documents/wireframe-tablet.png" width="60%" height="60%">

Tablet Wireframe, for bigger image [Click here](readme-documents/wireframe-tablet.png)

Mobile Wireframe <br>
<img src="readme-documents/wireframe-mobile.png" width="60%" height="60%">

Mobile Wireframe, for bigger image [Click here](readme-documents/wireframe-mobile.png)

note: There are some changes in the layout. The result is not quite the same as the examples of the wireframes

**Surface**

The photographs for this memory game are from [Pexels](https://www.pexels.com/)  and made by different photographers.

## Features

###### When opening the page:
When opening the page you will find an instruction message of the game. When closing  the window you can immediately start the game.

###### Navigationbar:
The navigation bar used here is to choose different levels in the game. You can choose from EASY, MED, HARD.

###### Header:
All pages contain a reset button to restart the game.

###### Footer:
In the footer you will find my initials and this year 2021

###### Home/ EASY- Page:
For the EASY page, the rows of the deck consist of 2 x 4 cards

###### MED-Page:
For the MED page, the rows of the deck consist of 3 x 4 cards

###### Hard-Page:
For the HARD page, the rows of the deck consist of 4 x 4 cards


#### Features Left to Implement
Due to lack of time, I didn't get around to adding the following features to this game. But I hope to implement the following points in the near future.

*   Submitting a name: This way you can add your name to the game and compete with your friends.
*   Score Board: So, users can see where they are ranked when they play against each other and for the possibility to see their score.
*   Even more difficult levels to the game to challenge yourself or your friend.


## Technologies Used
---
* HTML5 – I used HTML to create the layout.
* CSS3 – I used CSS to style the layout.
* JavaScript - I have used JavaScript to rotate the cards in the deck and run a timer.
* Github – to create a repository.
* Gitpod – for working in my repository.
* Bootstrap – I have used bootstrap for my popup modal.


### Tools used
---

**[Balsamiq](https://balsamiq.com/)**
-   Before I started the website, I used the Balsamiq software to set up my wireframe. <br>

**[Google Fonts](https://fonts.google.com/)**
-   I've used Google Fonts to select the font for my website.

**[Pexels](https://pexels.com/)**
-   The pictures of the different animals were taken by several photographers who posted photos on pexels.com. All names of the photographers are listed in the media section below this page.

**[Resize It]( https://apps.apple.com/us/app/resize-it-image-resize/id844716779)**
- I used an app on my phone to easily crop the photos to the correct size.

**[Adobe Color](https://color.adobe.com/nl/create/color-wheel)**
-  For the color selection I have used adobe color. [Click here](readme-documents/adobe-color.jpg) to see the color pallet.

**[W3School](https://www.w3schools.com/)**
-	For the navbar I used W3schools.

**[Bootstrap](https://getbootstrap.com/)**
-	For the popup modal I used Bootstrap.

**[Css Beautifier](https://www.freeformatter.com/css-beautifier.html)**
-   I used this online tool for formatting my CSS code.

**[Am I Responsive Design](http://ami.responsivedesign.is)**
-   For the mockup in the beginning of my readme file I used Am I Responsive Design.

**[W3C HTML Validator](https://validator.w3.org/)**
-   I used this tool to validate my HTML code.

**[W3C CSS Validator](http://jigsaw.w3.org/css-validator/)**
-    I used this tool to validate my CSS code.

**[Dillinger](https://dillinger.io/)**
-   I used dillenger to make my README file more organized.

**[Wave Webaim](https://wave.webaim.org/)**
For the correct contrast of my website I used webaim to check the color.


### Typography
For the typography I have used the Yusei Magic font with a backup font of Sans-serif. It is a nice and easy to read font. The font is also easy to read on smaller devices.

### Color
I used the Adobe color scheme to choose the colors for my game.

<img src="readme-documents/adobe-color.jpg" width="60%" height="60%">

For this game and to help you concentrate well, I have chosen colors that are gentle on the eyes.

Body text: black

Background: #a9a9a9

After talking to my mentor she gave me some advice about adding more color to the game.  

Instruction message: #965e83;

Content-box behind the game: rgb(143, 103, 126);

## Testing
---
#### W3C URL / HTML Validator
When I ran the URL site through the validator, it revealed 1 error. I also ran the html pages individually through the W3C HTML validator and they all revealed 1 error.

<img src="readme-documents/testing/html-validator.jpg" width="60%" height="60%">

I changed "section class" to "main class". This is because I didn't need an h2-h6 element. When I corrected the files, I ran it through the validator again and it came back with no errors.

#### W3C CSS Validator
I ran the style.css page individually through the W3C CSS validator:
One error was found. Somewhere in the page I had an extra closing tab. 

<img src="readme-documents/testing/css-validator.jpg" width="60%" height="60%">

This has been corrected and passed through the W3C CSS validator again. The page passed without errors or warnings.

**User Story:**

As a user, I want to play an easy and simple game when I have a break from work/ school.

-   This game is a simple three level memory game. You will see the instructions when opening the page and start the game by clicking the "Start the Game!" button

<img src="readme-documents/testing/instruction-message.jpg" width="40%" height="60%">

As a user, I want an easy navigation website so that I can play a game quickly.

- A simple navigation bar is displayed in the left corner of the page.

- On a desktop, when opening the page and an instruction message will appear. If you press "Start the game", you can start the game immediately. A simple navigation bar is also displayed in the left corner of the page.

<img src="readme-documents/testing/easy.jpg" width="30%" height="25%">
<img src="readme-documents/testing/med.jpg" width="30%" height="60%">
<img src="readme-documents/testing/hard.jpg" width="30%" height="60%">

As a user, I want to have different levels in the game so that I can improve my memory skills.

-   On a mobile device, you will see a drop-down menu with the levels: EASY, MED and HARD.
<img src="readme-documents/testing/dropdown-mobile.jpg" width="60%" height="60%">

As a user, when the cards are turned over, I want to see if I have the correct card.

- If there is a wrong match, the cards will turn red for a short time and the cards will be turned over. If there is a good match, the cards turn green for a moment and the cards remain face up on the photo side. When all cards are turned over, the images remain on the page.  

**Site owner’s Goal:**

As the site owner, I want the user to have an easily accessible site.

- The website is easy going and everything speaks for itself. There is little but enough text to explain how to play the game.

As the site owner, I want the user to have fun with this game.

-   by adding simple and different levels to this game, I hope the user will have fun with the game


### Further testing of the game

The website has been tested on multiple browsers such as:
- Safari (IOS) - the game works as it should in Safari
- Google Chrome - the game works as it should in Google Chrome
- Mozilla Firefox - the game does not work quite as it should. When the cards are turned over, you will not see the red (no match) or green (match) colors of the cards. The game itself works fine.

The website has also been tested on various devices such as:
-   Desktop (15-17 inch)
-   Laptop (13 inch Macbook air)
-   Ipad mini
-   And various cell phones such as an Iphone8, Iphone x, Iphone 11, Samsung A70 and a SamsungS20.

All pages and navigation links work properly and have been checked individually.
-   Easy page
-   Med page
-   Hard page

**Home/ Easy Page**

**Instruction message:**
1. Go to the home page on a desktop, you will find an instruction message of the game. Below the message is a button that says “Start the game! When you click the button, the message will disappear and you can start the game. The button has been tested and works on all te above mentioned devices

**Navigation Bar:**
1.  You will see the navigation bar on the left. When you resize the screen to a smaller size, the menu will automatically adjust to a dropdown icon. When you click on it, the menu opens as a dropdown. Reading from top to bottom: EASY, MED, HARD.
2.  The functionality of the navbar has been tested, all links of the navigation are responsive. The pages have all been tested separately and work properly.

**Reset button:**
1. Below the title of the game “Two Pairs of Animals” you will find the Reset button. When pressing this button, the cards will be shuffled and start a new game.
2. Each time you press the Reset button, the game will restart and you will also see the instruction message appear back on the screen again. The button has been tested and works on all the above mentioned devices.

 
**The game:**
1. On this page you will find 2 rows of 4 cards. 
2. You can start by turning the cards over. 
3. Remember the locations of the cards and make pairs of 2 of the same cards
4. If there is a wrong match, the cards will turn red for a short time and the cards will be turned over. (see photo below)

<img src="readme-documents/testing/no-match.jpg" width="60%" height="60%">

5. If there is a good match, the cards turn green for a moment and the cards remain face up on the photo side. (see photo below)

<img src="readme-documents/testing/match.jpg" width="60%" height="60%">

6. When all cards are turned over, the images remain on the page. (see image below). 

<img src="readme-documents/testing/all-cards.jpg" width="60%" height="60%">

7. The game is finished when all card combinations have been made.

6. For usability and responsiveness on a mobile, the cards have been modified so that they can also be played on smaller devices. However, it is not really ideal to play this game on a smaller screen. When you play on a larger screen, this will be a little easier.

**Footer:**
1.  In the footer you will find my initials and the year in which this game was made.






##### Further Changes
 
-   In the beginning the layout was different I had an instruction button with a modal-popup next to it a reset button and a timer underneath. After consultation with my mentor, I adjusted my layout with the comments that were given.

-   I removed the timer function and applied the colors red and green to the turned cards in its place. Red for when the match is wrong and green for when it is a match.

<img src="readme-documents/testing/timer-mobile.jpg" width="60%" height="60%">

-   I removed the popup modal button for the instruction and turned it into an instruction message. This message will appear on your screen every time you reset the game. You can easily click away the message every time you want to start a (new) game.

-    my mentor told me my instruction message was too clear and it looked more like an error message. So I changed the message to a pink color. I chose pink because it goes well with gray.

<img src="readme-documents/testing/instruction-popup.jpg" width="60%" height="60%">


#### Lighthouse

These are the percentages of the lighthouse response, they have been tested for both the desktop version and the mobile version.

##### Desktop
<img src="readme-documents/lighthouse-desktop.jpg" width="50%" height="50%">


##### Mobile
<img src="readme-documents/lighthouse-mobile.jpg" width="50%" height="50%">

The response for the mobile light house is just below 90%

I am aware that the mobile version of the lighthouse does not have a top score and hope to change this in the future. I adjusted the photos, but the response from the lighthouse for the mobile version seems to be the same.

I am more than happy with the score for the desktop version of the lighthouse.


## Deployment
---
For the deployment of the Memory Game, I used Github pages. Follow the next steps to my URL:

1.  Log in to my GitHub account and find my repository (https://gwenjo.github.io/memory-game/), open the github page.
2.  Click on Settings and scroll down till you find GitHub Pages (see photo’s below)

<img src="readme-documents/github-settings.png" width="60%" height="60%">

3.  Select ‘None’ in the dropdown

<img src="readme-documents/github-pages.png" width="60%" height="60%">

4.  Then select ‘master’ and “Save

<img src="readme-documents/github-selectbranch.png" width="60%" height="60%">

5.  Now select ‘Branch: Master

<img src="readme-documents/github-save-master.png" width="60%" height="60%">

6.  In the green bar you will find the URL: https://gwenjo.github.io/memory-game//

<img src="readme-documents/github-sitename.png" width="60%" height="60%">

For the live version of the Memory Game! [Click here](https://gwenjo.github.io/memory-game/)

U can find information about cloning or downloading a repository [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Credits
---

### Content

-	The instructions were written by me (Gwendolyn Jo).
-   This navbar element is based on code components of from [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/).
-   For the beginning instruction message, “window closing” I used [W3schools](https://www.w3schools.com/jsref/met_win_close.asp). 
-   For the card setup I used code and adapted it for this game from [Marina Ferrera](https://marina-ferreira.github.io/tutorials/js/memory-game/). 
-   For the background change, colors (red / green) I used [Stackoverflow](https://stackoverflow.com/questions/32206223/onclick-change-background-color-with-javascript).
-   For several JavaScript parts I used code from [Tania Rascia](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) and [Marina Ferrera](https://marina-ferreira.github.io/tutorials/js/memory-game/).


### Media
The photographs I used for this memory game were obtained from [Pexels](https://www.pexels.com/) I’ve used photos from different photographers such as;

Front cards
-   Ethan Brooke (koala.jpg)
-   Elianne Dipp (whale.jpg)
-   Laura the Explaura (panda.jpg)
-   Lois (reindeer.jpg)
-   Josiah Farrow (alpaca.jpg)

-   Taryn Elliott (penguin.jpg)
-   Tomáš Malík (fox.jpg)
-   Ali Sufian Saghar (leopard.jpg)
-   Magda Ehlers (giraffe.jpg)
-   James Frid (parrot.jpg)

Back cards
-   Takeshi Arai (feather.jpg)

### Acknowledgements
- I want to thank my mentor Sinead O'Brien for always giving me good advice. I am so sad that you stopping mentoring for a while.
- Special thanks to the Slack community. If I had any questions, I could always trust that my questions were answered.
- I want to thank my friends and family who have viewed my website multiple times and have given me good criticism on my game.