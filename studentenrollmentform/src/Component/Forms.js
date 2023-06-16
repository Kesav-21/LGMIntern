const Forms=(props)=>{
    return(
      <div className="forms">
        <h1>Fill the Form</h1>
        <form onSubmit={props.sub} className="form-container">
          <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required/>
          </div>
          <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
          </div>
          <div className="form-group">
          <label htmlFor="web">Website</label>
          <input type="text" name="web" required/>
          </div>
          <div className="form-group">
          <label htmlFor="imglink">Image Link</label>
          <input type="text" name="imglink" required/>
          </div>
          <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div>
          <input type="radio" id="male" name="gender" value="male"/>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label htmlFor="female">Female</label>
          </div>
          </div>
          <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <div>
          <input type="checkbox" id="skill1"  value="JAVA"  name="skill"/>
          <label htmlFor="skill1">Java</label>
          <input type="checkbox" id="skill2" value="HMTL"  name="skill"/>
          <label htmlFor="skill2">HTML</label>
          <input type="checkbox" id="skill3" value="CSS" name="skill"/>
          <label htmlFor="skill3">CSS</label>
          </div>
          </div>
          <div className="form-group-btn">
          <input id="submit" type="submit" value="Enroll"/>
          <input id="clear" type="button" value="Clear" onClick={(e)=>{e.target.form.reset()}}/>
          </div>
        </form>
      </div>
    )
  }
  
  export default Forms;