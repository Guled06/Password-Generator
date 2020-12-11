# Password-Generator

This is was our third homework assigned to us in our second week of the UCSD Triology Coding Program. In this homework, we were tasked to create an application that will allow the user to generate a random password based on the criteria they have chosen to create their new password. This app was design to run the browser using Index.html file, a style.css file and a script.js file. 

In the script.js, I created a variable and named it "AlphaBet". I gave this variable a string containing the alphabets in lower case from a-z. 

I also created a variable called "letteRs" and gave this variable a string containing the alphabets in upper case from A-Z. 

I created a variable called "digiTs" and gave this variable a string containing a group of numbers from 0 to 9. 

After creating this three variables, I created a function called 'generatePassword'. Within this function, I created a variable called "newPasswordArray" and gave this variable an empty array. This is where the password that will be generated based on what the user will select will be stored.

Afterwards, I created a variable called "passwordFresh" and prompted this variable to ask the user a question "Please enter a password length." 

I set the length of the password between 8 characters to 128 characters. The user cannot choose anything below 8 or above 128, otherwise the user will be prompted again to choose from 8 to 128. 

After the user chooses between 8 and 128, he/she will be asked a set of questions regarding what he/she would like his/her password to contain. This questions will tied to the the characters I have set with the variables (lower case alphabets, upper case alphabets, numbers and special characters).

If the user selected lower case alphabets to be included in his/her password, then a random number from 0 to 9 will be selected and pushed into the array that will hold all password. The same will be repeated for the other questions (upper case alphabets, numbers and special characters) depending on what the user selected. 

Once the selections have been randomly selected and pushed into the array, then the array will be 'join' so the password that was randomly selected for the user will be generated without any space of any kind. 