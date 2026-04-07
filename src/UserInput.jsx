export default function UserInput({toDoList, setToDoList}) {    
    function handleSubmit(formData) {        
        const userInput = formData.get("userInput")
        setToDoList([...toDoList, 
            {
                id: toDoList.length + 1,
                title: userInput,
                isCompleted: false,
                isShow: true,
            }
        ])
        
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