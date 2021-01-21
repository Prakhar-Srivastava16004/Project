
function gotoListing(){
    window.location.href = '/listing';
}

function Login() {
  return (
    <button onClick={gotoListing}>Login</button>
  );
}

export default Login;
