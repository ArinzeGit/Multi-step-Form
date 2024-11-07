# Multi-step Form

This project is a multi-step form built with `React-TS`, utilizing `custom hooks` and the `Context API` for effective `state management` and `step control`. I wrote `unit tests` and `integration tests` using `Vitest` and `React Testing Library (RTL)` to ensure the functionality and reliability of each step in the form process. The form is styled using `Tailwind CSS` for a responsive and modern look. This project demonstrates my skills in building complex user interfaces, managing component state effectively with `custom hooks` and `Context API`, and writing meaningful tests to ensure quality. I got the design from the ['Multi-step form' challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

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

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

**Desktop version:**  
![Multi-step form screenshot desktop1](public/Multi%20step%20form%20screenshot%20desktop1.PNG)  
![Multi-step form screenshot desktop2](public/Multi%20step%20form%20screenshot%20desktop2.PNG)  
![Multi-step form screenshot desktop3](public/Multi%20step%20form%20screenshot%20desktop3.PNG)  
![Multi-step form screenshot desktop4](public/Multi%20step%20form%20screenshot%20desktop4.PNG)  
![Multi-step form screenshot desktop4](public/Multi%20step%20form%20screenshot%20desktop5.PNG)

**Mobile version:**  
![Multi-step form screenshot mobile1](public/Multi%20step%20form%20screenshot%20mobile1.PNG)  
![Multi-step form screenshot mobile2](public/Multi%20step%20form%20screenshot%20mobile2.PNG)  
![Multi-step form screenshot mobile3](public/Multi%20step%20form%20screenshot%20mobile3.PNG)

### Links

- [GitHub Repository](https://github.com/ArinzeGit/Multi-step-Form)
- [Live Site URL](https://arinzegit.github.io/Multi-step-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS - CSS framework
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/) - CSS web layout model
- [TypeScript](https://www.typescriptlang.org/) - Programming language that extends JavaScript
- [React](https://react.dev/) - JavaScript library
- React custom hook for step control
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Vitest for testing
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Vite](https://vitejs.dev/) - React build tool with local development server

### What I learned

- I strengthened my knowledge of `testing` as this projects includes `integration tests` and not just `unit tests`. However, in this project, I made the switch from `Jest` to `Vitest`, which integrates more seamlessly with my `Vite` bundler. This change allowed me to optimize the testing workflow and take advantage of Vitest's faster performance and compatibility with modern front-end tools.

- I learned `Tailwind CSS` framework with this project. I saw how Tailwind is used to write styles for elements, pseudo states and media queries. Tailwind writes inline styles which some developers argue makes HTML code long and messy. I, however found it very suited for frameworks like React since each component has it's separate module where you can style once and reuse the component.

- I learned a very peciliar feature of `Tailwind`; the `peer` feature, which is the ability to style an element based on the state of a sibling element. This helped me apply conditional styles to elements without using JavaScript. In code snippet below I apply conditional styles on a label depending on wether it's invisible input checkbox is checked.

```js
return (
  <>
    <input
      type="radio"
      id="arcade"
      name="plan"
      value="Arcade"
      className="hidden peer/arcade"
      checked={plan === "Arcade"}
      onChange={handlePlanChange}
    />
    <label
      htmlFor="arcade"
      className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/arcade:outline-[#483EFF] peer-checked/arcade:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[14px] desktop:pt-[99px] pb-[15px] desktop:pb-[14px] pl-[70px] desktop:px-[16px] pr-[14px] relative mt-[22px] desktop:mt-0 desktop:flex-[1_1_100%]"
    >
      <img
        src={arcade}
        alt="arcade"
        className="absolute top-[17px] desktop:top-[20px] left-[16px] desktop:left-[16px]"
      />
      <div className="text-[#022959] text-[16px] font-['Ubuntu-Medium'] leading-[1.125]">
        Arcade
      </div>
      <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] mt-[7px] mb-[3px] desktop:mb-[6px] leading-[1.429] desktop:leading-[1.143]">
        {billing === "Yearly" ? "$90/yr" : "$9/mo"}
      </div>
      <div className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] leading-[1.83] desktop:leading-[1.9]">
        {billing === "Yearly" && "2 months free"}
      </div>
    </label>
  </>
);
```

- I learned how to create and use `React custom hooks`. I used a custom hook to implement step control for the multi-step form. See the code snippet below

```js
import { useState } from "react";

const useMultistepForm = (steps: React.ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    step: steps[currentStepIndex],
    steps,
    currentStepIndex,
    next,
    back,
    goTo,
  };
};

export default useMultistepForm;
```

### Continued development

- Tailwind CSS
- Tailwind styling based on sibling state (peer-{modifier})
- React custom hooks
- Vitest
- React Testing Library
- Unit testing and Integration testing

I found these techniques very useful. I will continue focusing on them in future projects to refine and perfect them.

### Useful resources

- [Watching Tailwind Tutorials Is A Waste Of Time](https://www.youtube.com/watch?v=Ksn1tThNTjI&t=120s&pp=ygUfdGFpbHdpbmQgY3NzIHdlYiBkZXYgc2ltcGxpZmllZA%3D%3D) - This YouTube tutorial helped me quickly get started with `Tailwind CSS`.
- [Multistep Form Custom Hook With React And TypeScript](https://www.youtube.com/watch?v=uDCBSnWkuH0&list=WL&index=14&pp=gAQBiAQB) - This YouTube tutorial helped me understand form/step control using `React custom hooks`.
- [Why Vitest Is Better Than Jest](https://www.youtube.com/watch?v=7f-71kYhK00) - This YouTube tutorial helped me transition from `Jest` to `Vitest`
- [Stop Writing So Many Tests](https://www.youtube.com/watch?v=4-_0aTlkqK0) - This YouTube tutorial helped me improve the efficiency of my tests
- [100% Code Coverage Is Useless](https://www.youtube.com/watch?v=Zs2IpqHzchw) - This YouTube tutorial helped me shift my focus from `code coverage` to `code confidence` in testing.

## Author

- GitHub - [@ArinzeGit](https://github.com/ArinzeGit)
- Frontend Mentor - [@ArinzeGit](https://www.frontendmentor.io/profile/ArinzeGit)
- LinkedIn - [@Dennings-Owoh](https://www.linkedin.com/in/dennings-owoh/)
- Instagram - [@\_.arinze.\_](https://www.instagram.com/_.arinze._/)
- Twitter - [@Arinze98433402](https://twitter.com/Arinze98433402)
