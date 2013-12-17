# generator-meancrud

A [Yeoman](http://yeoman.io) generator that's really just one subgenerator - "entity".  This will tie a new model type into the [Mean.io stack](https://github.com/linnovate/mean), using the same conventions as the "Articles example" (https://github.com/linnovate/mean/blob/master/app/models/article.js, etc).

```
$ yo meancrud:entity 'ThingIWantToModel'
```

This will create the following files:

app\controllers\ThingIWantToModels.js
app\models\ThingIWantToModels.js
public\js\controllers\ThingIWantToModels.js
public\js\services\ThingIWantToModels.js
public\views\ThingIWantToModels\create.html
public\views\ThingIWantToModels\edit.html
public\views\ThingIWantToModels\list.html
public\views\ThingIWantToModels\view.html

It will also add code to the following files to hook everything together (note, this is pretty fragile, dependent on the way the code currently looks in the mean.io stack above):

public\js\config.js
public\js\app.js
config\routes.js
config\middlewares\authorization.js
app\views\includes\foot.jade
public\js\controllers\header.js

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-meancrud from npm, run:

```
$ npm install -g generator-meancrud
```

Finally, initiate the generator:

```
$ yo meancrud
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

