---
description: Hawaii-React-JS Shootout
header: Hawaii-React-JS Shootout
categories: [code]
published: true
crosspost_to_medium: true
---
At the start of 2018, I wanted to push myself to be more active in the community, namely by helping out my good friend, coworker, and mentor, Kevin Old with NashReact, and stepping up to speak.

At LifeWay we deal with epubs - lots and lots of epubs. Our users don't just read epubs. They highlight epubs, annotate epubs, and fill out workbook questions in epubs.

As one can imagine, properly indexing these epubs is challenging. In order to solve these problems across multiple environments, our resident epub expert developed an isomorphic Scala/ScalaJS library.

I get the pleasure of utilizing this library in our React/Redux apps. Occasionally this involves looking under the hood to debug problems. I may even commit a pull request here and there (okay, once per year).

Anyhow, back to the speaking thing, at the end of 2017, I had full intentions of speaking at NashReact on the scalajs-react React port. As I was preparing my talk I had a couple epiphanies-

1.) Clojure is much more beginner friendly JVM compile to JS language, with super easy lisp syntax. Also, Reagent is a great React implementation in ClojureScript.

2.) ReasonML is amazing- it does everything ScalaJS does, but is actually created by the creators of ReactJS, so the React support is top shelf.

So now I had a crisis on my hands, what language should I speak on at NashReact?

At the time, I was planning my 5 year anniversary trip to Kauai (an amazing "paid off the student loans" blowout celebration). After talking to a couple buddies, I realized that most people don't actually know the names of the Hawaiian islands. 

One Saturday afternoon, I sat on the couch watching house hunters with my wife and threw together this Hawaii geography quiz in React.

Then I did it again in Flow. Then again in TypeScript. Then, with help from a friend, I got it working in ClojureScript. ScalaJS was pretty easy with the awesome Slinky Scala port. Currently I'm hacking on the ReasonML edition.

Super cool community members like the Bernard Health lead dev and Lisp Sync organizer Charlie McMackin commited PRs to the repo, and came and spoke.

All in all, it's been a pretty fun project.

When I first started writing software, my side projects were super ambitious- like machine learning games, e-commerce sites, social networks, and other utterly unrealistic projects that pretty much require a full team, 2 years, and millions in funding.

If there's one thing I've leaned, it's that in order to walk the work/life balance line, while still keeping code fun on the weekends, keep side projects small and frequent.

Big and profound probably won't happen. At least for me they don't. Know yourself and be realistic.

If you can't knock it out after 2-3 episodes of house hunters (HGTV is great for not really paying attention to) with the family, your side project may be too big.

If you'd like to contribute a language, or compare/contrast implementations, check out the code at https://github.com/NashReact/hawaii-react-js .

I hope to write up a full compare/contrast and lessons learned post-mortem when it's all wrapped up, but who knows because balance, ya know?

If you want to practice your Island geography, the game's available at http://namethatisland-js.s3-website-us-east-1.amazonaws.com/ , or here in an iframe-

<iframe width="560" height="800" align="center" src="https://namethatisland-js.s3-website-us-east-1.amazonaws.com/" frameborder="0" allowfullscreen></iframe>

