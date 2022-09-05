export default function Clint() {
    function addClint(event) {
        event.preventDefault()
        
      }
    return(
        <div class="container-fluid p-5 "   >
             <div className="well-title  border-bottom-1 mb-3">
            <h2>Add Client</h2>
            <hr />
        </div>
        <div className="card shadow p-3" width="80%">
        <form  onSubmit={addClint}>
            <div className="row">
            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span> Client Name</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span> Email Address</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span> Password</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span> Phone</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"> Skype id</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"> Facebook id</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname">URL</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"> City</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"> State</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname">Zip code</label>
                    <input id="fullname" name="fullname" type="text" className="form-control input-md" required/>
                </div>
             </div>

            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span> Country</label>
                    <label className="control-label" htmlFor="country">Country</label>
                        <select id="country" name="country" className="form-control" required>
                            <option value="Afganistan">Afganistan</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                        </select>     
                </div>
             </div>
             <div className="col-md-12">
                <div className="form-group"> 
                <label className="control-label" htmlFor="country">Address</label>
                <textarea className="form-control" id="message"  rows="8" data-error="Write your message" required></textarea>
             
                </div>
            </div>    
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <label className="control-label" htmlFor="fullname"><span style={{color:'red'}}>*</span>Active/Inactive</label>
                    <select id="country" name="country" className="form-control" required>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select> 
                </div>
             </div>



        </div>
        <div className=" mb-1" >
                <div className="form-group" style={{width:"250px"}}>
                    <label className="control-label" htmlFor="fullname">Upload your photo</label>
                    <div style={{border:"2px dashed grey"}}>
                            <img src="images/avatar.png" alt="avatar" width="100%"/>
                    </div>
                    <input id="fullname" name="fullname" type="file" className="invisible" required/>
                </div>
                <p className="text-muted"> The profile must be file of jpg</p>
        </div>
        <hr />
        <button className="btn btn-success me-3 rounded-pill" type="submit">Submit
        </button>
        <button className="btn btn-danger rounded-pill" type="reset">Cancel</button>
        </form>
        </div>
      
    </div>

    )
}