---
title: Applicative order vs normal order
description: Applicative order vs normal order
header: Applicative order vs normal order
categories: [code]
published: true
---
I've been working through Martin Odersky's intro to Scala course.

I'm loving the course, because its value extends far beyond learning the syntax of the Scala language.
The course follows the great Structure and Interpretation of Computer Programs book (btw, see my about for a great colorful ebook copy of that book).
I'm working through both the SICP book and Scala course together, working most the examples in Scheme and Scala.

Previously, I posted an example of call-by-name vs call-by-value in Scala. 
SICP mentions a the same topic, but uses a bit different language.

Here's an example Scheme procedure that calculates the sum of squaring two numbers- 
```
(define (square x) (* x x))

(define (sum-of-squares x y)
  (+ (square x) (square y)))
```
Given the combination `(sum-of-squares (+ 5 1) (* 5 2))`, this will get broken down like so-
```
(+ (square 6) (square 10))
(+ (* 6 6) (* 10 10))
(+ 36 100)
; 136
```
This is called _applicative-order_ evaluation.
In Odersky's course he refers to this as call-by-value.  
_Note_: this isn't exactly how the Scheme interpreter works, but more of an example of how to think about how it works.

Odersky also mentions call-by-name, where arguments aren't evaluated until later.
See my previous post for Scala examples.
The idea with this alternative method (confusingly referred to as _normal-order evaluation_) is that values are fully expanded, then reduced.
Here's the _normal-order_ example-
```
(+ (square (+ 5 1)) 
   (square (* 5 2)))

(+ (* (+ 5 1) (+ 5 1)) 
   (* (* 5 2) (* 5 2)))
(+...   
```
The big difference here is that applicative order is usually more efficient (see how `(+ 5 1)` is evaluated twice?), though that's certainly not always true.
I'm hoping to clarify the difference between grammar. Is it ok to use these terms interchangeably? I hope to find out.

SICP is mentioned in the course reading notes, but I don't think it's highlighted enough- read the book.
It's certainly making me ask questions about code I've been writing for years.

Disclaimer- this could all be lies! If anything I said was interesting, go read the primary sources. This is just a learning log of my initial understanding.

