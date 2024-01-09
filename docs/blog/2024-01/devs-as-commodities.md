---
description: Is your role as a software engineer constantly misunderstood? As the field continues to grow and opportunities become increasingly competitive, engineers are being treated more and more like commodities -- undifferentiated from each other. That couldn't be farther from the truth. Read more to find out what this means for you and how to mitigate the personal and financial damages it can do to you.
head:
  - - meta
    - property: og:image
      content: https://brianpennington.dev/devs-as-commodities.jpg
  - - meta
    - name: twitter:image
      content: https://brianpennington.dev/devs-as-commodities.jpg
---

# The Commodification of Software Engineers

<br>

![Devs as Commodities](../../public/devs-as-commodities.jpg)

<br>

This topic has come up several times recently in one way or another, and is something I've experienced numerous times during my tenure as a professional engineer. I've seen people laid off, had their expertise belittled, and even had it used as a weapon against them during performance reviews, simply because of ignorance (literal, not a pejorative).

## What is it?

The term "commodification" in this context refers to the idea that software engineers are increasingly thought of as undifferentiated units of labor -- things, mostly the same, that can be shuffled around or shed in times of hardship without much consideration for things like institutionalized knowledge, specialization, or team cohesion.

## This is Probably for You

My audience, albeit small, is about 50% junior as seniority goes. My hopeful purpose in writing this is to share my experiences so that you, whether junior, or even a more senior dev who has experienced this and perhaps has not been able to put a name to it, might gain enough of an understanding so that the alarm bells start ringing in your head when someone starts treating you this way.

## The Signs

Let's cover some of the ways this concept is expressed.

### Throwing More People at a Problem

Perhaps the most frequent and obvious manifestation of this concept is when management thinks they can gain a linear increase in productivity by adding labor. Put simply, just throw more devs at a problem -- if two devs produce this much value, then four devs will double that.

If you take one thing from this article, let it be that this is never, ever, the case. At worst, the opposite can be true. The myth breaks down almost immediately once you start to examine it. Who has to onboard, train, and answer the inevitable endless questions for the new engineers so they can _start_ to become productive? The engineers who were already productive. Well, they're not anymore!

In order to gain any kind of significant short-term productivity from adding more labor, your engineering org really needs to have its stuff together, meaning docs are up-to-date, tests are in place to give immediate feedback when an dev unfamiliar with the project breaks something downstream, a sufficiently detailed and clear development plan exists, and so on. You also need capable recruiters and hiring managers who can find the right talent if sourcing externally. Does this sound like your org? I'll just go ahead and guess not.

Even worse, this "solution" is often proposed at the worst possible times -- when a project is way behind schedule. Panicking and throwing uninitiated people at a complex problem does not make it go faster.

There is a famous essay written about this very situation called <a href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month#The_mythical_man-month" target="_blank">"The Mythical Man Month"</a>, published way back in 1975 by Fred Brooks (a talented architect for IBM). The essay's namesake is given to the book that contains it, but there are many other highly valuable essays therein you should be familiar with.

### You're Just a [Insert Job Title Here]

Programming is easy, but software engineering is a difficult, complex, and creative process. With enough experience and a little bit of drive, you can quickly accumulate quite a few skills, if only through osmosis, that take your capabilities well past the responsibilities defined for you when you were hired. Unfortunately, unless you negotiate well for yourself, your title (and salary) is likely to remain the same.

For example, my title for many years was simply "Frontend Developer." However, over time, I started doing some work on various APIs, some database management, eventually getting involved in ops/architecture and automation of CI/CD pipelines, ultimately ending up as a team lead responsible for entire products and the many systems they encompassed. Still, I was technically employed as a Frontend Developer.

Even within the scope of frontend development, there is an extremely wide range of skills one can become increasingly specialized in that aren't really captured by the title. Beyond frontend frameworks, there is expertise in accessibility (I admit to having built buttons with divs), a variety of testing techniques and methodologies, project tooling (bundlers, transpilers, dev servers, linters, etc.), browser APIs (AudioContext, ResizeObserver, IntersectionObserver, et al), UX design (huge field by itself), monitoring, and even collecting feedback from actual users (you should be doing this).

Wait, we're not done yet! There's still the all important soft skills to consider. You have to work within a team that will constantly change based on the needs of the team and the business - you have to adapt, and constantly. You will interact with project managers and product owners, support teams, and have to manage your time, expectations from them and for yourself, and do it all amicably, hopefully fostering trust in you and your team along the way. Inevitably, you, the humble software engineer, will pick up bits of pieces of those individuals' and teams' skills to incorporate into yourself and become even more capable.

Now, try to imagine a title that encompasses all that, such that non-technical people can understand it. Never gonna happen, and unfortunately as a result, non-technical people will still bucket you in the simple categories of software engineers that have become the industry standard, totally unaware of the breadth that such a title encompasses.

It's a sad reality, and you have to really advocate for yourself with the right people to escape it. It's hard.

### Thinking Outsourced Talent is the Same as In-House Talent

Outsourced talent has its time and place, but is often used in the wrong way (as detailed in [Throwing More People at a Problem](#throwing-more-people-at-a-problem)). Sometimes, managers and executives tend to think of them as equal resources to in-house talent. This couldn't be further from the truth.

In-house developers usually know the business, the business' goals and practices, the people, and most relevant, the project itself. Even spending a couple months working on a project gives an engineer both a high level and specific low level understanding of how it works, where the kinks are, the project's standards, knowledge about the infrastructure, and experience with how actual users are using it.

Team cohesion is nothing to be sneezed at either. A popular way to describe the ways a teams accomplish cohesion and increased productivity is <a href="https://hr.mit.edu/learning-topics/teams/articles/stages-development" target="_blank">The Five Stages of Team Development</a>. Basically, what it mostly comes down to is building trust. This is all-important and a very underutilized and undervalued resource.

The last point to remember about the difference between the two types of labor is that when one of them is done, all the training and institutionalized product knowledge that was put into them walks right out the door, likely to never be seen again. This is the waste product of outsourced labor and should be carefully considered. Related to this is the fact that short- to mid-term outsourced talent have no skin in the game -- Steve Jobs explains this concept very well in <a href="https://www.youtube.com/watch?v=4n6LrehCPOQ" target="_blank">this talk</a>. I stand in whole-hearted agreement with his sentiments.

### I Have an Idea for an App, Can You Build It for Me?

I... I have words. Words better left unsaid. Sentences woven together with phrases proliferated with the four-letter kind, engraved with dehumanizing and otherwise malevolent emotions meant to batter and destroy the souls of their target.

Ahem. Anyway...

When someone says this to you, just say no. They have no idea what they're talking about, and I guarantee you their idea is stupid.

You can politely decline, but ensure that you do so explicitly. Nothing good will come of engagement unless you find joy in ridiculing and toying with them (which I totally support).

Recently, The Primeagen (a Twitch streamer and Netflix engineer btw), <a href="https://www.youtube.com/watch?v=tIgIF5lve8U" target="_blank">reacted</a> to an article entitled <a href="https://blobstreaming.org/i-just-need-a-programmer/" target="_blank">I Just Need a Programmer</a>, both of which have fantastic and entertaining takes on this subject. They're worth a read/watch.

## An Annoying Disclaimer

This article is not intended to reduce the personal value of those individuals or companies who find themselves described in this article as "management" and "outsourced talent." If those terms describe your position and you have read this article objectively without taking offense, then you have my thanks. Disparagement was not my goal. If you were offended, well, sorry I guess. Hopefully the above can help remove some of the affects of commodification for those that have to deal with it, and maybe you can apply some of the above logic to persons who aren't software engineers, as it does apply pretty generally.

## Fin

Thanks for reading. If you've had these kinds of things happen to you, feel free to share your thoughts and experiences with me at one of the social links on this site. I love hearing from everyone.
