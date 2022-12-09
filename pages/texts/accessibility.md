Accessibility

By pressing tab it should automatically shift to following clickable elements.
Sometimes some of them might include hidden elements that cannot be viewed --> Library called Inert Polyfill

### Tab Order

Focusable by default: input, select, button, link
Dictated by order of HTML

### TabIndex Attribute

<p tabindex="0">Adding tabindex focuses on element that is not focusable by default<p>

> Tabindex > 0 will be on top of the tab order >> not recomanded

Button has

- tabindex defaulty,
- (role="button) is called button for screenreading
- contains keydown handler and is automatically clicked by pressing space when focused
- when disabled does not get focused

## Screen Readers

- on Mac: called voiceover

Navigation

- control stop talking
- contol + right move around
- control + option to move your around
- control + option + command + H Jump through the headings
- control + option + space to click on stuff
- command + f5 turn voiceover on or off

## ARIA

Accessible Rich Internet Applications
creating non-accessible elements accessible

### Role

Role is used to define or customize a default role

- `role="checkbox"`
- `role="button"`
- `role="switch`

### State

aria-checked="false"

### Label

Possibility to give a accessibility name in case name is not available

aria-label="Filter"

## Landmarks

Landmarks generate an user-friendly navigation. In order to generate this structure properly they need to respect following order:

<header>
<nav></nav>
<header/>
<aside />
<main />
<footer />

<section aria-label="about" /> and <form arial-label="contact" /> both need `aria-label`or `title`
