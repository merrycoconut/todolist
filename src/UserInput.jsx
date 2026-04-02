export default function UserInput() {    
    function handleSubmit(e) {
        // TBD: Handle user input when user clicks the submit button

    }

    return (
        <div className="user-input-conditioner">
            <form onSubmit={handleSubmit}>                                
                <input className="user-input" name="userInput" defaultValue="What is your plan today?  " />                
                <button className="submit-button" type="submit">+</button>
            </form>
            
        </div>
        
    )
}