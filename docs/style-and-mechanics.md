---
title: Style & mechanics
author: Quinn Keast
date: 2020-02-17
order: 04
---

We have an editorial style for our digital products to help us keep our copy clear and consistent, and specific guidelines to write and structure content to make it easy for users to understand and act on.

## Abbreviations & acronyms

Avoid abbreviations and acronyms when possible.

```usage
<Usage type="yes">
### Yes
- for example
</Usage>
<Usage type="no">
### No
- e.g.
</Usage>
```

## Adverbs and adjectives

Try to avoid adjectives and adverbs. Using adjectives and adverbs (for example, “easy” read) shapes perception and sets expectations, and can inadvertently lead to a negative emotional experience for our users. 

If someone is a newer reader, then describing a book as “easy” might help them choose to read it. But if it takes them a long time to read it, they may feel bad because the book was supposed to be “easy,” and it still took them a while.

Instead, look for opportunities to capture the same meaning through other forms. What makes an “easy” book easy relative to other books? Can that be used as a scale of relative difficulty?

## Active voice vs. passive voice

Use active voice and avoid passive voice. In active voice, the subject of the sentence does the action. In passive voice, the subject of the sentence has the action done to it.

```usage
<Usage type="yes">
### Yes
- Added book to list.
</Usage>
<Usage type="no">
### No
- The book was added to the list.
</Usage>
```

Use passive voice when you don’t want to assign responsibility for an action. This can reduce tension in a message.

```usage
<Usage type="yes">
### Yes
- Email address was incorrect.
</Usage>
<Usage type="no">
### No
- Invalid email address.
</Usage>
```

## Present tense

Use present tense to describe the result of actions.

```usage
<Usage type="yes">
### Yes
- Book added
</Usage>
<Usage type="no">
### No
- Book has been added
</Usage>
```

## Capitalization

We use different forms of capitalization depending on the context.

For example, use title case for book names, and use sentence case for book descriptions. (If you’re not sure which capitalization to use, check the design system for existing conventions.)

All-caps should be used sparingly and only for specific purposes (all-caps copy is less accessible and harder to read). Never use all-caps within a sentence.

## Contractions

Use contractions like “we’ll” or “there’s!” They make our writing more conversational. 

However, don’t rely on contractions alone for a conversational voice. When we translate copy for our global audience, they almost won’t carry over.

## Conversational writing

Our voice is conversational. When we’re talking, we connect words with articles like “the,” “for,” “these,” and “an.” If we remove these from our writing, it makes our copy feel stiff and complicated. We can be flexible, though. If space is a limitation, the article can be omitted.

```usage
<Usage type="yes">
### Yes
- Choose a book
- Save your changes
</Usage>
<Usage type="no">
### No
- Choose book
- Save changes
</Usage>
```

## Avoid directional language

Avoid any instructions or language that requires the user to see the layout or design of a page or element.

```usage
<Usage type="yes">
### Yes
- Choose a new book.
</Usage>
<Usage type="no">
### No
- Choose a new book at the bottom right of this page.
</Usage>
```

## Numbers

Use the numeral when numbers appear in copy. This includes ordinals (numbers that tell the position of something in a list).

```usage
<Usage type="yes">
### Yes
- You have 3 new recommendations
- 2 days left to share a recommendation
- This is your 3rd recommendation
</Usage>
<Usage type="no">
### No
- You have three new recommendations
- Two days left to share a recommendation
- This is your third recommendation
</Usage>
```

When writing in English, numbers over 3 digits get commas.

```usage
<Usage type="yes">
### Yes
- 144
- 1,200
</Usage>
```

When writing in languages like German, Swedish, and Dutch, numbers over 3 digits get a period.

```usage
<Usage type="yes">
### Yes
- 144
- 1.200
</Usage>
```

### Dates

Spell out the day of the week and the month whenever possible. Abbreviate when space is a limitation. When abbreviated in interface headings and labels, do not use a period.

The order of day and month should match the user’s locale.

```usage
<Usage type="yes">
### Yes
- **USA:**  
Thursday, April 16  
April 16  
Apr 16
- **Germany:**  
Thursday, 16 April  
16 April  
16 Apr
</Usage>
```

When possible, use natural language to describe dates.

```usage
<Usage type="yes">
### Yes
- Today
- Yesterday
- Tomorrow
- This week
- Next week
- Two weeks from now
</Usage>
```

### Fractions

Use typographic fractions when referencing measurements in ingredients. Don’t spell fractions out.

```usage
<Usage type="yes">
### Yes
- ½
</Usage>
<Usage type="no">
### No
- 1/2
- one-half
</Usage>
```

### Percentages

Use the % symbol instead of spelling out “percent.”

```usage
<Usage type="yes">
### Yes
- 2%
</Usage>
<Usage type="no">
### No
- Two percent
</Usage>
```

### Ranges and spans

Use an en dash (`–`) to indicate a range or span of numbers. Do not use spaces before and after the en dash.

```usage
<Usage type="yes">
### Yes
- 10–20 minute read
</Usage>
```

An en dash is slightly wider than a hyphen (`-`) but narrower than an em dash (`—`).

### Money

When writing about US, CA, or AU currency, use the dollar sign ($) before the amount. Always include a decimal and number of cents. Do not insert a space between the dollar sign and the number.

```usage
<Usage type="yes">
### Yes
- $10.00
- $42.99
</Usage>
```

When writing about EUR currency, use the Euro sign (€) after the amount. This applies in English, Dutch, Irish, and Maltese. 

In all other official EU languages the order is reversed: first the amount, then a space and the Euro sign.

Always include a comma and number of cents. Note that English, Irish, and Maltese use a period instead of a comma. Look up local languages to confirm the correct separator for decimals.

```usage
<Usage type="yes">
### Yes
- **In English, Dutch, Irish, and Maltese**  
€10,00 or €10.00  
€42,99 or €42.99

- **In all other official EU languages**  
10,00 €  
42,99 €
</Usage>
```

### Telephone numbers

Use dashes without spaces between numbers. Don’t use a country code.

```usage
<Usage type="yes">
### Yes
- 123-456-7890
- 012-345-678-910
- 02-345-6789
</Usage>
```

### Temperature

Use the degree symbol and capital C abbreviation for Celsius (everywhere except the USA) or capital F abbreviation for Fahrenheit (USA only). Don’t insert spaces between the number and the abbreviation.

```usage
<Usage type="yes">
### Yes
- 220°C
- 425°F
</Usage>
```

### Time

When writing about a time of the day, use numerals and lowercase am or pm, with a space in between. Use 12- or 24-hour time according to the locale. When writing in 24-hour time, show a `0` before single-digit hours. 

```usage
<Usage type="yes">
### Yes
- 5 pm
- 8:30 pm
- 06:30
</Usage>
<Usage type="no">
### No
- 5pm
- 8:30PM
- 6:30h
</Usage>
```

Use an en dash (`–`) between times to indicate a time period. Don’t insert spaces before and after the en dash.

```usage
<Usage type="yes">
### Yes
- 8 am–12 pm 
- 06:30–18:00 
</Usage>
```

When referring to an amount of time, use numerals and the full word, with a space in between.

```usage
<Usage type="yes">
### Yes
- Sent 20 minutes ago
- Received 30 seconds ago
</Usage>
```

### Units of measurement

In all cases, include a space between the number and the unit of measurement.

```usage
<Usage type="yes">
### Yes
- 200 g
</Usage>
<Usage type="no">
### No
- 200g
</Usage>
```

## Punctuation

### Apostrophes

Apostrophes are usually used to make a word possessive. If the word already ends in an s and it’s singular, you also add an’s. If the word ends in an s and is plural, just add an apostrophe.

Watch out for dumb apostrophes (`'`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic apostrophes (`‘`).

```usage
<Usage type="yes">
### Yes
- This recommendation’s new for you
- This book is Jen’s favourite
- Chris’s favourite book
</Usage>
```

### Colons

Use a colon to offset a list.

```usage
<Usage type="yes">
### Yes
- This books is known for three things: aliens, adventure, and bad poetry.

When a list begins with an interface label, capitalize the first word of the list.

- Genres: Fantasy, science fiction, and humour.
</Usage>
```

### Commas

Use the Oxford comma when writing a list.

```usage
<Usage type="yes">
### Yes
- Common tropes include the big bad, Mordor, and spy speak.
</Usage>
<Usage type="no">
### No
- Common tropes include the big bad, Mordor and spy speak.
</Usage>
```

### Dashes and hyphens

Use a hyphen (`-`) without spaces before and after to link words into a single phrase.

```usage
<Usage type="yes">
### Yes
- First-time reader?
</Usage>
```

Use an en dash (`–`) to indicate a [range or span](#ranges-and-spans), without spaces.

```usage
<Usage type="yes">
### Yes
- 2–6 minute read
</Usage>
```

Use an em (`—`) dash without spaces to separate clauses in paragraph copy.

```usage
<Usage type="yes">
### Yes
- This new series—a first in science fiction—is perfect for readers looking for bad poetry.
</Usage>
```

### Ellipses

Use ellipses to indicate that a line of copy has been clipped before the end. This is typically used when only a single line of copy will fit, but the content itself is too long. Avoid this when possible.

When ellipses are used to clip a line of copy, clip after at least 2 characters.

```usage
<Usage type="yes">
### Yes
- Harry Potter and the Go…
</Usage>
<Usage type="no">
### No
- Harry Potter and the G…
</Usage>
```

### Periods

Use periods in complete sentences. Don’t use periods in headlines or labels. Periods go inside quotation marks. They go outside parentheses ( ) when the contained text is part of a larger sentence, and inside when the contained text stands alone.

```usage
<Usage type="yes">
### Yes
- 3 books on your list
- We’ve updated the results to display only your selected languages (English, German).
</Usage>
<Usage type="no">
### No
- 3 meals in your box.
</Usage>
```

### Quotation marks

Watch out for dumb quotation marks (`'` and `"`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic quotation marks (`‘` and `’`, `“` and `”`).

```usage
<Usage type="yes">
### Yes
- ‘Example’
- “Example Two”
</Usage>
<Usage type="no">
### No
- 'Example'
- "Example two"
</Usage>
```

## Places

Spell out all city names. 

When written in paragraph copy, write out country, state, and province names on the first mention. On subsequent mentions, abbreviating is fine.

```usage
<Usage type="yes">
### Yes
- Now available in Winnipeg.
</Usage>
<Usage type="no">
### No
- Now available in WPG.
</Usage>
```

## Positive vs. negative

Use positive language rather than negative language. Positives are easier to read and process than negatives. One way to detect negative language is to look for words like “can’t,” “don’t,” etc.

```usage
<Usage type="yes">
### Yes
- Update your payment method to access your account.
</Usage>
<Usage type="no">
### No
- If you don’t update your payment method, you won’t be able to access your account.
</Usage>
```

## Use positive words when talking about positive things

If a sentence begins with a negative word, the sentence’s implication can be misinterpreted as negative.

```usage
<Usage type="yes">
### Yes
- Remember to save your new payment method
</Usage>
<Usage type="no">
### No
- Don’t forget to save your new payment method
</Usage>
```

## Writing questions

A common error when writing questions is not constructing the sentence as a question. Usually, this can be fixed by changing the word order.

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

## Writing about ourselves

We have a few different names depending on whether we’re referring to our legal entity or our trade name, and which market we’re writing for.

In our digital products, use our trade name for each market:

```usage
<Usage type="yes">
### Yes
- **CA & USA:** Foreword
- **EU:** Forworded
</Usage>
```

Always title case our name. Don’t abbreviate our name.

```usage
<Usage type="yes">
### Yes
- Foreword
</Usage>
<Usage type="no">
### No
- FW
</Usage>
```

Don’t capitalize descriptive product or feature names.

```usage
<Usage type="yes">
### Yes
- our mobile app
- reading recommendations
- your list
</Usage>
<Usage type="no">
### No
- our Mobile App
- Reading Recommendations
- your Lox
</Usage>
```

## Writing about people

We design and build our platforms with a human-centered point of view. Whenever we write something for our digital platforms, we need to write in a way that’s compassionate, inclusive, and respectful.

Here are some specific guidelines for how we write about people.

### Disability

Avoid disability-related idioms like “lame” or “falling on deaf ears.”

Default to person-first language rather than identity-first language.

```usage
<Usage type="yes">
### Yes
- they have a disability
- person with disability
- people living with disabilities
</Usage>
<Usage type="no">
### No
- they are disabled
- disabled person
</Usage>
```

Do not use the term “edge cases” to describe users living with disabilities. This term further marginalizes people already living on the margins. Instead, use the term “stress cases.”

### Gender and sexuality

Don’t call groups of people “guys.” Don’t call women “girls.” 

Avoid gendered terms.

```usage
<Usage type="yes">
### Yes
- Artisan
</Usage>
<Usage type="no">
### No
- Craftsman
</Usage>
```

It’s okay to use “they” as a singular pronoun. If there’s no inherent purpose to specifying a gender, default to “they.”

### Hearing

Use lower-case “deaf,” “hard of hearing,” or “hearing loss” as adjectives to describe someone with hearing loss.

### Vision

Use lower-case “blind” to describe someone who is unable to see. Use “low vision” or “vision loss” as adjectives to describe a person with limited vision.

## Avoid words with multiple meanings

Some words to watch out for:

**Once** (could mean “one time,” “after,” “in the past,” or “when”)

```usage
<Usage type="yes">
### Yes
- After you’ve made your picks
</Usage>
<Usage type="no">
### No
- Once you’ve made your picks
</Usage>
```

**Right** (could mean “correct,” “the opposite of left,” “politically conservative,” etc.)

```usage
<Usage type="yes">
### Yes
- Pick the book you like most
</Usage>
<Usage type="no">
### No
- Pick the right book
</Usage>
```

**Since** (could refer to a point in time, or a synonym of “because”)

```usage
<Usage type="yes">
### Yes
- Because you have a referral already, you can invite a friend and get a free month
</Usage>
<Usage type="no">
### No
- Since you already have a referral, you can invite a friend and get a free month
</Usage>
```

**“Require” plus an infinitive** (could confuse the relationship between subject and object)

```usage
<Usage type="yes">
### Yes
- Referrals can be sent from any Foreword account.
</Usage>
<Usage type="no">
### No
- A Foreword account is required to send referrals. _(This could imply that both the sender and receiver have to have a Foreword account to send a referral.)_
</Usage>
```

## Avoid idioms

In most languages, idioms are commonly-known phrases packed with meaning. However, idioms don’t often translate into other languages. They can also create confusion for translators that have English as an additional language. It’s better to avoid using idioms at all.

```usage
<Usage type="yes">
### Yes
- Let’s get started
- This information might change
</Usage>
<Usage type="no">
### No
- Let’s get crackin’
- Take this with a grain of salt
</Usage>
```