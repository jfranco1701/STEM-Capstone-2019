# STEM Ecosystem Portal
## Executive Summary
It's no surprise that STEM fields are incredibly important in this day and age. Omaha STEM Ecosystem is one of many organizations that strive to help parents, teachers, counselors, and students connect to grow interest in these fields early. The tricky piece is having an easy-to-use platform to facilitate this communication. Our goal is to make this as easy as possible by building a custom web application which achieves the following:
* Creates a community-driven portal to host and find events
* Caters recommended events based on user's interests
* Helps STEM Ecosystem collect data on event turnout and overall user interest

We believe this is an opportunity to build an experience for the next generation of STEM students. This project will provide a portal to facilitate communication various students and the subjects and projects they're interested in. The end of this project will include a baseline for STEM Ecosystem to grow into the future with their users on a scalable platform to help continue the advancement of students in science, technology, engineering, and mathematics.

## Project Goals
(high level project goals, reuse from milestone 1, update if scope changed)

## Project Methodology
* Cheap
  * Deployment/hosting/scaling
  * Develop/Maintain
* Predictable
  * ORM (Object-Relational Mapping)
  * Role-management
  * Framework adherence
* Secure
  * HTTPS
  * Permission checking
  * Input sanitization

## Results / Findings

We finally achieved our end goal of creating a secure web application that allows users (students, parents, educators, and counselors) to access the STEM events that are categorized and listed in their respective tagged technology. Using one of the secure Django REST and Angular framework, we were able to develop a decent web application that help parents, teachers, counselors and students connect to grow interest and march students with relevant STEM camps and programs in the Omaha community. This application will help the STEM Ecosystem organization in collecting the user interest data through which they can help the users by recommending events in their interested area. With the available fully functional features, we believe Omaha STEM Ecosystem organization can take up this project to next level with the continuation of work.

In reaching end of the course work, we accomplished the following major functionalities.
* Built secured backend and frontend environments (with the help of JSON web tokens)
* Added the front-page UI with a navigation bar for login/logout and profile settings
* Added a user registration page which will link to the backend API
* Added a user login page which links to the backend API for authentication
* Added a page for adding new events which links to the backend API for saving to the production database
* Events are listed in their own respective tagged technology
* Search functionality has been implemented
* For the User Registration we are validating each input given by the user on frontend and backend.
* For the Login functionality we are handling the sessions and token management.
* Since the application has different users, users are constrained to activities to perform on the page based on their role such as
  * Students cannot create child account and cannot see the parent profile
  * Only approved educators can add new events
  * Parents can create child accounts
  * Only Admin can unlock the locked user account, can approve new user account.
  * To prevent the brute force attack, implemented the password lockout feature after 3 unsuccessful login attempts.

## Install Instructions (if applicable)
### Requirements
(list of any software / hardware requirements necessary to run the code/app/etc)

### Installation Instructions
(list of steps to install the product/app/code/etc)

### Getting started
(list of any steps to run the code after installation and/or manage the apps over their lifecycle)

## Documentation
### How to Create Organization Accounts
The application allows orgranizations to create accounts from the registration page. New organization users will be able to login to the application, but will not be able to create events until they are approved by an administrator.
1. With no one logged in, click the __Register__ link at the top of the page 
2. Change the registration type from __Parent__ to __Organization__ 
<img src="pics/Register.png" width="60%">
3. Enter the form information and click __Complete Registration__

### How to Approve/Decline Organization Accounts
An administrator must approve an organization before the user can create events.  This is accomplished from the Django Administration site.
1. Open the Django Administration site and login as an admin user
2. Click on __Organizations__ on the left side of the page
3. A list of the organizations and their status will be shown
<img src="pics/Organization.png" width="60%">

4. Click the checkbox infront of the organization to review
<img src="pics/Org_Click.png" width="60%">

5. Click the drop-down box at the top of the page
6. Select either __approved__ or __declined__ and then click the __Go__ button
<img src="pics/Org_drop-down.png" width="40%">

### How Child Accounts Get Created From Parent Accounts
The application does not allow children to create their own accounts.  A parent must register for the site and then create accounts that be used by their children.  Each of these child accounts will be linked back to the parent and the parent can delete them at any time.

#### Creating Child Accounts
1. Log into the application as a parent user
2. Click the round button at the top right corner of the page
3. Click My Profile
4. The parent user's information will be displayed along with any existing child accounts at the bottom of the page
5. Click the "+" button to register a new child
6. Enter the requested information and click create
7. The process can be canceled at any time by clicking the "cancel" button

#### Updating/Deleting Child Account
1. Login to the application as a parent user and open the My Profile
2. Locate the child to be updated and the bottom of the page and click the box
3. A update page will be displayed that allows the parent to update the information or delete the account entirely
4. The update process can be canceled at any time by clicking the "cancel" button

### Login Activity Log
All attempts to login to the system, whether successful or not, will be logged by the system.  This log can be viewed from the Django Administration site.

#### Viewing the Log
1. Open the Django Administration site and login as an admin user.
2. Click on User_login_activites on the left side of the page.

