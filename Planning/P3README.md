# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Full Stack MERN Application

### Overview

While your last project taught you how to get started with writing a fullstack application in JavaScript using Express, Mongoose, and Node, this project will have you building another full stack application, but this time with a React front-end.

Your instructors have grouped you with other classmates to design and build an app with two major components:

1. An API of your own design, built using Node, Express, and Mongoose, that serves JSON.
2. Front-end React code that updates the UI and makes requests to the API.

**This is meant to push you both technically and collaboratively.**  You will, almost certainly, be joining a development team during your career.  Working collaboratively is a learned skill, just like programming. It's important to learn how to work together.

---

### Requirements

> ### *Do not use Redux for this project*

#### Back-End Requirements
  - This app must contain a Node, Express, and Mongoose backend API with at least 2 models. No associations are required. User authentication is **strongly discouraged since it is often a major stumbling block**.
  - Must have Create, Read, Update, and Destroy functionality.

#### Front-End Requirements
  - This app must use a React front end that leverages the backend API in the above requirement.
  - Must use React Router to handle multiple views.
  - Must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources, using fetch or axios.

#### Deployment
  - Your API must be deployed to Heroku and your front-end must be deployed to GitHub pages or Surge.

    > We strongly recommend deploying your back-end and front-end separately. This will make it far easier to debug your deployed applications and manage your deployments.

---

### App Organization

You should split your application into separate repositories, one for your React front-end and another for your Node-Express-Mongoose API.

[See deploying to Heroku with MLAB cloud-hosted MongoDB here](https://git.generalassemb.ly/ga-wdi-lessons/express-mongoose-mlab-deploy).

---

### Contribution Guidelines

  - Each member of your group ***must have an individual commit history*** to your project's repositories (Multiple commits per group member).
  - Each project should include a `readme.md` that defines the roles of each group member. Specifically, it should include the responsibilities of each member and their contributions.
  - Each member of your group is expected to present for an equal amount of time during [project presentations](presentations.md), which last at least 10 minutes per group.
  - During 10-minute daily scrums with an assigned instructor, teams members must share progress. Scrum discussion topics may include goal-setting, time management, goal progress, and individual group contributions. This is **not** time to address technical issues. The instructor will check in with groups every day of project week.

---

### Process

* **Keep user stories small** and well-defined. Remember: user stories focus on what a user *needs*, not what development tasks need accomplishing.
* **Write pseudocode** before you write actual code. Thinking through the logic first helps.
* **Don't hesitate** to write throwaway code to solve short-term problems.
* **Read the docs** for whatever technologies / frameworks / API's you plan to use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
* **Continuously Deploy** your code.

---

### Code

* **Keep your code DRY** and build your APIs RESTful.
* **Be consistent** with your code style. You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
* **Commit early; commit often.** Don't be afraid to break something because you can always go back in time to a previous version (so long as you're committing often).
* **Deploy early; deploy often.** Deploy your work as early as possible, even if you don't really have anything completed. Heroku issues **always** pop up. Don't be caught short just before the submission deadline!
* **Name things appropriately.  Comment as necessary.** Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is? (See ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting)).  Even if it's obvious, comments can help to explain the intent -- the what and why.  This allows the next developer to understand the purpose and decide what can be adjusted to achieve the same goal.
* **Ensure it is well-formatted.** Are you indenting consistently? Can we find the start and end of every div, curly brace, etc?  Organizing the hierarchy is key to understanding.

Teams of developers usually adhere to an agreed-upon set of code-style rules. This reduces issues with reading our colleagues' code. We strongly recommend using [StandardJS linting](https://github.com/standard/standard#install). Instructions for Atom package installation [here](https://github.com/standard/standard#atom).

---

### Project Ideas

For this project, work with your team to build a creative product that you actually think someone will want to use.

If you're struggling to come up with your own project ideas, checkout [r/startup_ideas](https://www.reddit.com/r/Startup_Ideas/) on reddit or [requestforstartup.co](https://requestforstartup.co/).

<!-- All students are required to submit **two Project 3 ideas** as an issue [here](https://github.com/ga-wdi-exercises/project3/issues). The deadline for submission is August 18th at 9:00AM. -->

Once your team selects an idea, the group **must** choose a workflow from the [Git Teams & Workflow lesson](https://git.generalassemb.ly/ga-wdi-lessons/git-teams). Be prepared to share your team's plans with your assigned instructor at the first round of scrum.

#### Project Idea Submission Deadline

Project ideas will be due January 29th, at 12 pm.

Planning submissions must include:
  1. ERDs for models
  2. Rough wireframes for your views and user interface
  3. MVP Roadmap, which would include...
    - When you will have your models done by
    - Your schedule of creating components, adding features`

---

### Evaluation and Submission

[See the requirements for the contents of the submission here.](evaluation.md)

#### [Submit Your Project Here](https://github.com/ga-dc/project3-gallery/issues)

### Attendance

Attendance will be taken every day at 9:00AM. Remember to check in! You are required to work on campus all day, every day of project week.

---

### Support

Each group will be given four tokens, redeemable at any time for 15 minutes each. You can use one token per instructor. Tokens cannot be transferred between groups.

<!-- ### Useful Resources -->

<!-- * **[Deploying Heroku Apps with Custom Names](https://devcenter.heroku.com/articles/renaming-apps)** -->

---

### Bonuses

You should only attempt these bonuses if and only if you've satisfied project requirements.

#### User Authorization

Consider whether or not you want to introduce a barrier to entry for your application. Does it fit in with the idea of your application? User authorization is really tricky.

  > "Do I *really* need to log in just so I can post a link to a GIF?"

[Here](https://git.generalassemb.ly/ga-wdi-lessons/express-passport) is a GA lesson explaining how auth can be implemented in an Express application.

#### Maps

If your application uses physical locations, consider adding a map ***as a bonus feature*** to your application. [Check out this Google Maps component library](https://tomchentw.github.io/react-google-maps/).
