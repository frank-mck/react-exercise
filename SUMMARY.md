# CRUK Technical Exercise (React) Summary
<img width="792" alt="Screenshot 2023-09-25 at 18 49 30" src="https://github.com/frank-mck/react-exercise/assets/77457834/f7daf66b-8a4c-451b-9003-7ce70d8c3bb1">

## Summary

I thoroughly enjoyed completing this tech test. I am pleased with the results and believe I have accomplished the core requirements effectively. While I'm content with the current state of the project, there are areas where I see potential for improvement. Specifically, I would like to enhance the styling and incorporate smoother animations to elevate the user experience further. Additionally, I would have liked to test the application to meet the 
production-ready requirement.


## Tools and Libraries used
- React Hook Form
- Vod validation library
- CRUK React Component Library

## Requirements

- Build a form using the CRUK React Component Library ✅
- Fetch assets from the NASA Images and Video Library API ✅
- The media returned should be displayed in the list below the form, these may be images, video, or audio clips ✅
- The user should only see the first 10 items on the page. ✅
- Code must be clean and production ready ✅ (Testing pending)

## Additional requirements

- Mobile friendly ✅

## Why Did I Choose React Hook Form Over the Formik Library?

- **React Hook Form:**
  - Pros:
    - Ability to isolate component re-renders. React Hook Form is generally considered faster and more lightweight than Formik. It’s easy to understand and has a strong focus on performance.
  - Cons:
    - Fewer built-in UI components compared to Formik.

- **Formik:**
  - Pros:
    - Offers more control over form state. Provides more features. Easy to use. Offers greater flexibility.
  - Cons:
    - May require additional optimization to avoid unnecessary re-renders. Slightly heavier in terms of bundle size compared to the React Hook Form.
<br />

This choice is based on React Hook Form's user-friendly, performant, lightweight, and flexible nature, aligning with the goal of writing clean and production-ready code with a focus on quality.

## Why Did I Choose Vod Over Yup for Form Validation?

These validation libraries are simple to learn, easy to use and have similar syntax. I opted for Vod simply because it has superior TypeScript support, which enhances the development experience in a TypeScript codebase.

## Setup

Please create a `.env.local` file in the project's root and add an API key for fetching NASA data.

```
NEXT_PUBLIC_NASA_API_KEY=your_key
```

## To Run
To run this project locally, follow these steps:

Clone the project repository to your local machine:

```
git clone <repository-url>
```

Navigate to the project directory:

```
cd react-exercise
```

Install the project dependencies and start the client:

```
npm install
npm run dev
```
