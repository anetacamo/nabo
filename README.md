## about project

This project is opensourse and built with next, react and typescript
node version: 20.7.1
`yarn run dev`

## STEPS FOR DUPLICATION

### development

1. create new repository

https://github.com/new

2. duplicate the whole project on the local machine
   rename necessary items, remove + add specific contents

3. connect to github
   https://nextjs.org/learn/basics/deploying-nextjs-app/github
   push the changes to the repo
   set a new origin

```js
git remote -v
git remote set-url origin https://github.com/anetacamo/tromso-nabo.git
git push -u origin main
git pull origin main --allow-unrelated-histories
```

4. add vercel for deployment
5. create the google sheets and set up for the data structure
6. link google sheets to the db
7. set up the mapbox
8. set up the form
   https://github.com/jamiewilson/form-to-google-sheets
9. change DNS to point to the new site.

### users

1. website: set up descriptions & content in the sections
   (this is done by markdown files and raw json data in github)
2. fill in the google doc sheets
3. #### maintanance.

the google sheets has two sections:
- one sheet with the content already added. That content is directly rendered to the website.
- One sheet with the submits. This is the submits from the form on the website. This content is not directly rendered, so it can be reviewed and confirmed by moving it to the first sheet.
