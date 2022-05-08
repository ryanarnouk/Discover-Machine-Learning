# Discover Machine Learning
**An interactive beginner friendly introduction to the world of machine learning with a easy to use, visual code block editor.** 

*Please note that the interactive building block features of Discover Machine Learning may be functioning incorrectly after the project has begun redevelopment. Old commits of the project will have a working code-block functionality and the problem in more current commits will be resolved soon.*

## Contributing
### Getting Started 
To get set up follow these steps: 
1. Clone the repository 
`git clone https://github.com/Azbo400/Discover-Machine-Learning.git`
2. Install NPM modules
`npm install` 
If NPM install fails, try running `sudo npm install -g node-gyp`. 
3. Set up environment variables
Sign up for a Firebase account and set up a project, with the project setup firebase would provide you with credentials. 
```
var config = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxx"
};
```
With these credentials, create environment variables in a `.env` file to fill in each value. 
Keep in mind that since this project is made with create-react-app you need to add `REACT_APP_` before each variable.

Here is what your .env file should look like: 
```
REACT_APP_API_KEY=xxxxxxxxx
REACT_APP_AUTH_DOMAIN=xxxxxxxx.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxxxxx.firebaseio.com
REACT_APP_PROJECT_ID=xxxxxxx
REACT_APP_STORAGE_BUCKET=xxxxxxxx.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxxxxxxx
SKIP_PREFLIGHT_CHECK=true
```
4. Now that environment variables are set up, build the project to register all the variables run `npm run build`
5. With our environment variables built the project should run fine now in development mode. To run it in localhost simply run `npm start`

### Deploying
Build to an Amazon S3 bucket:
1. Build the project `npm run build`
2. Deploy to S3 `npm run deploy`

Changes would take around 24 hours to appear as their is a Cloudfront distribution that the app points to. To remove previous caches of the application and push new changes right away create an invalidation.

Typically, in AWS dashboard create an invalidation and set it to `/*` to update all the files in the project and clear previous caches of the application. 

More can be found about invalidating files here: 
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html


### Adding Lessons
Lessons can be found in the seed directory inside src `/src/seed/`. 

Inside there are 4 sub folders. 
- Challenges
- Glossary
- Quiz 
- Schema 

To edit a challenge you can simple look inside the challenges directory find the section it is in with the subfolder and edit the `lesson.json` file and add any changes. 


To add a definition to the glossary you can edit `/glossary/glossary.json` and to add or edit a question on the quiz section simply look inside `/quiz/quiz.json`

To add definitions to the glossary you can definitions in the format 
``` 
{
  "name": "name of definition",
  "description": "describe the definition"
}
```

When calling a definition inside of the challenges JSON file you can do this: 
```
"definitions": [
  "name of definition,index (id)"
]
```
so...
```
"definitions": [
  "Computer Programming,2"
]
```

Developed by Ryan Arnouk 2018-2019