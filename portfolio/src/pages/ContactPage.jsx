export default function ContactPage() {
    return (
        <fieldset>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name"/>
                <label for="email">Email:</label>
                <input type="text" id="email"/>
                <label for="message">Message:</label>
                <textarea id="message"></textarea>
                <button type="submit" id="contact-submit">Submit</button>
            </form>
        </fieldset>
    );
}