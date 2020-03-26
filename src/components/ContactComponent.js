import React, { Component } from 'react'

class ContactComponent extends Component {

    state = {
        emailDestiny: "vinicius.oliveirafonseca@gmail.com",
        emailSender: null,
        subject: null,
        emailContent: null
    }

    handleInputs(){
        this.setState({})
    }
    // handleSendEmail()
    // handleResponseButton()

    render() {
        return (
            <div className="contact">
                <div>
                    <h1>Request my service!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem cumque eos dolorem distinctio nesciunt saepe fugiat quo eum! Delectus veniam non tempora doloribus, eos iste repellat ipsum modi alias.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequatur voluptates, possimus veniam error autem quaerat veritatis suscipit iste aspernatur provident maiores fuga cum minima omnis sequi rem, praesentium similique!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur mollitia tempore sequi? Eius illo cumque dicta, tempore voluptatibus dolorum sunt recusandae ab delectus incidunt accusamus! Beatae aliquid maxime neque.
                    </p>
                </div>
                
                <form>
                    <label htmlFor="emailSender">Your e-mail</label>
                    <input type="email" name="emailSender" required/>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" required/>
                    <label htmlFor="content">Content</label>
                    <input type="" name="content" required/>
                    <div id="google-oauth">
                        
                    </div>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default ContactComponent