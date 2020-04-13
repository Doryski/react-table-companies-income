# Table of companies income

## About

This is an app created with React Hooks and Styled components that fetches data from API, then stores it into paginated table.

What you can do with the table is:

-   sort data by each column (by clicking column header on desktop and selecting sorting options on mobile)
-   filter all fields by search value
-   choose the number of rows visible per page

## Demo

Here is the link for project demo: https://doryski.github.io/react-table-companies-income/

## Running project on your local machine

### Before you run the app:

Make sure Node.js is installed on your computer. You can check it by running:

```
node -v
```

If no version is provided, please follow the instructions on https://nodejs.org/en/download/package-manager/.

### To run this project:

1.  You need to get the **links to the API**,

2.  Then the best way is to create a `/src/links/index.js` file which will include two exports:

-   link to companies json file dataset,
-   link to incomes json file dataset.

```javascript
export const companiesLink = '...'
export const incomesLink = '...'
```

3. Copy the repository:

```
   git clone https://github.com/Doryski/react-table-companies-income.git
```

4. Go to the newly created directory by running:

```
   cd react-table-companies-income
```

5. Once in the directory, run `npm install` to install all the required dependencies.

6. Lastly run `npm start` to start the application on http://localhost:8080/.

