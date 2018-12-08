import React, { Component } from 'react';
import JSONloader from './JSONloader';
import Parser from 'html-react-parser';
import ProfileNavbar from './ProfileNavbar';
import { Link } from 'react-router-dom';

class Hint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNumber: this.props.match.params.id - 1,
    }
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div style={{fontFamily: 'Rubik', textAlign: 'center', backgroundColor: '#DBDBDB',  height: '80%', width: '30%'}}>
          <h1>Submit a Bug Report</h1>
          <form action="https://postmail.invotes.com/send"
            method="post" id="email_form">
            
            <div>
              <input type="text" name="subject" placeholder="Bug Problem" className="bugreporttext"/><br/>
              <textarea name="text" placeholder="Describe the bug be sure to include specific problems" className="bugreporttext" style={{marginTop: 10, height: '40vh'}}></textarea><br />
              <input type="hidden" name="access_token" value="ddz8u81ne6hej3542o04tpr3" />
              <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
              <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
            
              <input type="text" name="reply_to" placeholder="Email" className="bugreporttext" style={{marginTop: 9}}/><br/>

              <input id="submit_form" type="submit" value="Send" style={{backgroundColor: '#26407F', border: 'none', color: 'white', padding: '10px 15px', textDecoration: 'none', display: 'inline-block', cursor: 'pointer', margin: '14px'}}/>
            </div>
          </form>
          {() => {
              var submitButton = document.getElementById("submit_form");
              var form = document.getElementById("email_form");
              form.addEventListener("submit", function (e) {
                  setTimeout(function() {
                      submitButton.value = "Sending...";
                      submitButton.disabled = true;
                  }, 1);
              });
            }}
        </div>  
      </div>
    )
  }
}
 
export default Hint;