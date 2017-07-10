const { stationByEvaId } = require("./Station/StationService.js")

class RoutePart {
	
	constructor(routePartPayload) {
		this.routePartPayload = routePartPayload
	}
	
	get from() {
		return stationByEvaId(this.routePartPayload.from.id)
	}
	
	get to() {
		return stationByEvaId(this.routePartPayload.to.id)
	}
	
	get delay() {
		return this.routePartPayload.delay
	}
	
	get direction() {
		return this.routePartPayload.direction
	}
	
	get start() {
		return this.routePartPayload.start
	}
	
	get end() {
		return this.routePartPayload.end
	}
	
    get product() {
      return new Product(this.routePartPayload.product);
    }

}

module.exports = RoutePart;
