//Inheritance Assignment for 3 classes
class Vehicle
{
	
	constructor(vehiclename,vehicletype)
	{
		this.vehiclename=vehiclename;
		this.vehicletype=vehicletype;
	}
	 getVehicleName()
	{
		console.log("Vehicle name: "+this.vehiclename);
	}
	 getVehicleType()
	{
	 	console.log("Vehicle Type: "+this.vehicletype);
	}
}

class Car extends Vehicle
{
	constructor()
	{
		super('Car','Fourwheel');
	}

}
class Bike extends Vehicle
{
	constructor()
	{
		super('Bike','Twowheel');
	}
}
class Scooter extends Vehicle
{
	constructor()
	{
		super('Scooter','Twowheel');
	}
}
let c = new Car();
let b = new Bike();
let s = new Scooter();
c.getVehicleName();
c.getVehicleType();
b.getVehicleName();
b.getVehicleType();
s.getVehicleName();
s.getVehicleType();