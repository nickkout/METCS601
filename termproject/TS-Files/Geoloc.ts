
let map, infoWindow;
 
//generates map from geoloc coordinates
function genMap():void {

    //default map location
    map = new google.maps.Map(document.getElementById("geo-map") as HTMLElement, {
     center: { lat: -34.397, lng: 150.644 },
     zoom: 6,
    });
    
    //InfoWIndow obj
    infoWindow = new google.maps.InfoWindow();

    //create button on map
    const locBttn:HTMLElement = document.createElement("button");
    
    locBttn.textContent = "Pan to Current Location";
    locBttn.classList.add("custom-map-control-button");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locBttn);

    locBttn.addEventListener("click", () => {

     //HTML5 geolocation
     if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos:any = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                 GeoLocError(true, infoWindow, map.getCenter());
                }
            );
   
      } else {
       //Browser doesn't support geolocation
       GeoLocError(false, infoWindow, map.getCenter());
      }
    });
}

//displays any errors
function GeoLocError(browserHasGeolocation:any, infoWindow:any, pos:any) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation
     ? "Error: The Geolocation service failed."
     : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}












