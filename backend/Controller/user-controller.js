


export const getusers = (request , response) =>{
    
    try{

        response.status(200).json("get connected");
    }
    catch(e){
        response.status(404).json({ message: e.message })
    }

}

export const addusers = (request , response)=>{
    response.send("code ");

}