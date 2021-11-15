# LizenbyPortfolio

Author:Michael Melhorn
email:mmelhorndesign@gmail.com

This is a Final Project for TV Director Freind Portfolio website.  

>>>OVER ALL
    I have 3 media state for the site, Phone, Tablet, PC
        >The Header, Nav, and Foother have diffrent state changes between all 3 media queries. More Information below in CSS and JavaScript sections.

    All paragraphs are at a 6% padding from the edge of the parrent by deafault. (left and right).

>>>CSS

    >>hamburgerBtn (Styles.css Line:114)
        I have a hamburgerBtn in the Phone size of the site.
        It uses nth_child(odd) on the li of the ul to color the 1st and 3rd item in the menu.  Javascript info for hamburgerbtn is below in Javascript
        
    >>Header (Styles.css Line:75)
        The phone and tablet share a state with the header.  The Desktop has the image shift a little bit on the y axis and the Title and sub title shift to the right side of the screen with a defined text size.

    >>Nav (Styles.css Line:109)
        Nav changes states between all 3.  
        >Phone - it is conntect to the hamburger button.  
        >Tablet - Hamburger button disapears, and since the nav is only 3 links it is aligned in the center and spaced using flexbox.  the <a> boxes are also big enough for anyone to press easly on a screen.  
        >Desktop - I disabled the flexbox and spaced out the text and aligned the <ul> group to the right so it is directly under the tittle of the page.  

    >>About Me (Styles.css Line:205)
        About-Me has diffrent views between the 3 states.  (I am using the "Lorem ipsum" for the moment, was not able to get about me information from the client.)
        >Phone - All the photos are in 1 columb with a break for the paragraphs.  
        >tablet - They are splitting the page 50% between one another.  used NthChild to balance out the padding between them all.
        desktop - I made the 1st photo 100% width and made all the other 33.33% width so they are sharing the space.  

    >>Footer (Styles.css Line:224)
        Footer "Nav" Changes between all 3 states.  
        >Phone - it is all centered in a cloumn.
        >Tablet - it is all in a row and centered with flexbox.
        >desktop - It is all justified center without flexbox and spaced with padding.  
        Note : I used First and Last Child adjustments in the Footer between all 3 states.  Phone I ajusted the top padding of first and bottom padding of last. it tablet it then removes that and removes the padding from the Left of 1st and right of last so everything stays even in padding.   
        
        for the 2 social links at the bottom I am using Font Awesome for both Twitter and Instagram.

>>>Javasript

    >>hamburgerbtn
        The button when pushed has javascript looking for a button press for the hamburgerBtn and when it sees the button pressed it will then call the javascript function (toggleMenu) to have it add a class of "Open" to the nav ul to open the menu.  When you click (touch) on it again it disapears.