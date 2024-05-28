---
description: >-
  A brief review of Sarah Drasner's exceptional book, "Engineering Management for the Rest of Us," followed by a dive into my own experiences getting into management, including the big mistakes I made along the way.
head:
  - - meta
    - property: 'og:image'
      content: ''
  - - meta
    - name: 'twitter:image'
      content: ''
---

# Book Review: Engineering Management for the Rest of Us

I just finished reading Sarah Drasner's book, "Engineering Management for the Rest of Us."

I have been following Sarah's socials since she started her work as part of the Vue core team and I've always been in awe of both her deep knowledge of software engineering, and her insightful, introspective, and caring personality. It's easy to see why people are attracted to her and her work.

## Overview

Now, usually when I write about a book I've read, I tend to write in the format of a review, or as a practical way to exercise what I learned from it.

That's not the case here.

So, before I go further, I'll start with this: it's a great book and you should read it if you're interested in software engineering management. I totally recommend it. It's very approachable and BS-free.

What I'm interested in writing about this time is a kind of retrospective of my experience over the previous decade, both as an individual contributor as it relates to managers that have overseen me, and as a leader myself. I also want to expand a little on topics referenced in the book, but weren't necessarily covered in depth as they would have been beyond its scope. Most of what follows are all the thoughts and memories that resurfaced as I read the book.

For full disclosure, I have never officially been a people manager, but have been a team lead on several occasions, and it's from that experience I will draw when I talk about my time as a leader. I have also had lots of experience assisting with Project Management and Product work as well, so I think I can safely assert that I've run the gamut as it relates to how an engineering organization works (or doesn't, as the case may be).

I also want to clarify here as well, that the opinions below are not those of the book's author unless explicitly stated.

## Starting Off with Some Hot Takes

There's a theme in these that I want to convey: there is no short-cut.

### You Must Know Thyself

When leading others, it cannot be understated how important is is to understand yourself well -- this means knowing the subconscious biases that dictate why you think and behave the way you do (this was a major theme throughout Sarah's book).

It's akin to seeing your negative traits expressed through the behaviors of your children, if you've had that experience.

Sorry to you 20-somethings who want to be a boss, but it's not the right time for you. I've always thought a lot of myself, but I can honestly say that I didn't even really start to have a good grasp on who I was until very late into my 20s, and it was well into my 30s before I was comfortable with myself and could honestly say I know who I am.

The point here, is that you need to have seen some stuff before you can help others through it effectively.

Some people never get there. They're the types that are always quick to blame their external environment and never take ownership over results. For an example, imagine a teenager whining about how unfair their life is -- this concept just transmutes itself into other forms with age, and blame shifts from one topic to another.

### You Must Master Your Craft

I have known many successful managers who didn't have any technical expertise. However, I believe that you can't reach your true potential as a manager unless you have done, and continue to do, the work of those you're managing.

This follows nicely from my previous point -- you have to have struggled and fought your way through that career path before you can most effectively guide others in the same pursuit.

While it can certainly be done, it's much harder for a non-technical person to scope down major projects and features when they don't know what goes into building them.

One real danger here is promoting someone with insufficient engineering experience to management if that person thinks, as they sometimes will, they know all their is to know about software engineering. This kind of ego can lead to a lot of toxicity for the team it's inflicted upon. This easily could have been me if I'd accepted such offers earlier in my career. Fortunately, I knew I wasn't cut out for it at the time and declined.

### You Must Actually Want It

Don't let a bag of money trick you into management if you don't want the job, or at least aren't leaning heavily toward that direction.

Engineers don't by default make good managers. I've seen people who were amazing engineers take a management position, and come to hate their job and their life. This isn't good for them, and it's worse for the people they're supposed to be leading.

As a leader, if you're job to make sure your team feel psychologically safe enough to trust you and the team environment you create for the purpose of being effective and productive. If you hate your job, they'll often be incommunicative and work around you. You may think things are going fine for a bit, but it won't be long before everything blows up around you.

## My Screwups and Revelations

Now the fun part where I talk about my path, my screwups, and what I eventually came to understand about leading others.

### Early Career

A couple years into my career, I began to get a decent grasp on how our engineering org worked, and I quickly came to the conclusion that I hated it.

The team I was on was full of people I consider to be geniuses all, and I love them to this day. I liked all the managers I'd had, too. Everyone was always putting forth their honest best, but the way we worked as a collective was basically a constant dumpster fire.

Everything was late. Everything was reactive. Priorities and project scope would swing constantly and dramatically. Engineering wasn't trusted by the rest of the company. It sucked.

I always found myself thinking, "Why doesn't anyone try to change this?" In fairness to others, there were attempts to change things in a variety of ways, and we had reorgs like they were going out of style. Problem was, every attempt to change was always very high level and often just shifted seats from place to place.

Eventually, fed up with the lack of improvement, I decided that I'd start doing some research into how to make things better, purely out of self-preservation.

My manager at the time, with whom I'd often shared many of my thoughts, offered to buy me a couple books. I did some research and one of the books I'd asked for at the time was called "The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations."

In a way, the engineering organization this book described became a sort of North Star for me. Beyond the obvious topics about automation, etc., my biggest takeaway was the concept of building continuous feedback loops throughout the entire product-value pipeline.

To name a few: near immediate feedback from tests and dev tooling; fast feedback from CI/CD pipelines and git hooks; user feedback through telemetry and actually talking to them; feedback to and from Product, and so on.

We did almost none of this. It seemed to me like some impossible utopia at the time.

### Trying and Failing (Often) to Create Adoption

Sourced from the aforementioned book and countless other articles, blogs, books, etc., I now had some concrete ideas for things I felt we should try to accomplish in order to improve the engineering organization on the whole.

Some things were simple. I created some of the easier feedback loops that didn't require any real approval. I wrote style guides, product documentation, added linters and formatters, and eventually figured out git-hooks. These were great after some trial and error, and they helped immensely. Bugs deployed to production, at least in the repos that I was primarily responsible for, went way down.

Next, I started to work through ideas that required buy-in from others. This is where I hit my first road block, and it was a big one.

The first two things I wanted to introduce into projects were TypeScript for our JS projects, and some basic unit testing.

I did eventually get us on TypeScript, but never made any headway with unit tests.

Problem was, everyone was too busy being reactive and swamped with work to even consider trying to adopt something new. There was interest hypothetically, but it was never the right time.

I wasn't even able to get buy-in for TypeScript directly. What I ended up doing was using it in a project that, for the most part, I was the only one working on. Eventually, others saw me using it, and pretty much entirely out of curiosity, began to use it themselves in other projects. They thought it was neat -- that's pretty much it. By the time I left, any new JS projects used TS by default.

### Negotiation And Bias

Here's what I didn't understand at the time. I knew I had to get buy-in, but I didn't know how to get it. This is a skill I'm still trying very hard to learn.

I thought that I could convince people with logic. If I could effectively describe what I wanted to do, how it would benefit us, and provide studies, meta-analysis', and articles that proved out the cost/time-saving benefits, people would naturally just agree with me.

Nope. That got me nowhere. I was often placated, but ultimately, the answer was always no, even if no one said it.

People, by our very nature, like things to stay the same. You can get someone to intellectually agree with you, but that doesn't mean that they're actually going to modify their behavior.

Why? Because breaking habits requires energy and focus, which takes away those resources from other tasks. The subconscious basically biases us away from new information, regardless of its truthfulness.

That's why negotiation is largely an emotional exercise. Most, including myself at the time, incorrectly think of it as a logical one.

Most negotiations go like this: both parties stake their claim, and depending on the power-imbalance, one side gives up more than the other, but ultimately, both sides are likely to split some amount of the difference.

This is generally a bad result for one or both parties. Think about it. Both lost something, and typically one side will lose out far more.

Let's look at what both parties might be thinking, one at a time.

The party that gave up the most may now feel taken advantage of. This starts, or bends an existing relationship toward the negative. Do you think this party feels good about what happened, or is excited about the prospect they were negotiating for? I'd argue that they probably don't.

Perhaps the opposite party came out ahead, but they too may feel like they had to compromise their values to get there. Even if they don't, they still had to give up something.

This zero-sum game makes for losers all around, no matter the subject.

When negotiating for a positive result, the best course is through communication and real understanding. Listen to what they say they want, but that's often not what's motivating them. Ask questions about why they're asking for those things, and what they hope to accomplish by the completion of an agreement. Summarize their position and make them confirm it. This builds trust.

Similarly, don't necessarily just blurt out your demands. You want them to understand you position, just like you want them to know that you understand theirs. If there is some fundamental difference in opinion, guide them to your side by making them do the metal work to get there by asking them calibrated questions (usually "hows" and "whys"). When you can make them come to your conclusion under their own effort -- they're far more likely to give you what you need, and the same is true for their side based on your previous efforts.

The above is a very ad hoc summarization of Chris Voss' book on negotiation called "Never Split the Difference." It's a fantastic read as well.

### CI/CD That No One Wanted to Use

That's not entirely true. The engineer who did all the extremely difficult work migrating us toward this path wanted to use it, and so did I.

In fact, I was desperate for us to succeed here and constantly argued for its further adoption. I know what it could do for us, and I hated our long deploy calls with a passion.

Here's where we failed:

We didn't think of the pipelines as internal products with users. They were built with the assumption that people would just figure out how to use them and then do so. Instead, pretty much just me and the guy who built them would run them.

How did we expect others to adopt them when there was no written documentation and a terrible DX? Plus, they constantly changed, as was often necessary, which just made using them even more cumbersome.

We (mostly the engineer who built the architecture), had generally succeeded in replacing services on special snowflake servers with a system that rolled out nodes and containers like cattle. It was beautiful, and awesome, and no one else really cared.

By the time I left, most of these systems had been stabilized, and documentation had been written for usage. Unfortunately, there wasn't much appreciation for what had been accomplished because the road to get there had been so painful.

Let that be a lesson. It certainly was for me.

### We're Not All Wired The Same

One of the worst fallacies we can commit as leaders is to assume that others think like we do, and by extension, know the "why" behind what we ask them to do.

This was made most apparent to me when I reviewed the PRs (pull requests) of junior team members.

I've never been one to take offense at constructive criticism, so dry comments on PRs never bothered me. If I had questions or disagreements about a review, I'd initiate a discussion and we'd just work it out.

When I became more senior, my reviews of other seniors' PRs were more of the same. Everyone was experienced, and even when there were frustrating moments, no one ever took personal offense and we always got through them just fine.

This pattern didn't follow at all when I started reviewing juniors' PRs. I found that reviews involving myself would sometimes stall for long periods of time, and it felt like a couple of the juniors had started to avoid me.

Whenever I asked them if everything was okay, they'd just say yes and typically avoid conversations about changes in their behavior.

I knew pretty quickly that I was the problem, so instead of doing async PRs, I started doing them live (in person or over Zoom). This helped immensely.

I had inadvertently been making them feel like they weren't capable of doing the job. Their feelings were hurt, and their self-confidence had been wrecked.

I felt absolutely terrible after figuring this out, so I made sure to always run live reviews for juniors moving forward. This way, I could explain all my "whys," and they could see in my face and hear in my voice that I'm only trying to support and help them to learn and grow. This pretty much eliminated the avoidant behaviors to my great relief.

## I Could Probably Write a Book Myself

... if I don't stop somewhere, so I'll stop here. Maybe one day, though, after a whole lot more experience.

While I deviated pretty quickly from describing the book that initiated my desire to write on the subject, please do pick up and read Sarah's awesome book. Her experience shines through each page.

Lastly, what I really wanted to convey in this article was my own personal experiences and the problems I encountered along the way. They'll definitely be ones I think you'll face if you enter the world of engineering management, and maybe you can overcome them far more quickly than I did after reading this.

If you have similar stories that you'd like to share, or have opinions that differ from my own, I'd love to hear them. Reach out at any time via my linked socials.
