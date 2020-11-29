# Udacity Project 2: Landing Page

## Aims

1. Give a real world scenario of manipulating the DOM
2. Appending dynamically added data to the DOM
3. Show how javascript can improve the usability of a static site

## Requirements

1. Build a multi-page landing Page
2. To circumvent not knowing how much content will be added to a page via a CMS or API dynamically add content to the page. This will be carried out via a navigation menu
3. Enhance user experience by actively differentiating the section being viewed by the user
4. When a user clicks on a navigation item the page will scroll to the appropriate section rather than a default jump
5. Refactor and test as much as possible

## Idea: 2WheelsAreBetterThan4

![bicycles](/images/viktor-keri-0gLH1kqRldc-unsplash.jpg)
* photo by [Victor Keri](https://unsplash.com/@viktorkeri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/bicyles?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

As a cycling enthusiast I am going to create a landing page for different types of bicycles that can be used. It will carry out the following

### Aims
* Each section would be a different type of bicycle with a description of it and an image (done)
* It will have a Nav bar horizontally at the top that will be fixed as the page scrolls (done)
* The navbar will disappear if not in use once the user scrolls down and does not touch the screen. This will be after a delay of 2 seconds
* The nav bar will reference 6 bicycle types. Selecting each will take you to the relevant section by scrolling the page
* (Optional) When scrolled to the section the colour of the page will match that of the picture
* The icon to scroll up will appear as soon as the user selects an option on the page that is not the title section
* The scroll up icon will be disappear if the user does not interact with the screen
* When the user scrolls up it will do so gradually
* There will be a Credits section which will have details about me with links to my social media

## Coding challenges

## navBar scrolling
Initially code was created for each nav list item that would go to the relevant section. The navbar had 6 items on it.

![Image of Navbar](/images/Navbar.JPG)

The initial code had something similar to the below for each section. This meant that this was repeated 6 times.

```javascript
const roadBikeSelect = document.querySelector('.road-bike');
const roadBikeLoc = document.getElementById('road-bike')

roadBikeSelect.addEventListener('click', function(){
  roadBikeLoc.scrollIntoView({
    behaviour: "smooth"
  });
});
```
This created more work if a new item was to be added or a change be carried out on the HTML Navbar. The initial difficulty is figuring out that an event target could be recognized inside a block of HTML code and this could be captured via the use of one added event listener. Then the difficulty for me was that I had used two classes within my sections in the class that I chose. My solution was to use the splice to get details of the second. This could then be used to go to the relevant section

```javascript
const navSelect = document.getElementById('navBar');

navSelect.addEventListener('click',function(e){
  let newName = e.target.className.slice(7) // as the specific name of the bike starts from the 7th character
  let contactNewLoc = document.getElementById(newName);
  contactNewLoc.scrollIntoView();
});
```
## navBar highlighting

Initially the attempt was to figure out how the scroll works and how it picks up where it was. The key to understanding this was the following method;

[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

It is possible to select the size of an element using this method using the top and bottom properties.

The aim of this exercise was to connect the sections on the main page to the nav elements. The getBoundingClientRect() method would identify the position relevant section. Then the id of this section would be used to add a new class of 'active-nav' to the relevant nav with a corresponding class of the id of the section. This would then be removed once the getBoundingClientRect() left that section.

```javascript
let navigLink = document.querySelectorAll('.select');
let sectionList = document.querySelectorAll('.container_new');

window.addEventListener('scroll', function(){
    for (list of sectionList) {
      let position = list.getBoundingClientRect();

      if (position.top <= 150 && position.bottom >= 150) {
        for (const navig of navigLink) {
          if(navig.classList.contains(list.id)) {
            navig.classList.add('active-nav');
          }
        }
      } else {
        for (const navig of navigLink) {
          if (navig.classList.contains(list.id)){
            navig.classList.remove('active-nav');
          }
        }
      }
    }
});
```
