
const handleLogIn = async (body) => {
 const data =  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(data => console.log( data));

}

export {handleLogIn}


    
    // username: 'kminchelle',
    // password: '0lelplR',
    // expiresInMins: 60, // optional

