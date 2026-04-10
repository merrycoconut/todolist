export default function UserInput({handleAdd}) {    
    function handleSubmit(formData) {        
        const userInput = formData.get("userInput");
        handleAdd(userInput);        
    }

    return (
        <div className="user-input-conditioner">
            <form action={handleSubmit}>                                
                <input className="user-input" name="userInput" defaultValue="What is your plan today?  " />                
                <button className="submit-button" type="submit">+</button>
            </form>
            
        </div>
        
    )
}