

export default function Signup(){
    

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
  
      <input type="text" className="form-control" id="fullname" placeholder="Name" name="fullname"/>
    </div>

    <div className="mb-3 mt-3">
  
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>

    <div className="mb-3">
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
 
    <button className="btn btn-success w-100">Register</button>
    </form> 
      <div className="card-img-link text-center my-3">
          <p><a href="#" className="text-muted text-decoration-none">Forgot your password?</a></p>
          <p> <a href="#" className="text-muted text-decoration-none">Back to login</a></p>
         
      </div>
  
          </div>
      )
  }