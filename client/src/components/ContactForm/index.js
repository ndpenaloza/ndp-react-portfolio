function Contact () {
  return (
    <div>
      <div className="container main-content col-md-8 offset-md-2">
        <div className="card">
          <div className="card-header">
            <h4 className="text-center">Contact Me</h4>
          </div>
          <form>
            <div className="form-group">
              <label for="exampleInputName" id="name-label">Name</label>
              <input type="name" className="form-control" id="exampleInputName" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-secondary" id="contact-submit">Submit</button>
          </form>
        </div>  
      </div>
    </div>
  );
}

export default Contact;