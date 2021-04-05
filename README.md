# Backend
The backend uses MongoDB for the database  and express for middleware, written in javaScript. Postman was used to test the CRUD operations/routes.
## Features
Full CRUD, create, destroy, edit, and view of the clients, prospects, and users.
User login feature using bcrypt to hash their passwords and issue user tokens. 
Tokens are stored in the front end in order to allow users to log in and use site features ( stored in the browsers local storage)
Three Database schemas were used to define the Client, prospects, and users record in the database
Each of these schemas were given controllers that defined their routes for the crud operations to be perfomed when requested from the front end.  A seed file was created in order to have some test data to use for development.

## Future goals/improvements 
Currently, the users tokens are only used for the initial login, and not for authentication of Crud requests. 
In the future, we hope to come back to this project and create different classes of users with higher/different privaleges

Currently, the image feature of the site stores direct image links in the database that is displayed via an image tag on the frontend. However, this 
relies on these images continually being hosted by their respective websites. In the future, adding an actual upload feature where the image is stored on a server 
would be more ideal. 

Lastly, the current schemas/information inside of them is simple. Adding more information/features to the app is definitly a goal. 
