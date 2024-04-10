## about project

This project is opensourse and built with next, react and typescript
node version: 20.7.1
`yarn run dev`

## STEPS FOR DUPLICATION

### development

1. create new repository

https://github.com/new

2. duplicate the whole project on the local machine
   rename necessary items, remove + add specific content

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
9. change DNS to point to the new site

### users

1. website: set up descriptions & content in the sections
   (this is done by markdown files and raw json data in github)
2. fill in the google doc sheets
3. #### maintanance.

the google sheets has two sections:

- one sheet with the content already added. That content is directly rendered to the website.
- One sheet with the submits. This is the submits from the form on the website. This content is not directly rendered, so it can be reviewed and confirmed by moving it to the first sheet.

### TODO

- add version
- implement user friendly editor on top
- organize the tags
- active tag should be always visisble
- scss colors name convention
- change pixels to rem everywhere
- page slugs in variable

## backlog

- add a suggestion
- on click show overlapping items in a row
- show slider on page

### DONE

#### JULY

- form: suggest a tag
- icon needs space on left
- colors merge one source place
- change colors
- move search to top
- add images
- images has overlapping color on the corners
- open link on a new page
- add option to load all
- typescript types redefined

#### 27.5

- double check if texts for each page and footer are editable
- remove unused items
- fix list of items open on click

fixed menu mobile width
fixed margin on a front page
add the tags down
map: fix overlaying info

form: update to get source localy

create two columns on a small scale
fixed the margins on submit page

tags need right margin

31.5
fixed menu widths
margins on the crooked image
Make map icons click-through to resource card pages

today
add location icon
items need margins
add colors to separated pages
add related items to separated pages
add meta titles and texts
fix menu spacing
fix the issue with showing the wrong number when clicked
add smoooth menu animation to menu
new member taken from the local

today:
created an list of tags in new member
displayed them nicely
add remove on click
renamed the generated pages slugs
fix bug on mobile phone

today:
made all the form items into separated components
made them be read from texts/file

today
updated texts
dynamically fetched meta title and descs
unified button and input stylings
merged homepage styles

#### main page

hid map in mobile
updated icon holders
fix mobile map

#### site wise

images added
add hamburger menu
deleted bunch of things
added images to cards
created separated pages
remove s under the bar

updated pages

#### footer

updated menu pages here, created one source type
added takedown edit request

#### english and about page

created list of types that can be edited in file /types/types.type.ts
assigned color and english and danish descriptions here
also displayed on english page and danish page om

## new member

form: choose multiple tags
form: add hidden tags

fixed the category images and colors everywhere
fixed broken links
changed colors
organized colors into one source
changed the names to reflect the menu
moved search to the right
other design fixes

fixed the line in mobile
adjusted search to be responsive
pages made fully responsive in the phone view
fixed issue on the item pages
fixed overlaying on mobile icons
added a speak bubble
reposnsivness for crooked image
made links clickabele and openable in new page
form select is now editable by clicking on a category
hamburger is not invisible
