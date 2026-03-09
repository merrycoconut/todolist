export default function UserInput() {
    // TBD: add input field and button to add new todo item
    function handleSubmit(e) {

    }

    return (
        <div className="user-input-conditioner">
            <form onSubmit={handleSubmit}>                                
                <input className="user-input" name="userInput" defaultValue="What is your plan today?  " onChange/>                
                <button className="submit-button" type="submit">+</button>
            </form>
            
        </div>
        
    )
}