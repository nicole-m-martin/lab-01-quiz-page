# lab-01-quiz-page

Think of these like 'Tickets' on the job
Outcomes:

- There should be an alert
- There should be a confirm so the user can opy out
- There should be a first name prompt
- There should be a last name prompt
- There should be three question prompts
- The user should be able to see their results after the quiz

HTML Setup:

- Some information, with image and list items
  - Why? So the user knows what to do.
- A button
  -Why? to launch quiz
- We need a secret, empty results div

  - Why? to inject/display the results to the user

  1. Get DOM Elements

  - button
  - secret div

  2. Add event listeners

  - button

  3. Respond to user input

  - launch an alert
  - launch a conformation
  - if the user says no, nothing else happens (return nothing)
  - if the user says yes, launch series of prompts
  - launch a first name prompt
    - store that output to display later
  - launch a first name prompt
    - store that output to display later
  - launch quiz prompts with specific yes/no questions

    - how do we evaluate the answers?
      - Yes
      - Y
      - yeah
      - yes
      - anything that starts with a y counts as yes
      - how many times are we going to count as a yes?
        - three times
        - write a 'countsAsYes' function, no copy and paste this way

  - make a results string
  - display that results string

    - inject stuff into the 'textContent' of our secret box

    ( git push add this note)
