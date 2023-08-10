# Age-Calculator-Timer
This is a user-friendly age calculator with a date of birth (DOB) selector. Users can input their date of birth, and the calculator displays their age in years, months, days, hours, minutes, and seconds. The code includes functions to manage the calculator's behavior, update the displayed age in real-time, and store the DOB using the browser's localStorage.

#Features

#Date of Birth Selector: Users can easily input their date of birth using the provided input field.

#Real-time Age Calculation: The calculator dynamically calculates and displays the user's age in various time units as time progresses.

#Interactive Interface: The calculator UI includes buttons for setting the date of birth, toggling the DOB selector, and showing/hiding UI elements based on user interaction.

#Persistent Data: The user's date of birth is stored in the browser's localStorage, ensuring that it is retained even if the page is refreshed or closed.

#Code Structure: The code is modular and well-organized, making it easy to understand, modify, and integrate into your projects.

The code automatically handles age calculation, localStorage, and UI interaction.

#How it Works

The code initializes variables and constants, including references to DOM elements and date-related information.

Functions like makeTwoDigit are used to format numbers into two-digit strings.

toggleDateOfBirthSelector toggles the visibility of the date of birth selector.

updateAge calculates the user's age and updates the displayed time units.

LocalStorageGetter retrieves the stored date of birth from localStorage.

contentToggler manages the visibility of text elements based on whether a date of birth is entered.

setDOBHandler handles the user input of the date of birth, stores it in localStorage, and triggers the age update at regular intervals.

Event listeners are attached to the settings icon and the "Set DOB" button.
