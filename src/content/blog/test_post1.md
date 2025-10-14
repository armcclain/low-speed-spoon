---
title: "Markdown Formatting Reference"
date: 2025-10-14
description: "style guide for markdown"
---
[MD Guide for Reference](https://google.github.io/styleguide/docguide/style.html)

*note to self that the main astro prose formatting overrides some of the md formatting*

<br>

---
# Document Title

Short introduction.

## Topic

Content.

### Another Topic

More content.

---

<br>

---

## Text formatting
- *Italics* using single asterisks or underscores.
- **Bold** using double asterisks or underscores.
- ***Bold italics*** by combining them.
- ~~Strikethrough~~ using tildes.
- <u>Underlines</u> by using HTML tags directly.

> Blockquotes seem to be overwritten by base formatting
---

<br>

---

## Lists - appear to be overwitten

### Unordered list

- Item one
  - Nested item
- Item two
- Item three

### Ordered list

1. Step one
2. Step two
   1. Sub-step
3. Step three

---

<br>

---
## Links and images

[Text Here You Want to Hyperlink](https://armcclain.github.io/)  
<https://armcclain.github.io/> (auto-link)

![image of low-speed-spoon logo](/low-speed-spoon/assets/Low_Speed_Spoon.png)
Images stored in /public/assets can be linked like this.

---

<br>


---

## Code

Inline code: `using single tics`

Block code fences:

```r
# R example
library(dplyr)
iris %>%
  group_by(Species) %>%
  summarize(across(everything(), mean))

```
*note to self there seems to be some sort of default color formatting that is ugly but not super important rn*
