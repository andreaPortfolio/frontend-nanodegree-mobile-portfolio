## Website Performance Optimization portfolio project



####Part 1: Optimize PageSpeed Insights score for index.html

- Move al javascript at the and of body tag
- Set preformatter.js async
- Use Web Fonts loader Library for load Google fonts asynchronously
- Use jpegoptim for optimizing jpeg file
- Use optipng for optimize png file
- Use gulp with gulp-uglify, gulp-minify-css for optimize css and javascript
- Use gulp with critical for insert in html file inline-css and minify html



###Part 2: Optimize main.js for pizza.html

- Move document.body.scrollTop outside the loop line 507
- Use translate3d css for improve performance line 522
- Calculate row number and use it in a loop insted of 200 line 555
- create function anim with requestAnimationFrame inside and use it for animate scroll line 542 and 539
- use gulp for minify css and js
