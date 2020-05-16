

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

{"username":"joselito","password":"282828"}

-Success Response:

Code: 200
Content: { "message": "Usuario creado con exito!" }

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "has mandado mal el body" }



Sample Call:

  $.ajax({
    url: "/register,
    dataType: "user-json",
    type : "POST",
    success : function(r) {
      console.log(r);
    }
  });

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

{"username":"joselito","password":"282828"}

-Success Response:

Code: 200
Content: { "message": "Usuario loggeado" }

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "has mandado mal el body" }

Sample Call:

  $.ajax({
    url: "/login,
    dataType: "user-json",
    type : "POST",
    success : function(r) {
      console.log(r);
    }
  });