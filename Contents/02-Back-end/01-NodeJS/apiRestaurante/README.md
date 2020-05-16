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

{"username":"Juanito","password":"282828","email":"juanito@gmail.com"}

-Success Response:

Code: 200
Content: { "message": "Add new user" }

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "body incorrect" }

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

{"username":"Juanito","password":"282828","email":"juanito@gmail.com"}

-Success Response:

Code: 200
Content:{ "message": "usuario logeado", "token": token }

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "usuario no existe" }


////////////////////////////////////////////////////////////


Show User
Returns json data about a single user.

-URL

/pedidos

-Method:

GET

-URL Params

NONE

-Data Params

data.json

{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Success Response:

Code: 200
Content:{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "error": "error" }

////////////////////////////////////////////////////////////////////////////////

Show User
Returns json data about a single user.

-URL

/pedido/:indice

-Method:

GET

-URL Params

NONE

-Data Params

users.json

{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Success Response:


Code: 200
Content:{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

////////////////////////////////////////////////////////////


Show User
Returns json data about a single user.

-URL

/crearPedido

-Method:

POST

-URL Params

NONE

-Data Params

data.json

{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Success Response:

Code: 200
Content:("Pedido realizado correctamente")

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "Error": "Body send incorrect" }

//////////////////////////////////////////////////////////////////////////


Show User
Returns json data about a single user.

-URL

/editarPedido

-Method:

PUT

-URL Params

NONE

-Data Params

data.json

{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Success Response:

Code: 200
Content:("pedido successfully modify")

-Error Response:

Code: 401 UNAUTHORIZED
Content: { "Error": "Body send incorrect" }

//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////


Show User
Returns json data about a single user.

-URL

/eliminarPedido/:id

-Method:

DELETE

-URL Params

NONE

-Data Params

data.json

{"productos":["zumo","peras"],"fecha":"20/02/2020","direccion":"donde sea cuando sea","precio":"10€","id":2}

-Success Response:

Code: 200
Content:("pedido removed")

-Error Response:

Code: 401 UNAUTHORIZED
Content: ("Error pedido no exist")



