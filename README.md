# portfolio2.0

This is my latest iteration on my portfolio site. Build in Vue.js with Vite and Typescript, with vanilla CSS. I'm using airtable to serve the site with my project data. The site is hosted [here](mattscarthsaunders.netlify.app).

## Run it locally

To run this locally, just run:

```
npm i
npm run dev
```

## Why this tech?

## Vue + Vite

I've gone with Vue/Vite because I'm a fan of the way Vue handles component structuring and user interactivity events. It has a large number of useful in-built features like mouseover built into template elements and the presence of transition elements makes handling animation of elements entering/leaving the DOM much nicer. The separation of Template, Script and Style sections within a component also greatly enhance code readability compared to something like React, in my opinion. If I'm to maintain this site long-term, I want to be able to come back in many months time and pick up easily what exactly I thought I was playing at!

# Typescript

I'm using typescript for a similar reason - I want to know immediately what my components are doing (in particular what the props all are), and I want to have all the handy QOL features that comes with it such as autocomplete. When I want to know what properties my portfolio project has on it, it's a keypress away rather than clicking through screens.

# Vanilla CSS

While I've used and come to appreciate some of the benefits of CSS frameworks like Tailwind, I'm a big fan of plain old CSS. Especially contained within a scoped style block on a Vue component, it's very easy to manage.

# Other

I'm using eslint and prettier for code quality/consistency purposes.
