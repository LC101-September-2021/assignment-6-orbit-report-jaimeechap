// import { listenerCount } from "stream";

// import { listenerCount } from "stream";

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }


isSpaceDebris() {
	if (this.type === "Space Debris"){  
		return true;
	} else {
		return false;
	};
	};

};
// (this.type.includes("Space Debris")) 
// isSpaceDebris(type: string): boolean {
// 	if (this.type.includes("Space Debris")) {
// 		this.type.push(satellites);
// 	} else {
// 		return false;
// 	};
// };




// TODO 3a: fix isSpaceDebris check
