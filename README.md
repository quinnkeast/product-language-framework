# Product Language Framework

A ready-to-go starter kit for your product team’s copywriting and style guidelines:

- Useful and universal guidelines for strong UX copywriting
- Ready-to-go examples that you can use as a guideline for replacing with examples from your own product
- Uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to turn markdown-based documentation into a minimal but useful static site that can be built and deployed with [Vercel](https://vercel.co), [Netlify](https://netlify.com), or other tools of choice. 

## Why a product language framework?

Content guidlines are an amazing way for product teams to:

- **Create consistency** across the product to make a usable, predictable, and on-brand experience.
- **Empower teams** to make easier for anyone to write clear, effective, and useful content.
- **Create positive change** in language standards to create compassionate, inclusive, and respectful products.

The problem is, content guidelines are a lot of work to create. And, there’s a large barrier to adoption in that if they aren’t easily edited and made available to the rest of the team, they aren’t likely to be used.

While there are a few wonderful examples of existing content guidelines out in the wild, these existing references tend to belong to large companies and aren’t open-sourced for easy repurposing and adaptation by other product teams for their own use.

This product language framework is a solution to these problems: it’s a complete set of useful and universal guidelines for strong UX copywriting that can be customized for your own product, and it’s a minimal static site that can be built, deployed, and put to use in seconds.

## Usage

### Fictional product: Foreword

To provide realistic and useful examples throughout the guidelines, the language framework is built to support a fictional product: **Foreword**, a platform for people to ask for and share recommendations for books to read, based on shared reading history. All of the examples used in this framework use this fictional product as a basis.

### Using the guidelines

The content guidelines are written in Markdown and entirely contained in the `docs` directory. Examples are included for most sections. To make this framework your own, go through the examples and update them to reflect real examples of your own product.

### Using the complete framework with static site generator

#### Installation

Clone the repo and run `npm install` to install project dependencies.

#### Local development

After completing the installation, run `npm run dev` to start the local development server. If you haven’t used Next.js before, reference the [documentation](https://nextjs.org/docs/getting-started) to learn more about routing and app structure.

#### Usage component

To add more advanced examples for guidelines while still using markdown, this framework contains a component called `UsageBlock`. This component is a bit of a hacky way of using a fenced code block along with syntax highlighting to process the content as a React component, along with props and internal markdown. It looks like this in the markdown:

```
```usage
<Usage type="yes">
### Yes
- Why does “Dune” deserve a re-read?
</Usage>
<Usage type="no">
### No
- Why “Dune” deserves a re-read?
</Usage>
```
```

You may find this introduces extra complexity in your project: feel free to remove the formatting and use plain markdown instead.

## So uh can I just copy/paste the whole thing?

Yes. This framework has an MIT license and is intended for you to take it, adapt it, and re-use it however you see fit. If you use it to create your own, please share a link with me! I’d love to see what others do with it.
