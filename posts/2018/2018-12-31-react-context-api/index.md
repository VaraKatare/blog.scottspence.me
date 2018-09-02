---
path: '/react-context-api-getting-started'
date: '2018-12-31'
title: 'Using the React Context API  -  getting started'
tags:
  [
    'information',
    'learning',
    'guide',
    'getting started',
    'react',
    'api',
  ]
published: true
---

Lets use the React Context API to change theme in an app!

![](https://thepracticaldev.s3.amazonaws.com/i/d9l4fbo70mh5xdfy3fco.gif)

But first, **context**! 🤣

Ok terrible puns aside let's have a look at what the React Context API
is for and what it does. There's a great one liner from the [React
docs]...

> Context provides a way to pass data through the component tree
> without having to pass props down manually at every level.

Or in other words, you can use the React Context API to avoid [prop
drilling] if you need more detail on the concept then I suggest
checking out the links provided.

I've gone over implementing the React Context API in my Gatsby blog
which I documented as I did it; you can see [how that went here].

For this post we're going to extend the example we created for
[styled-components getting started] as it has the majority of the code
we'll need to get started with the React Context API. We're going to
extend that example manage the theme state of the example application.

I've added the con

Great resource on explaining the Context API from Leigh with a great
usecase

So let's go over theming the basic create react app again, this time
instead of adding state to the component we will use the React Context
API to use the state, for this example this approach isn't really
needed but I hope it will give you a clearer picture of ow to use it
in a React application.

First off, create a context component

The great thing with react is everything is a component, so let's
create a context component for the Theme select

<!-- Links -->

[how that went here]:
  https://blog.scottspence.me/react-context-api-with-gatsby
[styled-components getting started]:
  https://blog.scottspence.me/styled-components-getting-started
[example]: https://codesandbox.io/s/7wwr706nz0
[react docs]: https://reactjs.org/docs/context.html
[prop drilling]:
  https://blog.kentcdodds.com/prop-drilling-bb62e02cb691
