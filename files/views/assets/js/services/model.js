Apperyio.Entity=new Apperyio.EntityFactory({Number:{type:"number"},Boolean:{type:"boolean"},String:{type:"string"}}),Apperyio.getModel=Apperyio.Entity.get.bind(Apperyio.Entity),Apperyio.storage={markerLat:new $a.LocalStorage("markerLat","String"),markerLng:new $a.LocalStorage("markerLng","String"),currentLng:new $a.LocalStorage("currentLng","String"),currentLat:new $a.LocalStorage("currentLat","String"),CurrentSelectedTrailerCarl:new $a.LocalStorage("CurrentSelectedTrailerCarl","String"),selectedGeoFence:new $a.LocalStorage("selectedGeoFence","String"),GFErrorText:new $a.LocalStorage("GFErrorText","String"),accessToken:new $a.LocalStorage("accessToken","String"),rememberMe:new $a.LocalStorage("rememberMe","String"),sessionToken:new $a.SessionStorage("sessionToken","String"),loginErrorText:new $a.LocalStorage("loginErrorText","String"),signupErrorText:new $a.LocalStorage("signupErrorText","String"),demo:new $a.LocalStorage("demo","String"),email:new $a.SessionStorage("email","String"),deviceCommand:new $a.LocalStorage("deviceCommand","String"),currentDeviceSn:new $a.LocalStorage("currentDeviceSn","String"),thisStartDateTime:new $a.LocalStorage("thisStartDateTime","String"),thisEndDateTime:new $a.LocalStorage("thisEndDateTime","String"),currentWhrztSn:new $a.LocalStorage("currentWhrztSn","String"),filterValue:new $a.WindowStorage("filterValue","String"),selectedTtrailerId:new $a.LocalStorage("selectedTtrailerId","String"),billingPackage:new $a.LocalStorage("billingPackage","String"),NumberOfDevices:new $a.LocalStorage("NumberOfDevices","String")};