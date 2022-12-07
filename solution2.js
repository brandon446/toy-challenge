const inputSpeed =(speed)=>{
    if(speed<70){
        console.log("OK")
    }
    else{
        const overspeed = Math.floor((speed - 70)/5);
        if(overspeed <=12){
            console.log(`points: ${overspeed}`);
        }
        else{

            console.log(`License suspended`)
        }





    }









}