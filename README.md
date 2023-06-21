# Product Language Framework

A comprehensive set of UX copywriting and style guidelines to use as a reference, or to adapt for your product team’s own copywriting and style guidelines.

As a standalone reference at [uxlanguage.com](https://uxlanguage.com):

- Useful and semi-universal guidelines for strong UX copywriting.
- Real examples that you can use as a starting point, and replace with examples from your own product.

As a framework for implementing your own copywriting and style guidelines:

- Uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to turn markdown-based documentation into a minimal but useful static site that can be built and deployed with [Vercel](https://vercel.co), [Netlify](https://netlify.com), or other tools of choice.

## Why use this language framework?

Content and copywriting guidelines are an amazing way for product teams to:

- **Create consistency** across the product to make a usable, predictable, and on-brand experience.
- **Empower teams** to make easier for anyone to write clear, effective, and useful content.
- **Drive positive change** in language standards to create compassionate, inclusive, and respectful products.

The problem is, guidelines take a lot of work to create. And, there’s a large barrier to adoption in that if they aren’t easily edited and made available to the rest of the team, they aren’t likely to be used.

While there are a few wonderful examples of existing content guidelines out out on the internet, these existing references tend to belong to large companies and aren’t open-sourced for easy repurposing and adaptation by other product teams for their own use.

This product language framework is a solution to these problems: it’s a complete set of useful and semi-universal guidelines for strong UX copywriting that can be customized and extended for your own product, and it’s a minimal static site that can be built, deployed, and put to use in seconds.

## Usage

### Fictional product: Foreword

To provide realistic and useful examples throughout the guidelines, the language guidelines are built to support a fictional product called **Foreword**—a platform for people to ask for and share recommendations for books to read, based on shared reading history. All examples use this fictional product as a basis.

### Using the guidelines

The content guidelines are written in markdown and entirely contained in the `docs` directory. Examples are included for most sections. To make this framework your own, go through the examples and update them to reflect real examples of your own product.

### Using the complete framework with static site generator

#### Installation

Clone the repo and run `npm install` to install project dependencies.

#### Local development

After completing the installation, run `npm run dev` to start the local development server. If you haven’t used Next.js before, reference the [documentation](https://nextjs.org/docs/getting-started) to learn more about routing and app structure.

#### Editing markdown

After making changes to a `.mdx` file in `/_docs`, you will need to reload the page to view your changes.

#### Usage component

To add more advanced examples for guidelines while still using markdown, this framework contains a component called `UsageBlock`. This component is a hacky way of using a fenced code block along with syntax highlighting to process the content as JSX, then also process its internal markdown. It looks like this:

````
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
````

You may find this introduces extra complexity in your project. Feel free to remove the formatting and use plain markdown instead.

### Using with Notion

The guidelines are also available as a [Notion template](https://www.notion.so/noukka/Product-Language-Framework-5465ba9f736a4e6eb299f9cd325eb1c3) thanks to [@noukkasigne](https://twitter.com/noukkasigne). (Note that the template isn’t synced with this framework and may not match in full.)

## Reuse for your own product

This framework has an MIT license and is intended for you to take it, adapt it, and re-use it however you see fit. If you use it to create your own, please [share a link with me](mailto:hey@quinnkeast.com)! I’d love to see what others do with it.
