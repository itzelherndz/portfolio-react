export default function ContactPage() {
    return (
        <fieldset>
            <form className="container-fluid">
                <div className="row">
                    <label for="name">Name:</label>
                    <input type="text" id="name"/>
                </div>
                <div className="row">
                    <label for="email">Email:</label>
                    <input type="text" id="email"/>
                </div>
                <div className="row">
                    <label for="message">Message:</label>
                    <textarea id="message"></textarea>
                </div>
                <button type="submit" id="contact-submit">Submit</button>
            </form>
        </fieldset>
    );
}