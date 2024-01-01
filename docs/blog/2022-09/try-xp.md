# Extreme Programming (XP) for Project Development

This article is best viewed from the prospective of a proposal to an engineering manager as a set of guidelines for how an engineering team my organize itself.

## What is XP?

XP is a style of software development focusing on excellent application of programming techniques, clear communication, and teamwork, which allows us to accomplish things we previously could not even imagine. XP includes:

- A philosophy of software development based on the values of communication, feedback, simplicity, courage, and respect
- A body of practices proven useful in improving software development. The practices compliment each other, amplifying their effects. They are chosen as expressions of the values.
- A set of complementary principles, intellectual techniques for translating values into practices, useful when there isn't a practice handy for your particular problem.
- A community that shares these values and many of the same practices.

Put another way, XP is about optimizing the value creation stream within the context of an engineering team primarily by finding and eliminating wasteful practices. It demands clear goals, consistent observance of progress and reassessment along the way (responsibility and accountability are built-in). Architecture, scoping, estimates, implementation, continuous delivery are all treated as living processes to be scrutinized and improved incrementally.

Perhaps the best way to gain an initial understanding of XP is with an example:

## The Current Development Cycle (For Large Projects)

Think about your current development cycle (sprint). Is it clear to you what you'll be working on in the next week? Have your tasks been well thought-out, have acceptance criteria (as in, what does code-complete mean in concrete terms), and have estimates based on more than a few seconds of guesstimating? Do you receive feedback on your work from your own code, your team, QA, business-oriented people, customers? Do you know when your code will be deployed?

Let's take each of the above questions individually.

## Visibility into Upcoming Work

### The Problem

While many well-meaning project managers have historically tried to put work into two week sprints, what has ultimately resulted is typically a bucket of tasks that gets moved from sprint to sprint, thus entirely defeating the purpose of organizing work that way in the first place.

The visibility into specific tasks also leaves much to be desired. For new development (i.e. non-escalations), they often consist of nothing more than a title. If you're lucky, the person who put it in there had the time to think of a descriptive enough title for it to have context that can retain meaning beyond the meeting in which it was devised.

In the worst case, when the business falls into chaos for any number of reasons, these tasks start to become vague and nebulous with no clear definition or estimates.

This is often overwhelming for all parties in the value creation stream, causing increased and unnecessary cognitive load, more stress, and sub-optimal performance.

### The Solution

How does XP handle this? Well, let's first identify the problem. There are two obvious things lacking in the above description -- organization and communication. We can even go so far to say that organization is out of control because of poor communication.

The first place to attack in this situation is the planning process. A developer should never start a task without a firm description of what they've been charged to do, which includes acceptance criteria for what "done" means.

Given a well-defined task, a developer can make a more accurate estimate, providing the manager and him/herself with an understanding of what work will be done and when. Another benefit of this is that by default, QA is provided instructions on what to test. The communication contained within this task informs every part of the value creation stream, from the manager (who informs the business), the developer (who makes the thing), and QA (who makes sure the thing does what it's supposed to do).

Another improvement that can be made to reduce cognitive load and improve visibility is a well maintained sprint that makes use of <a href="https://www.atlassian.com/agile/kanban/boards" target="_blank">Kanban boards</a>, for example, to mange work. The sprint should be defined at the beginning of the cycle and be intentionally limited in scope. It should only contain work to be completed during that cycle.

XP values communication, holds the principal of flow important, which leads to the practice described above (this is a bit over-simplified, but it serves to explain the overall goals of XP).

## Feedback Throughout The Development Cycle

### The Problem

Stemming from the problem described in [Visibility into Upcoming Work](#visibility-into-upcoming-work), feedback created by development work tends to come in the short-term in the form of questions about what was done, rather than anything useful that would lead us to better performance and productivity. Because of this, we as developers don't receive worth-while feedback until much later in the project's development. Often, it comes in the form on dozens of bug tickets after most, if not all, initial development on a project is completed -- a particular issue that comes with myriad issues itself.

Furthermore, the existing development cycle itself doesn't lend itself to fast-feedback. Because we don't test, we don't get fast feedback from our code, both as we write it, and during integration (merge/build process). We don't pair program very often, so we don't get fast-feedback from our peers, especially when integrating frontend and backend code. Deployment of our code is uncertain and often comes with un-testable features (because of unclear requirements), so we don't get fast feedback from QA, which should be testing features as we release them.

### The Solution

As prescribed by the solution in the prior problem, writing good requirements with acceptance criteria provides upstream and downstream teams with the ability to give fast feedback, which improves the speed and quality produced by the value creation stream.

Likely the most important factor for XP teams in generating fast feedback is test-first programming. Writing a test before the code helps developers form and cement the interface for the feature they're about to write. It also forces the developer to wrangle the problem they're trying to solve -- if you can't write a test for something, perhaps you lack a full understanding of what you're trying to do; perhaps the problem could be broken down into smaller and easier-to-comprehend problems, alleviating unmanageable cognitive load.

Passing or failing tests also provide immediate feedback to the developer. They know immediately whether or not their code is doing what it's supposed to do.

[Studies have shown](../2022-08/why-test.md) that developing a robust suite of automated tests via test-first development reduces pre-release defects by 40%-90%. Imagine QA having almost nothing to do after development on a project is complete. Image all the context the development team won't have to re-load into their brains way after the initial work has been completed.

Even if developers write a test immediate after completing a feature, the benefits are compound downstream.

## Continuous Delivery

### The Problem

The benefits of continuous delivery is heavily muted when stakeholders don't trust the work that is being delivered. This again stems from the previous sections about visibility/transparency into work, and from a lack of quality and swift feedback throughout a development cycle. When the __whole team__, which includes business-oriented individuals as first-class members, is unsure about what is being delivered, trust cannot flow.

### The Solution

There isn't much to say here that hasn't already been said above. When the team is capable of providing clear visibility into its work and feedback mechanisms are in place and working well, trust will flow naturally.

## Adoption of XP

XP is not a system that can be mandated. Because responsibility and accountability are built-in, all members of a team must willingly buy-in and come to an agreement about which practices to adopt, how to implement them, and how to keep the team accountable for practicing them with unwavering observance.

Buy-in from management is also necessary, as XP can sometimes disrupt established business processes, or take power from certain stakeholders and imbue it instead with the engineering team. It bears repeating, to assuage fears, that XP expects that a business-oriented individual should be a first-class member of team, with full visibility into its processes.

## Implementation of Practices

A team adopting XP should decide amongst its members which practices should be adopted and how they will be practiced. A team need not try to implement every prescribed practice lest it fail by taking on too much at once.

XP is about incremental improvement with a dogmatic focus on eliminating waste and creating a more productive value creation stream, which ultimately translates to the consumer of the work being delivered the most important feature at any given time, in a fast and effective manner.

## Conclusion

As asserted in [What is XP](#what-is-xp), and described in each of the illustrated examples provided above, XP practices complement each other, amplifying their effects. Improving visibility/transparency improves feedback. Improving feedback improves the quality and speed of delivery. Ultimately, these culminate to create a team topology that is aligned with the value creation stream being delivered to the customer.

How can we not?

## Further Reading

Because I have attempted to describe XP in a condensed form, I cannot hope to describe everything entailed within the book.

Therefore, I highly recommend reading <a href="https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658/ref=sr_1_1?keywords=extreme+programming+explained&qid=1662314158&sprefix=Extreme+Program%2Caps%2C91&sr=8-1" target="_blank">Extreme Programming Explained</a>.

It is written in a very concise and approachable way that both development teams and management can comprehend.

Related, and equally approachable, is <a href="https://www.amazon.com/DevOps-Handbook-Second-World-Class-Organizations/dp/B09L56CT6N/ref=sr_1_1?keywords=the+devops+handbook&qid=1662314387&sprefix=The+DevOps+%2Caps%2C89&sr=8-1" target="_blank">The DevOps Handbook, Second Edition: How to Create World-Class Agility, Reliability, & Security in Technology Organizations</a>. It expands greatly on XP practices with real-world examples of how technology organizations have improved their teams.
