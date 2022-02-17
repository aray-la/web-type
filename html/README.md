# Week 1 Topics Reference

## Starterkit
- Use the contents of this folder as a starting point for your class website

## HTML Basics

- HTML Element Reference
www.w3schools.com/tags/

## HTML Paths

-  HTML Links
https://www.w3schools.com/html/html_links.asp

- Absolute VS. Relative Paths
https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/

- Creating hyperlinks, MDN Webdocs
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks


## HyperText Markup Language

HTML is the language of web pages interpreted by web browsers.
- HTML = **H**yper**T**ext **M**arkup **L**anguage
- HTML defines web content by organizing text comprised of a series of nested tags
- HTML can be created with any simple text editor.


An `.html` file has 2 forms:
1. As code, in your text editor.
2. As an webpage, in your browser.


## HTML Tag

Tags are used to mark-up content in HTML. It is always between two angled brackets.

`<p>`

### Anatomy
- Left-Angle Bracket `<`
- Tag name `p`
- Right-Angle Bracket `>`

## HTML Element

All content is surrounded  between opening and closing tags. A closing tag is indicated with a forward slash `/`. Most forms of markup require both. ([Here’s](https://web.archive.org/web/20060314044545/http://www.sewingandembroiderywarehouse.com/embtrb.htm) what happens when you don’t close tags.)

`<p>lorem ipsum ...</p>`

`<h1>headline</h1>`

### Anatomy
- opening tag `<h1>`
- content `headline` — this is the actual text that will display
- closing tag `</h1>`


## Semantic Markup
Semantic: relating to meaning in language or logic

Semantic markup establishes the hierarchy and structure of information. The latest version of html, html5, introduced several new elements (among other things) to improve how precisely a tag can describe the content it contains.

- Read more on how [Semantic Markup is important for Web Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

※ Clicking around on this site, you might notice that you’ll see the underlying HTML tags. But the best way to see this is to open up the Inspector. 

- headings `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- paragraph `p`
- lists `ul`, `ol`, `dl`

You can see the HTML and structure of any webpage by opening your Inspector tool on your browser. 
- Inspect (⌘–Option–I or ⌘–Shift–C) displays the HTML structure and styles that the browser determined from the source file. You can also hover over elements to see what they correspond to on your screen. ** The inspector is your best tool when developing websites because it bridges the gap between your intentions with your code and how the browser renders it. **

## Nested structures
An element nested within another is called a child element. Conversely, an element containing another is called its parent. A child element must be closed before its parent element. 

This is incorrect syntax:
```
<h2>French Bakery</h2>
<p>
	All goods must be eaten <em>today.
</p></em>

<ul>
	<li>Baguettes	
	<li>Croissants
	<li>Pastries</li>
</ul>
```

These are examples of incorrect syntax:
```
<h2>French Bakery</h2>
<p>
	All goods must be eaten <em>today</em>.
</p>
<ul>
	<li>Baguettes</li>	
	<li>Croissants</li>
	<li>Pastries</li>
<ul>
```

All HTML elements flow from the top to the bottom.
Any whitespace (tabs or spaces) within the HTML file will have no effect on the rendered markdown; rather, it is a tool for writing readable code.
Nested elements should be kept tabbed for readability: it will help you see where the opening and closing tags of elements.


## Elements and Attributes

Attributes provide additional information about the contents of an element appear with the opening tag of an element. They consist of an attribute name and a value. Each element type has appropriate attributes. 

`<a href="index.html">home</a>`

### Anatomy
- opening tag `<a` (in this case, the anchor tag)
- attribute name `href` (the location / path to where the link takes you)
- equals sign `=`
- attribute value `"index.html"` 
   - values must be wrapped in quotation marks
- content `home` (the text that the user clicks on)

## Links

`<a href="https://www.google.com/">Google</a>`

Use it to link to:

- **Local / Relative links**: Other pages in your site
`<a href="about.html">learn more</a>`
- **Anchor links**: Other locations within the same webpage 
`<a href="#up">go back up</a>`
- **Absolute links**: Other webpages outside your site 
`<a href="https://www.google.com/">search stuff</a>`
- **Download links**: Any non-html file for users to download
`<a href="docs/resume.pdf">view a PDF</a>`


##  A list of common HTML elements

### Basic elements
`<html> ... </html>`

### Document metadata
`<head> ... </head>`

`<title> ... </title>`

### Content sectioning
`<header> ... </header>`

`<nav> ... </nav>`

`<section> ... </section>`

`<footer> ... </footer>`

`<h1> ... </h1>`

`<h2> ... </h2>`

### Text content
`<ul> ... </ul>`

`<li> ... </li>`

`<p> ... </p>`

`<br /`*

### Flow content
`<img />`*

### Inline text semantics
`<em> ... </em>`

`<strong> ... </strong> `

\* these elements are self-closing and do not have opening/closing tag pairs. You may see them with or without the `/`


## Reference
- [A comprehensive list of HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)