# Milestone 3

## Project Realization - Overview

Over this Milestone 2, the team has worked continuously on the application to fulfill all the goals set to complete by end of the semester and to deliver secure web application to the Omaha STEM Ecosystem organization with decent functionality. 

Upon the realization of project requirements and technology methodologies from the Milestone 1, in Milestone 2 workflow diagrams are created based on C4 models to show how users will interact with the application and UML activity diagrams are used to get an good idea of how each functionality will work in the application and its feasibility in the future.

Apart from the application development, as a cyber security students, we are very much cautious in implementing the security measures and features where ever necessary in application wide in a given time period.

### Progress:

Since we finished building our backend and frontend frameworks along with few features in Milestone 1, team is very much focused on implementing the major functionality features of the application. Using Agile methodology, it made possible for us to follow on our development progress and successfully completed all the issue tickets that are opened. 

In this Milestone 2, we majorly concentrated on implementing security features along with the development of functionality features. For each functionality as much as, possible we hoped with security measures such as validating input on frontend and backend, password lockout policy, sessions and token management, and role-based access. we continued to follow proper coding standards, naming conventions and security measures.

At present, we are ready to handover the finished application with the functionality features that are working fully to the Omaha STEM Ecosystem organization.

### Outcomes:

We finally achieved our end goal of creating a secure web application that allows users (students, parents, educators, and counselors) to access the STEM events that are categorized and listed in their respective tagged technology. Using one of the secure Django REST and Angular framework, we were able to develop a decent web application that help parents, teachers, counselors and students connect to grow interest and march students with relevant STEM camps and programs in the Omaha community. This application will help the STEM Ecosystem organization in collecting the user interest data through which they can help the users by recommending events in their interested area. With the available fully functional features, we believe Omaha STEM Ecosystem organization can take up this project to next level with the continuation of work.

In reaching end of the course work, we accomplished the following major functionalities.

* Events are listed in their own respective tagged technology
* Search functionality has been implemented
* For the User Registration we are validating each input given by the user on frontend and backend.
* For the Login functionality we are handling the sessions and token management. 
* Since the application has different users, users are constrained to activities to perform on the page based on their role such as 
 > Students cannot create child account and cannot see the parent profile
 
 > Only approved educators can add new events 
 
 > Parents can create child accounts
 
 > Only Admin can unlock the locked user account, can approve new user account.
* To prevent the brute force attack, implemented the password lockout feature after 3 unsuccessful login attempts.

### Hinderances:

* Group communication can be hit or miss with various schedule differences and conflicts.
* Focusing on functionality outside of the planned sprint.
* Group communication can be hit or miss with various schedule differences and conflicts.
* Over implementing, implementing UI behavior that is annoying an/or not needed.
* JSONAPI implementation in Angular did not go as well as we had hoped.
