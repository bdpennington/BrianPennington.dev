# AI-Assisted Coding Tool Evaluation

## TL;DR

Recommend GitHub CoPilot for experienced developers, but not necessarily juniors. These tools aren't well-suited for the inexperienced and can lead to bad outcomes. Conditionally, you can give it a try with juniors, with the option of pulling it if you see consistent mis-use. ​

## General Observations

​AI-assisted coding tools can be great for improving developer productivity and coding speed. The best use for them comes in the form of writing boilerplate[^1] code -- this is where the bulk of the improved productivity happens. They also do well with autocompletion of single lines of code -- an import line, a function definition, etc. ​

They all generally have one pitfall, however, and it's a big one. It's extremely easy to introduce bugs if a developer isn't extremely cautious about accepting full blocks of logic. This is where these tools can become a detriment to productivity. The code is, more often than not, wrong, or not quite what the developer intends. ​

These tools also depend heavily on the developer using them. They take cues from the way the developer writes code and uses that to tailor suggestions in a number of ways. The good part about this is that it helps a lot with consistency. The bad part is that if the developer has bad habits, or doesn't follow best practices, the suggestions become rather useless, or worse, wrong. ​

## Individual Product Evaluations

### Tabnine

Do not recommend 

- User experience was terrible, often gets in the way
- Decent for writing boilerplate
- Doesn't close code blocks (extremely frustrating)
- Not configurable
- More expensive than CoPilot ​

### GitHub CoPilot

Recommendation: Use with caveats See [tl;dr](#tldr)

- Great user experience, stays out of the way
- Great for writing boilerplate
- Improves productivity
- Somewhat configurable, but still not much
- Less expensive than Tabnine

## Awesome Example

I have been incrementally improving the in-code documentation in a ui-kit for anything I touch when making changes to its components.

CoPilot was able to write the entire documentation, with probably 95% accuracy, saving me tons of time.

It wrote all of the following:

```ts
/**
* @element bp-pill
*
* {@link https://supersecret/index.html?path=/story/pill--pills Storybook}
*
* @fires dismiss-pill {CustomEvent} - Fired when the user clicks the close icon.
*
* @prop {string} backgroundColor - The background color of the pill
* @prop {string} fontColor - The font color of the pill
* @prop {boolean} withCloseIcon - Whether or not to display the close icon
*
* @slot - The label for the pill
*
* @csspart pill - The pill element
* @csspart label - The label for the pill
* @csspart button - The close icon button
* @csspart button-text - The close icon button text
*/
```

This may not look like much, but it probably saved me at least a few minutes per component, between referencing variable names and writing up descriptions. It even guessed the link correctly based on links in other files.

Not only does this provide fantastic documentation for developers of the ui-kit, but also is used to generate a custom configuration file used by VS Code (code editor) to provide tooltips with formatted documentation for any developer who consumes the ui-kit components, and adds autocompletion for configuring the component. ​

Developers no longer have to reference the ui-kit code, or look at external sites to figure out how to use a component. They have it right in their editor. Just hover the mouse over the component name, get the full documentation. ​

[^1]: Boilerplate code can be things like building out an application's structure, routing tables, data store setup. Usually some necessary steps to support the implementation of the application's business logic.
