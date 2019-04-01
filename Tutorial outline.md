Start from App.Js from create-react app
delete code we don't want.

0.1
Develop skeleton structure - display region and buttons region. - link in provided CSS

1. Create a button.

The first component we will create is a Button, in time we will reuse this component for everything from the digits 0-9, to operators +, -, \* etc. For now we will just start with the number 1, which will append a 1 to the current value. Lets start with the HTML we would use to create a component like this.

1.1 Dumb HTML button

```
    <div className="button" >
      1
    </div>

```

1.2 React Component with properties

Our next step is to develop this button into something reusable. We will turn this into a react functional component. This will take the shape of a function which takes some properties (or props, for short) and returns some JSX/HTML. Since this is a new component we will create it in a new file which we will call Button.jsx

```
import React from "react";


const Button = props => {
  return (
    <div className="button" >
      {props.value}
    </div>
  );
};

export default Button

```

As you can see here, depending on the _props_ we pass in to this function, we will render some different HTML. Lets now hop back over to App.jsx and put this to use.

1.3 Use our new Button component.

First things first, as with any JS we've defined in another file we'll need to import this button

```
import Button from "./Button";
```

We can then use our component in the JSX style, much like it were an HTML element. Inside the <> tags we will define the properties we pass down to this component as shown.

```
render(){
  return (
    <Button value={1}>

  )
}
```

// Show screenshot

Now we have this resuable button we could quite easily repeat this line of code 10 times, changing '1' to '2', '3' etc until we have all of our digit buttons. First things first however we've created a visual button, but as of now it has no functionality, we can click it to our hearts content, but it won't do anything. To address this we are going to add an additional prop, this time a _function_ which will will plug in to the Button's onClick event.

//We could do this (to side of content)

```
render(){
  return (
    <Button value={1}>
    <Button value={2}>
    <Button value={3}>
    ...
  )
}
```

2 Add on-click functionality to our buttons.

In javascript, its no secret that functions can be passed around like variables, and in React there is no exception, functions can be passed in as props, just like primitives. We will create a function and pass it in as props to our Button, but lets first define that function, and what it should do when we click a button.

2.1 Store digits in state, and append digits

First things first we are going to be using the concept of state in React to store values about the current values stored and displayed in the calculator. Lets start with a single piece of state - _currentValue_, and create a function which will append a digit to this state.

2.1.1 set initial state in constructor

```
  constructor(props) {
    super(props);
    this.state = {
     currentValue: ""
    };
  }
```

We've initialised the currentValue as an empty string _You may be thinking - why do we not initialise this as 0? This will cause an issue later - can you see what it is? Feel free to try it out with 0 and see how it affects the calculator as you progress through this tutorial_ . Lets now create a function which will append a digit to this state.

2.1.2 Updating state with a function

```
  addDigit(d) {
      this.setState({
        currentValue: this.state.currentValue + "" + d
    }
  }

```

Here we're using the React built in _setState_ function. Any time you want to update state it is _essential_ that you use this method. This method takes one parameter, and object of state variable names to update, mapped to their new values. In this case we want to update the _currentValue_ in state, by appending a single digit. We have calculated our new value for this state with this snippet: `this.state.currentValue + "" + d` - We have added an empty string here to ensure the `+` operation is joining two strings together rather than doing numerical addition - Think about a real calculator: If you pressed the '1' button twice the display should read '11' rather than '2'.

Lets first go to Button.JS and put the wiring in place

```

return (
  <div className="number button" onClick={() => props.onClick(props.value)}> // check () usage
    {props.value}
  </div>
);

```

1 button appends to display
create buttons 0-9
Create button for +, set operator state and create value 2
create button for =, implement addition
create buttons for -, \*, / - implement these in equals

```

```
