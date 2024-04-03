---
description: >-
  Software Engineering is an ever-changing landscape, and that has never been more true with the explosion of AI onto the scene. Here, we'll explore a roadmap to how an aspiring engineer, at any level of seniority, can acquire the skill-set necessary to become proficient with AI generally, machine learning (ML), natural language processing (NLP), and MLOps.
head:
  - - meta
    - property: 'og:image'
      content: 'https://brianpennington.dev/ai-table-stakes.png'
  - - meta
    - name: 'twitter:image'
      content: 'https://brianpennington.dev/ai-table-stakes.png'
---

# AI Is Table Stakes for Software Engineers: Part 2

In part 1 of this series, I describe why I think understanding and effectively utilizing AI will be invaluable, and in fact completely necessary, for software engineers in the future.

In part 2 of the series, we'll look at how an engineer at any level might accomplish that.

## Table Stakes - Where to Start

Here are my suggestions for how to get started on the path to becoming literate with AI.

### Start Simple - Use and Build With LLMs

Large Language Models (LLMs) are the simplest and most accessible way to start learning about AI right now. You don't have to be an engineer to use them, and there's not much of a barrier to entry to start building basic applications with them.

#### How to Do It

If you haven't already, start playing with ChatGPT. Create a free OpenAI account and try asking it some questions.

Start building some basic applications with existing tooling for LLMs like <a href="https://www.langchain.com/" target="_blank">LangChain</a> -- things you can do in less than 200-300 lines of code. Sound crazy? It's not.

Check out the YouTube channels <a href="https://www.youtube.com/@underfitted" target="_blank">Underfitted</a> and <a href="https://www.youtube.com/@AIJasonZ" target="_blank">AI Jason</a>, or similar channels for some basic ideas and tutorials of what you can build. <a href="https://twitter.com/LangChainAI" target="_blank">LangChain's X account</a> is proliferated with examples of what people are building.

Find something that you have to do that annoys you and write some code that makes an LLM do it for you.

Here are some things I've built in less than 300 lines of code:

- App that lets users ask questions about a proprietary knowledge base
- App that takes my financial documents (bank/card statements, etc), and builds a basic summary of my spending habits
- App that takes my resume and a job description, and offers suggestions for how to better tailor the resume for that specific job
- App that scrapes websites, and lets me ask questions about the content

Don't over-complicate it. It doesn't have to be perfect. Just build something.

#### What You'll Learn

- prompt engineering
- what tokens are
- what embeddings are
- what vector databases are
- how to use LangChain
- what LLMs can do, and the general principles behind how they work
- Retrieval Augmented Generation (RAG) - fancy way to say "make an LLM answer questions based on documents you give it"

### Level Up And Train Your Own Models

I'm not just talking about language models -- there are a lot of other, what some might call "traditional" machine learning models that can solve other classifications of problems -- like classification problems.

This is where things will start to get hard -- you'll need to start learning some of the basics in Statistics and Probability and Linear Algebra, and also some of the terminology involved around working with your own models. Don't worry, though. You won't need to go very deep at all with the math, and the terminology will come as you start learning and building.

You will likely need to spend a little money on your education here. I'd highly advise against trying to do this solo, as you'll waste a huge amount of time trying to figure things out that someone with experience can explain in a few minutes. You're also far more likely to give up early if you take the solo route.

#### How to Do It

To set yourself up for success, here are a few preparation suggestions:

- Pull out your old college level Stats & Probability book, or find something similar. You'll need a basic grasp on probability distributions and hypothesis testing (and the various properties and data analysis techniques involved in each)
- You'll need some basic understanding of what matrices are, how to do basic matrix math (this more or less just involves algebraic expressions)
- Eventually, it's helpful to have a basic grasp on linear transformations, as in Linear Algebra. Check out Tivadar Damka's Substack called <a href="https://thepalindrome.org/" target="_blank">The Palindrome</a> for some really cool and elucidating articles on the subject.

Don't worry about memorizing any of the formulas or solving a ton of problems. Just ensure that you fundamentally understand the ideas. You can always use the above resources as references any time you need them. For the most part, the computer will be doing all the actual math for you. This is almost entirely about building up a set of resources you'll need later.

Next, your best bet is to take a paid course on ML fundamentals to learn the basics around training and deploying your own models **in a real-world production environment**. Remember, theory counts for nothing if you can't deliver something with real value -- that's an essential skill.

#### Why You Should Pay Someone to Teach You

Here's the problem I ran into when I started this part of my journey, and why I decided to pay someone to teach me the basics.

I set myself up like I usually do when I want to learn something new -- I'll follow a whole slew of social accounts so I always have the experts appear in front of me when they have something to talk about. Those experts lead me to other experts and other products/technology that can help me in the process of learning.

Using the suggestions of those experts, I pick out a book or two that I think will have the most impact on me successfully building expertise on the subject I'm interested in.

Well, it wasn't enough this time. I started reading the books and I found that I had almost zero comprehension. Normally, I'll have enough understanding of a subject that I can pretty easily put together any concepts I'm not familiar with -- this time, almost every concept was unfamiliar to me.

You know those toys for toddlers where they put the shapes in the holes? It's like not understanding either of the concepts of shapes and holes, except in this case, shapes and holes are replaced with tons of technical jargon.

Most of the material out there assumes you have a basic scientific background on the subject.

That's why I decided to just pay for a course.

Disclaimer: The recommendations below are based solely on my own personal experiences and current understanding of the ML landscape. I add them because I think this is an important step in the process I'm attempting to describe and advocate for.

The one I landed on was <a href="https://ml.school/" target="_blank">ml.school</a>, put on by Santiago Valdarrama. At first, I was totally unsure if this was going to be worth it, but it turned out to be pure gold. This course is purely focused on learning how to think about and understand data, train models, and deploy them to production systems. You learn just enough theory, but one of the best values of this course (IMO), is the real-world techniques that Santiago teaches you based on his extensive career building real AI products. No BS here.

An alternative, with which I have no experience, but can say that knowing what I know now, seems like an attractive option, is <a href="https://www.data-science-infinity.com/" target="_blank">Data Science Infinity</a> with Andrew Jones. This course is more extensive and has a significant focus on the Data Science elements of the field. It also appears to be willing to do a little more hand-holding. It's also much more expensive.

Otherwise, there are a lot of other courses out there put out by the course-factory types (Udemy, Coursera, etc.). I personally tend to avoid these, as they don't seem to provide the kind of value I'm usually looking for. Your mileage may vary. They are, however, an option.

That said, you should always do your own research and find the resources that work for you. Any effort you put into choosing where you spend your time and money will be worth it.

#### What You'll Learn

- basic concepts of data science and engineering
- the most common models used in the real-world
- various techniques for how to train and fine-tune those models
- what kinds of problems can be solved by each
- how to put those models into production
- how to use the above and get paid well for it
- the basis for continued self-instruction

Most important in that list is the last bullet -- the basis for continued self-instruction.

Remember when I related the reasons for why I needed someone to help me get started? Well, this gave me what I needed to be able to understand all the technical and scientific context and direct my own future learning. Those books I mentioned not understanding? Now I can follow them just fine and have learned a whole lot more.

### Next Steps

Easy. Whatever you want. You've acquired an invaluable, in-demand skill set, and the tools necessary to make intelligent decisions about where to take your career, even if it's not closely focused on AI.
