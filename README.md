# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [x] View an age in years, months, and days after submitting a valid date through the form
- [x] Receive validation errors if:
  - [x] Any field is empty when the form is submitted
  - [x] The day number is not between 1-31
  - [x] The month number is not between 1-12
  - [x] The year is in the future
  - [x] The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- [x] View the optimal layout for the interface depending on their device's screen size
- [x] See hover and focus states for all interactive elements on the page
- [x] **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://age-calculator-zmvt.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) - dev server and bundler
- [PostCSS Utopia](https://www.npmjs.com/package/postcss-utopia) - for generating fluid type and spacing via `clamp()`
- [React Hook Form](https://www.react-hook-form.com/) - React form validation library

### What I learned

I've been using Utopia in my projects for quite some time now, but this is the first time I used the [PostCSS Utopia](https://www.npmjs.com/package/postcss-utopia) plugin. This makes working with fluid values more seamless. Instead of using their [clamp calculator](https://utopia.fyi/clamp/calculator?a=320,1240) to generate a new token every time, I can just use `utopia.clamp(@min, @max)` in my CSS to create new fluid values as I work. Vite already uses PostCSS to process CSS out-of-the-box, so I just need to add a `postcss.config.js` file with the following contents:

```js
// postcss.config.js

export default {
  plugins: {
    'postcss-utopia': {
      minWidth: 375,
      maxWidth: 872,
    },
  },
}
```

I also tried using a form validation library for the first time. I chose [React Hook Form](https://www.react-hook-form.com/) since the form is pretty simple, and React Hook Form has the [smallest package size vs popular alternatives](https://www.react-hook-form.com/faqs/#ReactHookFormFormikorReduxForm). I added submit and instant validations which was pretty easy to implement thanks to React Hook Form's straightforward API.

For working with dates, JavaScript's built-in `Date` class proved sufficient. One gotcha I encountered was that the `Date()` constructor doesn't throw an error when passed an invalid date. For example, creating a `Date` object for April 31, 1995 will be evaluated to May 1, 1995. To check for invalid dates, I compared the input date and the parsed date. If they're not equal, then the form won't pass validation.

```js
if (inputDate !== parsedDate) {
  setError('day', { type: 'custom', message: 'Must be a valid date' })
  resetAge()
  return
}
```

### Useful resources

- [NIST Guide to the SI, Appendix B.9: Factors for time units](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9#TIME) - to get results that are as precise as possible

## Author

- Website - [Josh Javier](https://joshjavier.github.io/)
- Frontend Mentor - [@joshjavier](https://www.frontendmentor.io/profile/joshjavier)
