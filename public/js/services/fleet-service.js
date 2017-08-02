angular.module('FleetService', []).factory('FleetService', ['$http', function($http) {


    var mapEntries = {
        gasPumps: generateMapEntries("Pump", {
            url: "../images/gas-pump.png",
            scaledSize: new google.maps.Size(19, 19)
        }),

        trucks: generateMapEntries("Truck", {
            url: "../images/truck.png",
            scaledSize: new google.maps.Size(19.5, 16.5)
        }),


        plants: generateMapEntries("Drilling Plant", {
            url: "../images/plant.png",
            scaledSize: new google.maps.Size(25.6, 25.2)
        }),


        trailers: generateMapEntries("Trailer", {
            url: "../images/trailer.png",
            scaledSize: new google.maps.Size(32, 16)
        })
    }
    
    return {
        getMapEntries : function(fleetType){
            return mapEntries[fleetType];
        }
    }


}]);


// Helper Functions

function getRandomNum(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

/**
 * Generates map entries for a type
 * @param   type    [type of map entry e.g. Drilling Plant, Trailer]
 * @param   iconObj [contains icon url and scaledSize]
 * @return [entries] 
 */
function generateMapEntries(type, iconObj){
    var entries = [];
    for(var i = 0; i < 7; i++){
        var id = getRandomNum(0, 9999);
        var lat = getRandomNum(30, 47);
        var lng = getRandomNum(-120, -85);
        entries.push(
        { 
            id: id, latitude: lat , longitude: lng,
            window: "<table> <tr> <th> "+type+" Id: </th> <td> &nbsp; "+id+" </td> </tr> " +
            "<tr> <th> Location: </th> <td> &nbsp; "+addresses[getRandomNum(0, addresses.length-1)]+" </td> </tr> " + 
            "<tr> <th> Lat Lng: </th> <td> &nbsp; "+ lat + ", "+ lng+ " </td> </tr> " + 
            "<tr> <th> Maintenance Status: </th> <td> &nbsp; "+maintenanceStatus[getRandomNum(0, maintenanceStatus.length-1)]+" </td> </tr> " + 
            "</table>",
            icon: iconObj
        });
    }
    return entries;
}



var addresses = [
    "East Troy",
    "Stewartville",
    "Harwich Port",
    "La Moille",
    "Gulf Shores",
    "Napavine",
    "Tariffville",
    "Murdock",
    "Dotyville",
    "Avinger",
    "Gem",
    "Livonia Center",
    "Garden Acres",
    "Womelsdorf",
    "Miami Shores",
    "Port William",
    "Loa",
    "Pike",
    "Ross",
    "Adeline",
    "Keene",
    "Tukwila",
    "Puhi",
    "Stanaford",
    "Harrington Park",
    "Hawaiian Acres",
    "Royston",
    "Myrtle Beach",
    "Middlesex",
    "Ladoga",
    "Alum Rock",
    "Shamokin",
    "Glen Flora",
    'South Portland',
    'Richville'
];

var maintenanceStatus = [
    "pending",
    "done",
    "overdue",
    "in progress"
];
    


// *** Code For Geocoding ***

// $http({
//   method: 'GET',
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+location
// }).then(function (data){

//     success(data)
// },function (err){
//     error(err)
// });
// 
// 
