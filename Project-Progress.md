# Milestone 2

## Project Realization - Overview

Initially in Milestone 1, we planned on gathering the requirements to build the appropriate backend and frontend environments. Based on the meeting with Omaha STEM Ecosystem, we decided to follow an Agile methodology. Tickets are added to sprints each week and individual group members took on a set of tasks.

As a team of 4 members, we divided work and have been working on two different portions of the project.

The major portion of the project (**Part 1**): Two team members worked on the ground work to build the environment for the frontend and backend based on the requirements we gathered from Omaha STEM Ecosystem.

The second portion of the project (**Part 2**): Started to work on the functionality (Home page with Nav bar, Registering Users page and Login) parts of the project.

### Progress:

The team has almost finished the major chunk (Part 1) of the project. Over the earlier weeks, we worked on completing the intial build of the frontend framework (based in Angular) and backend (based in Django REST framework). Docker was also used to run and deploy our web application using Docker containers with the help of Docker Compose. The major reason of choosing these environments is to solidify the groundwork of the application in providen security practices which apply directly to our framework set. For example, we incorporated a Django library for JWT management (JSON Web Token) which is one of the ways we integrated a tool for the purpose of security.

Since we finished building secure environments for backend and frontend, we are currently very focused on implementing the major application functionalities and requirements that are discussed in the meeting with Omaha STEM Ecosystem. 

Apart from building environments, implementing application functionalities and security best practices, the team is very concerned about consistency throughout the codebase and following proper coding standards, naming conventions, and removing unnecessary objects. Since we have many coding standards, we decided to be on same page by reviewing code consistency and functionality before merging into the master branch.

### Outcomes

In reaching milestone 2, we accomplished the following major tasks that required to start building application functionalities:

* Gathered requirements for the application
* Built secured backend and frontend environments (with the help of JSON web tokens)
* Added the front-page UI with a navigation bar for login/logout and profile settings
* Added a user registration page which will link to the backend API
* Added a user login page which links to the backend API for authentication
* Added a page for adding new events which links to the backend API for saving to the production database

### Hinderances

* Learning Django and Angular design patterns has pushed work items past their expected sprint completion date.
* Focusing on functionality outside of the planned sprint.
* Group communication can be hit or miss with various schedule differences and conflicts.
* Over implementing, implementing UI behavior that is annoying an/or not needed.
* JSONAPI implementation in Angular did not go as well as we had hoped.

_Special note regarding JSONAPI_: Since this was recommended by Dr. Hale, we figured it be smart to include our experiences with this one. Unfortunatley, it was difficult to find an Angular library that was mature and well supported. The library we did chose was not well documented and made it difficult to work with the data returned from the API. We attempted to find another library, but nothing worked any better than the original one we selected. After a few weeks, we became concerned that this would would overly complicate the hand off of the application to a third-party. The library was therefore removed.

### Ongoing Risks

| Risk Name (value) | Impact | Likelihood | Comments |
| ------------------|--------|------------|----------|
| Misunderstanding the project requirements (75) | 5 | 5 | After meeting with the stakeholders of this project, we've been able to better understand the vision for this semester and the desired state at hand off. |
| Technical Debt (50) | 3 | 3 | We've done a great job in code reviews to make sure we limit our technical debt impacts for the long-term of the project. We stick to active projects and libraries to add to ensure the stability of the project past this semester. |
| Inaccurate estimations (25) | 7 | 4 | Although we've done a much better job of limiting work on a per-week basis, it can still be tricky to split stories that are a bit too large. |
| Team member availability (20) | 8 | 7 | We all have life things happening (as is everybody in the class) which can cause sprint work to be delayed. We've been working on improving sprint planning to avoid deadlock issues with multiple stories relying on each other in a single sprint. |
| Limiting project scope (30) | 5 | 3 | We've been able to severely limit our scope after meeting with the stakeholders of the project. We still have some occurrences that appear, but overall, we've been able to keep a decent hold on things. |

# Diagrams

## System Context Diagram
![System Context Diagram](pics/System_Context_Diagram.png "")

## Container Diagram
![System Context Diagram](pics/Container_Diagram.png "")

## Component Diagram
![Component Diagram](pics/Component_Level.jpg "")


## UML Activity Diagram
![UML Activity Diagram](pics/UML_Activity_Diagram.png "")
![UML Activity Diagram Login](pics/UAD_Login.png "")
![UML Activity Diagram Registration](pics/UAD_Registration.png "")
![UML Activity Diagram Profile](pics/UAD_Profile1.png "")
![UML Activity Diagram Profile](pics/UAD_Profile2.png "")
![UML Activity Diagram Events](pics/UAD_Event.png "")
