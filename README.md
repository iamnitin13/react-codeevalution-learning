Formik is a library for managing form; it help to manage the form data, display error messages,validation the form and submitting form.

We can do this using plan js, then why formik as it help in dealing with form in a scalabl,performant and in a easy way to create complex form.

formik is a small library it help in 3 ways:- 1. getting values in & out of form state 2. handling form submission 3. validation & displaying error messages.

why not using redux-form as form state are manages internally so need to create a separate store for it. on every keystroke call redux reducer multiple time will cause input latency. formik is so much light-weighted even redux-form zipped minifed.

Browser built-in HTML input validation are only supported inside browser, hard to show custom error message;
the built-in validation are like. required,max,min,maxLength,pattern-- any regex expression

formik also help in stay organising the code.

#vite started: `npm create vite@latest`
