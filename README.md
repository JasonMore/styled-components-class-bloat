# Styled-Components class bloat

Shows an example of how using too many string templates as mixins vs [the documented way of extending styles](https://styled-components.com/docs/basics#extending-styles) will lead to bloat

bad http://localhost:3000/?whichComponent=templateString
<img width="1619" alt="Screen Shot 2020-10-27 at 1 12 45 PM" src="https://user-images.githubusercontent.com/383719/97347895-6d504600-185b-11eb-9f61-4a9583365eb0.png">

good http://localhost:3000/?whichComponent=extend
<img width="1620" alt="Screen Shot 2020-10-27 at 1 12 16 PM" src="https://user-images.githubusercontent.com/383719/97348028-983a9a00-185b-11eb-9e49-e42bde3198f1.png">
