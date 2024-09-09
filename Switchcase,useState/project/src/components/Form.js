import React from 'react'

function Form() {
  return (
    <div>
    <form>
        <label>States</label>
        <select onChange={(eo)=>{
            console.log(eo.target.value);
            let stateSelector = eo.target.value;
            if(eo.target.value == "Andhra Pradesh"){
             console.log("Amaravathi");
            }else if(stateSelector =="Telangana"){
                console.log("Hyderabad");
            }else if(stateSelector == "Kerala"){
                console.log("Thiruvananthapuram");
            }else if(stateSelector == "Tamil Nadu"){
                console.log("Chennai");
            }else if(stateSelector == "Karnataka"){
                console.log("Bengalaore");
            }else if(stateSelector == "West Bengal"){
                console.log("Kolkata");
            }else if(stateSelector == "Madhya Pradesh"){
                console.log("Bhopal");
            }else if(stateSelector == "Maharashtra"){
                console.log("Mumbai");
            }else{
                console.log("Some Other States")
            }

            switch (stateSelector) {
                case "Andhra Pradesh":
                    console.log("Amaravathi"); 
                    break;
                case "Telangana":
                    console.log("Hyderabad");
                    break;
                        case "Kerala":
                            console.log("Thiruvananthapuram");
                            break;
                            case "Tamil Nadu":
                                console.log("Chennai");
                                break;
                                case "Karnataka":
                                    console.log("Bengalore");
                                    break;
                                    case "West Bengal":
                                        console.log("Kolkata");
                                        break;
                                        case "Madhya Pradesh":
                                            console.log("Bhopal");
                                            break;
                                            case "Maharashtra":
                                                console.log("Mumbai");
                                                break;
                default:
                    break;
            }
            }}>
            <option>Select State</option>
            <option>Telangana</option>
            <option>Andhra Pradesh</option>
            <option>Kerala</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>West Bengal</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
        </select>
    </form>
    </div>
  )
}

export default Form
