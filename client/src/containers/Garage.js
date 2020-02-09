import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarageWelcome from '../components/GarageWelcome';
import Vehicles from '../components/Vehicles';

export class Garage extends Component {
	renderVehiclesOrMessage = () => {
		if (this.props.vehicles.length < 1) {
			return <h2>No vehicles in your garage.</h2>;
		} else {
			return <Vehicles vehicles={this.props.vehicles} />;
		}
	};

	render() {
		return (
			<div>
				<GarageWelcome userName={this.props.userName} />
				<button>Add Vehicle</button>
				{this.renderVehiclesOrMessage()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.userReducer.currentUser.name,
		vehicles: state.vehicleReducer.vehicles
	};
};

export default connect(mapStateToProps)(Garage);
