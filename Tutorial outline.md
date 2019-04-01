Start from App.Js from create-react app
delete code we don't want.

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

First things first, as with any JS we've defined in another file we'll need to import the

1 button appends to display
create buttons 0-9
Create button for +, set operator state and create value 2
create button for =, implement addition
create buttons for -, \*, / - implement these in equals
