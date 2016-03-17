react-hot-boilerplate
=====================

## COMMAND STRUCTURE
Basically, split a string by space characters into an array,
the first word is your command.  Then find the first word that
matches one of the keys on that command's options in this location.
All data comes from stores/GameData.


For example, here is the data for one location:
```
{
  id: 200,
  title: "In Front of Da Housss",
  go: { woods: 100, south: 100, west: 300 },
  look: {
    description: "You're in front of da housss.  It's pretty normal looking, except for the fact that it's enormous and purple and has a few well-kept basketball courts.  You think you smell waffles. There is a tall gate surrounding the property.",
    gate: "The gate has a strange symbol at the top. It looks impenetrable.",
    hudson: "Hudson's being Hudson, and pulling his leash to the west.  Maybe he smells something...",
    woods: "You know, they really weren't all that scary actually. You could go back there.",
    house: "The place is a palace, decidedly regal.",
    waffles: "There's a cartoon-like smoke trail coming from a plate on the upstairs window sill.  That must be where the waffles are cooling.",
    basketball: "These courts are immaculate, but not disused.  Whoever lives here is pretty serious about basketball.",
    symbol: "It's some kinda fancy letter 'P'."
  },
  use: {
    gate: "You can't do that, it's *very* locked."
  }
}
```

And here's a command someone might type there
```
> look over at Hudson
['look','over','at','hudson']
```

The command -- or verb -- is 'look', so we check the current location for a 'look' object.  Sure enough, there's one there.  Next search that object's keys for matches across all the other words in the sentence.  The first one that matches is our target or object.  Then you do something with the data stored there.  In the case of 'look', we dispatch an addMessage action to send it to the screen.  By using the first verb as a kind of key, you can easily separate behaviors for different kinds of data.

The minimal dev environment to enable live-editing React components.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to add a separate config for production with hot reloading disabled and minification enabled. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC
