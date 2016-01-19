##Website Performance Optimization portfolio project

####To build this project

1) Clone the repository
2) You need to have nodejs and gulp installed
3) In the main dir of the project write:
     npm install; gulp clean ; gulp
     
####To view this project

1) Open a browser
2) If you use a web server open the main page on http://ipAddressOfYourServer/dist/ 
   or if you don't use a webserver write a full path "path"+frontend-nanodegree-mobile-portfolio/dist/index.html in the bowser



####Part 1: Optimize PageSpeed Insights score for index.html

- Move al javascript at the and of body tag
- Set preformatter.js async
- Use Web Fonts loader Library for load Google fonts asynchronously
- Use optipng for optimize png file
- Use gulp with gulp-uglify, gulp-minify-css for optimize css and javascript
- Use gulp with critical for insert in html file inline-css and minify html
- Use gulp imagemin for optimize image file
- Add media='print'




###Part 2: Optimize main.js for pizza.html

- Move document.body.scrollTop outside the loop line 507
- Use translate3d css for improve performance line 522
- Calculate number of pizzas in a window and use it in a loop instead of 200  line 555
- create function anim with requestAnimationFrame inside and use it for animate scroll line 542 and 539
- use gulp for minify css and js
- Move dom query outside the loop where possible
- Use getElementsByClassName() instead querySelectorAll()
