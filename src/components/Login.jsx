

export default function Login(){
    

  function handleSubmit(event) {
    event.preventDefault()
    
  }
    return (
        <div className="card mx-auto my-5 p-3 shadow" style = {{width:'600px'}} >
            <div className="card-img-top mx-auto" style = {{width:'300px'}}>
                <img src="images/logo.png"  width="100%"  alt="logo" />
            </div>
<form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">

    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button className="btn btn-success w-100">Login</button>
  </form> 
    <div className="card-img-link text-center my-3">
        <p><a href="#" className="text-muted text-decoration-none">Forgot your password?</a></p>
        <p> <a href="#" className="text-muted text-decoration-none">Sign up for an account</a></p>
       
    </div>

        </div>
    )
}