---
title: Conditionally rendering React components
description: Conditionally rendering React components
header: Call-by-name vs call-by-value
categories: [code]
published: true
crosspost_to_medium: true
---
Sometimes you want to optionally render a React component based upon some condition.

Let's say you have a component, `MyComponent`, that takes 3 props, isLoggedIn, isDevEnv, and name.

This component is going to say "hello" to the user when the user is logged in.  
If the user is not logged in, they will see a different component, `AuthButtons`.

This is a new, risky, experimental feature, so it's feature flagged- we will only display the `SayHello` component if the `isDevEnv` prop is true.

```
const SayHello = ({ name }) => <h1>Hello, {name}!</h1>;

const MyComponent = ({ isLoggedIn, isDevEnv, name }) => (
  <div>
    {isDevEnv && isLoggedIn ? <SayHello name={name} /> : <AuthButtons />}
  </div>
); 
```
This implementation isn't bad, but having conditional operators like the ternary or short-circuit can make components hard to read.  

This becomes a large problem when feature flags occur in large containers with multiple react-router components.

Other trouble spots where conditionals can get nasty are desktop and mobile specific components such as a mobile drawer or desktop nav bar.

Here's a desktop nav bar that should only appear if we are on the dev or testing environment, if it is _not_ mobile, and if the user is logged in -
```
class SomeComponent extends Component {
  render () {
    return (
      {(isDevEnv || isTestEnv) &&
        !isMobile &&
        isSignedIn && (
          <DesktopNavigation
            // props
          />
      )}
    )
  }  
}
```

Now imagine if the DesktopNavigation component had children. This can all turn into a deeply nested mess very quickly.

We can use a [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html), `conditionalRender`, to convert all those conditionals into a prop.
```
const ConditionalDesktopNavigation = conditionalRender(DesktopNavigation)

class SomeComponent extends Component {
  render () {
    return (
      <ConditionalDesktopNavigation
        condition={[(isDevEnv || isTestEnv), !isMobile, isSignedIn]}
        // other props
      />
    )
  }  
}  
```

What is this this amazing `conditionalRender` function?

I'm glad you asked!
With a couple functions from `recompose` and `ramda`, we can do this- 
```
import {
  branch,
  renderNothing,
  renderComponent,
  setPropTypes,
} from "recompose";
import { identity, compose, is, ifElse } from "ramda";

export const isArray = is(Array);
export const toArray = ifElse(isArray, identity, a => [a]);

export const every = array => array.every(i => i);
export const all = compose(
  every,
  toArray,
);

const conditionalRender = component =>
  branch(
    ({ condition }) => all(condition),
    renderComponent(component),
    renderNothing,
  )(component);

export default compose(
  setPropTypes({
    condition: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
      .isRequired,
  }),
  conditionalRender,
);
```

To make a component conditional, simply wrap it in this conditionalRender function and add the condition prop.  

If there are multiple conditions, use an array.

If you don't like the single use `ConditionalDesktopNavigation` variable in the example above,  
just `export default conditionalRender(DesktopNavigation)` in the DesktopNavigation file.  

`DesktopNavigation` only appears in Desktop Browsers, so IMO this naming scheme is justifiable.

Currently this conditionalRender [HOC](https://reactjs.org/docs/higher-order-components.html) only has one prop, `condition`, which is either an array or a bool.

I'm considering changing that to take three optional props-  
`condition`- one bool.  
`everyCondition`- an array where every bool must be true to render the child.  
`anyCondition`- an array where any bool must be true to render the child.

These decisions are hard.

Let me know what you think.

View the code at-

https://github.com/LifewayIT/react-conditional-render
