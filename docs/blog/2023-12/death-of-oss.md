# New EU Regulations will Kill OSS (Not)

Bruce Gustafson, a self-styled "Developer Advocate," recently wrote an article on his blog entitled <a href="https://developersalliance.org/open-source-liability-is-coming/" target="_blank">Open Source Liability is Coming</a>, where he concludes the death of open source is neigh 👻, and that the desired path of the EU regulatory bodies he's described is even possible.

I call BS. It's a total misfire of judgement.

## Ignoring the Obvious

You can't put the genie back in the bottle. I'll state the obvious up front (from a software engineer's perspective): if we abandoned open source code, the world as we know it would immediately crash and burn. Developers are not monoliths with extensive knowledge of mathematics and other sciences (even computer science). If you think software sucks now, wait till we have to roll our own everything.

## Exploring Some Examples

Let's explore the issue of liability a little, from both open and closed source perspectives:

First and foremost, software, like any creative work, can take on an infinite number of purposes, and often those purposes and their consequences are entirely context-driven.

### In Open Source

Consider a simple function that when called, says it adds 2 to 2 and outputs the result. It might be used by some kid trying to do his math homework, or used by some commercial software that operates something consequential like autopilot.

Now, because we're not <a href="https://en.wikipedia.org/wiki/The_Analyst" target="_blank">infidels</a>, we all know that 2 + 2 = 5 for sufficiently large values of 2, and so the programmer updates their original code. The kid gets an 'F' on his homework, and a plane crashes. Drastically different consequences.

Now, where does the actual liability lie? In the first case, who cares. In the autopilot case, the maker of the autopilot software is clearly at fault for not ensuring their mission-critical software works correctly. It is in no way the fault of the author of that function, whose license clearly states that anyone that uses their code assumes the full risk of doing so.

### In Closed Source

Let's look at another example in that of LLMs like ChatGPT. This dove-tails nicely from my previous post about the ridiculous [NYT suit against OpenAI](./nyt-sues-openai.md). One interesting aspect of these models, which, perhaps counterintuitively, are actually <a href="https://ai.google.dev/docs/concepts#model_parameters" target="_blank">deterministic</a> in nature, is that not even the people who make them know exactly what they're capable of. In fact, researchers sometimes find that models have somehow managed to figure out <a href="https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/" target="_blank">topics they weren't intended to understand</a>.

There was a <a href="https://futurism.com/the-byte/car-dealership-ai" target="_blank">story</a> recently going around that a chatbot backed by the ChatGPT model sold a brand new Chevy for $1. The dealership supposedly just ate the cost because their lawyers weren't idiots. From my limited understanding of this case, it appears to have been completely unknown and accidental that the chatbot was capable of accomplishing this, but harm was done nevertheless. (BTW, this example isn't exactly what I meant by emergent capabilities, but it servers as a real-life and very relatable example for the purpose of discussion.)

## Sprouting a Field of Straw Men

How, though, do you assess the burden of liability when you can't know, by the very nature of a thing, what it's capable of? Easy: the liability exists with the entity that decided to use that product in part of its operation. Ignorance is not a defense.

I'm not a lawyer, but it seems like existing law is perfectly capable of handling these issues, and has been doing so for quite some time. Where this fails is when regulatory bodies, and their governments, fail to enforce the existing law, usually on purpose. I'll let you imagine for yourself why this is.

If a company that sells software is found to have intentionally misled consumers, or otherwise broken the law, they can and should be held liable.

What these EU regulatory bodies are really doing just seems to be intentionally confusing the matter by trying to muddy the waters around liability, and thus excuse themselves for their actual failure to enforce compliance of the existing legal frameworks governing a given industry.

Literally every argument that the author claims these regulatory bodies build up in this article is a straw man.

## I'm Not Dumb, You're Dumb!

I swear, more and more, if you just take a second to imagine that someone (corporations are people, my friend) might be the exact opposite of what they claim to be, you'll find yourself convinced of it more often that is comfortable.

## Actual Consumer Protection Solutions

So, what are some actually useful things these regulators can do?

- Update the toothless GDPR to actually protect individual privacy online rather than make sites implement a useless and irritating cookie banner (that no one understands, by the way).
- Actually regulate industries -- inspect on a regular basis. If there are five inspectors for 10,000 shops, your laws are only for show.
- Make fines prohibitive -- if a company can ignore the law, eat fines, and still profit by doing so, your laws are only for show.
- Prevent regulators from immediately going back into industry and close the revolving door
- Strengthen the legal framework around ownership. Let's use HP as an example here: I bought my printer -- I own it, it's mine, not HPs. I should be able to do whatever I want with it. If I want to put non-HP ink in it, then HP can go eat a bag of you know whats. If it doesn't have ink, I should still be able to use the printer's scanner, but HP uses software to prevent that. Make this criminal.
- Strengthen Right to Repair laws -- force companies to support products beyond the initial sale! Provide schematics, parts, and anything else necessary to repair a product. If a $2 part can fix a $3,000 laptop, and Apple says I have to buy a whole new motherboard that costs nearly as much as the whole laptop, they can share the bag with HP. Make this criminal.
