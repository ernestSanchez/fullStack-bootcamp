

Show User
Returns json data about a single user.

-URL

/tweets

-Method:

GET

-URL Params

NONE

-Data Params

[{"content":"a cascarla","fecha":"25/02/2020","usuario":"Juanito"}]

-Success Response:

Code: 200

Content:  {"content":"a cascarla","fecha":"25/02/2020","usuario":"Juanito"}

-Error Response:

Code: 401 UNAUTHORIZED

Content: {"error":"error"}

/////////////////////////////////////////////////////////////////////

Show User
Returns json data about a single user.

-URL

/editar

-Method:

POST

-URL Params

NONE

-Data Params

data.json

[{"content":"a cascarla","fecha":"25/02/2020","usuario":"Juanito"}]

-Success Response:

Code: 200
Content: "tweet successfully added " 

-Error Response:

Code: 401 UNAUTHORIZED
Content: "el body esta mal formado"



///////////////////////////////////////////////////////////////////
Show User
Returns json data about a single user.

-URL

/register

-Method:

POST

-URL Params

NONE

-Data Params

users.json

[{"username":"joselito","password":"282828"}]

-Success Response:

Code: 200
Content: { "successfully": "Added new user" }

-Error Response:

Code: 401 UNAUTHORIZED
Content: {"error":"Send bad body" }


////////////////////////////////////////////////////////////
  
Show User
Returns json data about a single user.

-URL

/login

-Method:

POST

-URL Params

NONE

-Data Params

users.json

[{"username":"joselito","password":"282828"}]

-Success Response:

Code: 200
Content: {"successfully":"User loged"}

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "Username or password is incorrect" }





