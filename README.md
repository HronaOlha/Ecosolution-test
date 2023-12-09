Terms of reference

# Frontend test task

Ecosolution Landing page

## Landing page template

[Template](https://www.figma.com/file/pTbhAbEXjsofeQHmtIE2tK/Ecosolution?type=design&node-id=145%3A1533&mode=dev)

### Terms of reference

1. Header
   - Fixed. Contains the logo, burger menu, Get in touch (except for the mobile
     version).
   - When scrolling, the header changes color (see ui-kit).
   - When you click on Get in touch, it smoothly scrolls to the Contact Us
     section.
2. Burger-menu
   - Contains the close button, navigation menu, social networks.
   - Each menu item should be clickable and smoothly scroll to the corresponding
     section on the page when you click on it.
   - The height of the burger menu should be full screen, the indentation from
     the edges of the screen at the bottom is similar to the indentation at the
     top as shown in the layout.
   - On a tablet, the burger menu looks similar to the desktop version.
3. Main
   - When you click on Learn more, you will be taken to the Cases section.
4. About (Values)
   - Use the CSS Grid algorithm when laying out the list of values.
   - Do not show photos on mobile, only values.
5. Electricity
   - To get extra points, instead of static numbers, make an automatic counter,
     +1 per second. This task is optional.
6. Cases
   - An endless slider.
   - You can change the slide by clicking on the appropriate buttons or by
     dragging and dropping.
   - When you click on a button, one slide is switched.
7. FAQ.
   - By default, the first answer is open.
   - Only one answer can be open at a time.
   - When you click on Contact Us, the Contact Us section scrolls smoothly.
8. Contact Us
   - The form must be validated.
   - The Full name, E-mail, Phone fields are required, the Message field is
     optional.
9. Footer
   - Contains an arrow that, when clicked, smoothly scrolls to the Main section.

### Acceptance criteria

- The layout is fixed in rh.
- Layout is semantic and valid, accessibility will be a bonus (a11y).
- Adaptive and cross-browser layout - mobile from 360px to 480px (rubber layout,
  should stretch), tablet - 768px, desktop - 1280px.
- Use the Mobile first approach.
- The code should be clean, with formatting preserved. We recommend using
  ESLint/Prettier.
- The code is divided into separate components.
