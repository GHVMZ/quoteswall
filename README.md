![Printscreen](https://anonmgur.com/up/e93f718f33f5126f9d0f0fe507ac9880.png)

# Quoteswall
Quoteswall is an app for managing your favorite quotes with CRUD-functionality.
Built on the MEAN-stack, [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/).

Also using [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/) (flex enabled), [Animate on scroll](https://github.com/michalsnik/aos), [Animate.css](https://github.com/daneden/animate.css), [FontAwesome](https://github.com/FortAwesome/Font-Awesome), [Angular UI-bootstrap](http://angular-ui.github.io/bootstrap/),  

## How to run
```bash
$ npm install
$ npm test
```
### Example data
```javascript
db.quotes.insert([{
    "text": "Technology is destructive only in the hands of people who do not realize that they are one and the same process as the universe.",
    "author": "Alan Watts",
    "heart": 10
},{
    "text": "But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything.",
    "author": "Alan Watts",
    "heart": 0
},{
    "text": "You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.",
    "author": "Alan Watts",
    "heart": 8
},{
    "text": "But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.",
    "author": "Alan Watts",
    "heart": 17
},{
    "text": "Never pretend to a love which you do not actually feel, for love is not ours to command.",
    "author": "Alan Watts",
    "heart": 35
},{
    "text": "Zen does not confuse spirituality with thinking about God while one is peeling potatoes. Zen spirituality is just to peel the potatoes.",
    "author": "Alan Watts",
    "heart": 13
},{
    "text": "I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.",
    "author": "Alan Watts",
    "heart": 5341
}])
```
