function main(){
    if(navigator.geolocation)
        {
            console.log('Hello');
            navigator.geolocation.getCurrentPosition(onPositionRecieved,locationNotRecieved,{timeout:0});
        }
}

function onPositionRecieved(position){
    console.log(position);
} 

function locationNotRecieved(positionError){
    console.log(positionError);
}