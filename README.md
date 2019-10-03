# Cypress

How To Run My UI Test…

  1. Download Node and NPM
	https://nodejs.org/en/
  2. Open the Project and do an “NPM Install” command to install all the node modules needed.
  3. Run command “./node_modules/.bin/cypress open ” to open up the Test and run through the browser.
  OR
  4. Run command “./node_modules/.bin/cypress run” to run the test in a headless state.


BUGS found…

Position field doesn’t only accept String for its data type validation.
System allows user to add a new politician without entering a Position.
System still allows user to click save even when there is an invalid message.
“Successfully Added message”  doesn’t change to the name of the new politician.
The year of birth accepts future dates.
the country field accepts special characters.


My Questions…

Should the Position field hide the users input? By changing it to a dotted format? *******
