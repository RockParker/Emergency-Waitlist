
# Triage App / Emergency Waitlist

The general outline for this app is that a client/patient should be able to view information related to their case, where an administrator should be able to view information about all patients

## Fonts and Colours
### Fonts
I just want to use a standard font which should be supported on majority of devices which may try to connect to the app

### Colours
For color there are 2 main targets
  1) General Theme
  2) Informative Colouring

#### General Theme
For the general theme of the system, I would like to have a spread of orange, red and some darker blue-ish colouring.
I chose this theme because I like the colours and wanted to experiment with them
Sample Colours (not finalized)
colour #B31312
colour #EA906C
colour #F5EDF7
colour #2B2A4C
colour #222

![Example Design](colourPallete.png)

#### Informative Colouring
This is where the colour will make it easier for a user to see, at a glance, some important general information. 
e.g. If a patient is waiting longer than some accepted average wait time, than the admin/nurse would see that patient's information light up in red. Patients should see the colour green when things are on track or ahead of schedule so that they feel better about the wait time.

## App Components
Upon loading the app should ask the user for their id, and then if the id is an admin it should prompt for their password.
To do this there will be a small "form" in the center of the screen that just has a title, input, and button. This design should be super simple and make the app more accessible for people who are not so tech saavy.
Beyond this, the patients will get a simple summary view where they only see information relating to them.
Admin will be able to see information about all the patients who are currently in the queue.
The goal will  

## Layout and Navigation
it will be a very simple layout, just a centered element that displays the data. For an example, feel free to reference the image linked above.
for navigation, there is very little. The user will only be able to "login" and "logout" which just gathers info and then when they log out it deletes the information.

## Consistency
I will be enforcing consistency by having it all happen on one html page where the elements are just loaded and unloaded dynamically as needed based on the user interaction with the application.
