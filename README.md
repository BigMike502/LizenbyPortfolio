# LizenbyPortfolio

Author:Michael Melhorn
email:mmelhorndesign@gmail.com

This is a Final Project for TV Director Freind Portfolio website.  

As of NOV 17th 2021 the project is Complete for Turn in, There may be some tweeks between now and then.  

## OVER ALL

    I have 3 media state for the site, Phone, Tablet, PC
    
    The Header, Nav, and Foother have diffrent state changes between all 3 media queries. More Information below in CSS and JavaScript sections.

    As I have been working in this project I have been looking at Edge, Firefox and Chrome.
    
    devop brach is for me to do some major work in the site while waiting for grading.  Please use 'main' for grading.

    ### Portfolio Section : I made some manipulation's to the Youtube Iframes.  I Removed the Youtube Logo that generally shows up on the right side of the youtube controls for embedded contact.  I also changed the rel=0 so the "recomended" video's when the video is paused or ends pops up with video's from the clients channel.  I also made it so the controls when the video is playing disaperaed with autohide=1.  These changes are in the src link.  These are NOT default option avalible in youtube but are part of the API for youtube.

## CSS

    ### hamburgerBtn (Styles.css Line:XXX)

        I have a hamburgerBtn in the Phone size of the site.
        It uses nth_child(odd) on the li of the ul to color the 1st and 3rd item in the menu.  Javascript info for hamburgerbtn is below in Javascript
        
    ### Header (Styles.css Line:XXX)

        The phone and tablet share a state with the header.  The Desktop has the image shift a little bit on the y axis and the Title and sub title shift to the right side of the screen with a defined text size.

    ### Nav (Styles.css Line:XXX)

        Nav changes states between all 3.  
        #### Phone - it is conntect to the hamburger button.  
        #### Tablet - Hamburger button disapears, and since the nav is only 3 links it is aligned in the center and spaced using flexbox.  the <a> boxes are also big enough for anyone to press easly on a screen.  
        #### Desktop - I disabled the flexbox and spaced out the text and aligned the <ul> group to the right so it is directly under the tittle of the page.

    ### Portfolio (Styles.css Line:XXX)

        ###Youtube Iframe work - The main styles for .ytube-vid &  .video-container work together to also the yotube window to be fluid without have to change the width and hight on the Iframe all the time.  I will be up front with this, this is a technique that I found around the net in many places.  I did make some changes to this to work with the flow for my project.  

            #### Starting off with .ytube-vid (Iframe Element).
                The 'position: absolute' along with Top and Left at 0 are to bump the iframe to Top Left hand corner of its parent. delclaring the width and hight of 100% also the Iframe box to stretch to the container. I added a drop shadow to the Iframe so it went with the look of the photo's as well.  
            #### Now the .video-container!
                The Position:Relative is creating an anchor for for the .ytube-vid absolute property.   I made the width of this container 100% within the Video-Frame DIV.
                padding-bottom: 56.25%; Helps Create a 16:9 Aspect Ratio so the video iframe render correctly and apears. 

        This section I did not make any changes between the 3 sizes because this is the main point behind this section.  The only thing that really does change is text size and some formating.
            
    ### About Me (Styles.css Line:XXX)

        About-Me has diffrent views between the 3 states.  (I am using the "Lorem ipsum" for the moment, was not able to get about me information from the client.)

        #### Phone - All the photos are in 1 columb with a break for the paragraphs.  
        #### tablet - They are splitting the page 50% between one another.  used NthChild to balance out the padding between them all.
        #### desktop - I made the 1st photo 100% width and made all the other 33.33% width so they are sharing the space.  

    ### Contact Me (Styles.css Line:XXX)
        The Form has 2 diffrent scales and is also centered thoughout.
        Phone has a width of 21rem for the phone and the tablet and the desktop have a width of 35rem.  I did not want to use %'s with the form because it just did not look wright.
        between Javascipt and css I will be making a verification script for the form.

    ### Footer (Styles.css Line:XXX)

        Footer "Nav" Changes between all 3 states.  
                #### Phone - it is all centered in a cloumn.
        #### Tablet - it is all in a row and centered with flexbox.
        #### desktop - It is all justified center without flexbox and spaced with padding.  
        #### Note : I used First and Last Child adjustments in the Footer between all 3 states.  Phone I ajusted the top padding of first and bottom padding of last. it tablet it then removes that and removes the padding from the Left of 1st and right of last so everything stays even in padding.   
        
        for the 2 social links at the bottom I am using Font Awesome for both Twitter and Instagram.  Both Links are routed to his social pages.

## Javasript

    ### hamburgerbtn
        The button when pushed has javascript looking for a button press for the hamburgerBtn and when it sees the button pressed it will then call the javascript function (toggleMenu) to have it add a class of "Open" to the nav ul to open the menu.  When you click (touch) on it again it disapears.

    ### nav
        After the menu is open and you click on a menu item. I wrote a script that will then remove the "Open" class from the primary-nav ID class list.

    ### Contact me form
        I am validating the form to see that everything MATCHES its required value.  I first declare all the variables and const that will be need at the TOP of the function.  I am starting out by letting the status = true that will be returned (at the bottom of the function) back to the HTML form to verify that the check was good so it can then go to the next page.  

        NOTE : I have an ELSE on all 3 so if a field was entered in incorrectly to begin with and then entered in correctly it will then clear out the CSS "error"class.  I did this incase there were still errors on the other fields but that field turned out to be correct.  


            ### Name
                I am having it check to see IF the name form feild is a blank string or NULL.  If it is blank it will throw the CSS saying that name needs to be entered.  In the Else for the Name I am using it to call the name from X and put it in local storage in a container labled 'customerName'.

            ### Email
                I have it checking the to see if there is any whitespace Before and after the @.  as well as after the "."  soo "example _@_._" /\S+@\S+\.\S+/  (this was well outside the course and regular expressions are a bit mind boggling lol)

            ### Message
                I had it check to see that the y<=9 so it will test false up to 9 and when it hit 10 it will be true.  

            ### The Actions 
                This is where things got fun I thought. In name like i said I am storing Name in 'customerName' in localStorage in the browser.  When EVERYTHING is completed correctly though the script, the form then loads onto the thankyou.html page line 50 in the span. I then have a call for the span name script (onload="finalName()") in the <script> element at the bottom of the page since it is generally one of the first thing the page looks at when the page is loaded.
