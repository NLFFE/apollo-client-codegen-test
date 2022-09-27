import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddressKeySpecifier = ('address' | 'city' | 'state' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CapsuleKeySpecifier = ('dragon' | 'id' | 'landings' | 'missions' | 'original_launch' | 'reuse_count' | 'status' | 'type' | CapsuleKeySpecifier)[];
export type CapsuleFieldPolicy = {
	dragon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	landings?: FieldPolicy<any> | FieldReadFunction<any>,
	missions?: FieldPolicy<any> | FieldReadFunction<any>,
	original_launch?: FieldPolicy<any> | FieldReadFunction<any>,
	reuse_count?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CapsuleMissionKeySpecifier = ('flight' | 'name' | CapsuleMissionKeySpecifier)[];
export type CapsuleMissionFieldPolicy = {
	flight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoreKeySpecifier = ('asds_attempts' | 'asds_landings' | 'block' | 'id' | 'missions' | 'original_launch' | 'reuse_count' | 'rtls_attempts' | 'rtls_landings' | 'status' | 'water_landing' | CoreKeySpecifier)[];
export type CoreFieldPolicy = {
	asds_attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	asds_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	missions?: FieldPolicy<any> | FieldReadFunction<any>,
	original_launch?: FieldPolicy<any> | FieldReadFunction<any>,
	reuse_count?: FieldPolicy<any> | FieldReadFunction<any>,
	rtls_attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	rtls_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	water_landing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoreMissionKeySpecifier = ('flight' | 'name' | CoreMissionKeySpecifier)[];
export type CoreMissionFieldPolicy = {
	flight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistanceKeySpecifier = ('feet' | 'meters' | DistanceKeySpecifier)[];
export type DistanceFieldPolicy = {
	feet?: FieldPolicy<any> | FieldReadFunction<any>,
	meters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonKeySpecifier = ('active' | 'crew_capacity' | 'description' | 'diameter' | 'dry_mass_kg' | 'dry_mass_lb' | 'first_flight' | 'heat_shield' | 'height_w_trunk' | 'id' | 'launch_payload_mass' | 'launch_payload_vol' | 'name' | 'orbit_duration_yr' | 'pressurized_capsule' | 'return_payload_mass' | 'return_payload_vol' | 'sidewall_angle_deg' | 'thrusters' | 'trunk' | 'type' | 'wikipedia' | DragonKeySpecifier)[];
export type DragonFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	crew_capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diameter?: FieldPolicy<any> | FieldReadFunction<any>,
	dry_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>,
	dry_mass_lb?: FieldPolicy<any> | FieldReadFunction<any>,
	first_flight?: FieldPolicy<any> | FieldReadFunction<any>,
	heat_shield?: FieldPolicy<any> | FieldReadFunction<any>,
	height_w_trunk?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_payload_mass?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_payload_vol?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orbit_duration_yr?: FieldPolicy<any> | FieldReadFunction<any>,
	pressurized_capsule?: FieldPolicy<any> | FieldReadFunction<any>,
	return_payload_mass?: FieldPolicy<any> | FieldReadFunction<any>,
	return_payload_vol?: FieldPolicy<any> | FieldReadFunction<any>,
	sidewall_angle_deg?: FieldPolicy<any> | FieldReadFunction<any>,
	thrusters?: FieldPolicy<any> | FieldReadFunction<any>,
	trunk?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonHeatShieldKeySpecifier = ('dev_partner' | 'material' | 'size_meters' | 'temp_degrees' | DragonHeatShieldKeySpecifier)[];
export type DragonHeatShieldFieldPolicy = {
	dev_partner?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	size_meters?: FieldPolicy<any> | FieldReadFunction<any>,
	temp_degrees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonPressurizedCapsuleKeySpecifier = ('payload_volume' | DragonPressurizedCapsuleKeySpecifier)[];
export type DragonPressurizedCapsuleFieldPolicy = {
	payload_volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonThrustKeySpecifier = ('amount' | 'fuel_1' | 'fuel_2' | 'pods' | 'thrust' | 'type' | DragonThrustKeySpecifier)[];
export type DragonThrustFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	fuel_1?: FieldPolicy<any> | FieldReadFunction<any>,
	fuel_2?: FieldPolicy<any> | FieldReadFunction<any>,
	pods?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonTrunkKeySpecifier = ('cargo' | 'trunk_volume' | DragonTrunkKeySpecifier)[];
export type DragonTrunkFieldPolicy = {
	cargo?: FieldPolicy<any> | FieldReadFunction<any>,
	trunk_volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DragonTrunkCargoKeySpecifier = ('solar_array' | 'unpressurized_cargo' | DragonTrunkCargoKeySpecifier)[];
export type DragonTrunkCargoFieldPolicy = {
	solar_array?: FieldPolicy<any> | FieldReadFunction<any>,
	unpressurized_cargo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForceKeySpecifier = ('kN' | 'lbf' | ForceKeySpecifier)[];
export type ForceFieldPolicy = {
	kN?: FieldPolicy<any> | FieldReadFunction<any>,
	lbf?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HistoriesResultKeySpecifier = ('data' | 'result' | HistoriesResultKeySpecifier)[];
export type HistoriesResultFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HistoryKeySpecifier = ('details' | 'event_date_unix' | 'event_date_utc' | 'flight' | 'id' | 'links' | 'title' | HistoryKeySpecifier)[];
export type HistoryFieldPolicy = {
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	event_date_unix?: FieldPolicy<any> | FieldReadFunction<any>,
	event_date_utc?: FieldPolicy<any> | FieldReadFunction<any>,
	flight?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfoKeySpecifier = ('ceo' | 'coo' | 'cto' | 'cto_propulsion' | 'employees' | 'founded' | 'founder' | 'headquarters' | 'launch_sites' | 'links' | 'name' | 'summary' | 'test_sites' | 'valuation' | 'vehicles' | InfoKeySpecifier)[];
export type InfoFieldPolicy = {
	ceo?: FieldPolicy<any> | FieldReadFunction<any>,
	coo?: FieldPolicy<any> | FieldReadFunction<any>,
	cto?: FieldPolicy<any> | FieldReadFunction<any>,
	cto_propulsion?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	founded?: FieldPolicy<any> | FieldReadFunction<any>,
	founder?: FieldPolicy<any> | FieldReadFunction<any>,
	headquarters?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_sites?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	test_sites?: FieldPolicy<any> | FieldReadFunction<any>,
	valuation?: FieldPolicy<any> | FieldReadFunction<any>,
	vehicles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfoLinksKeySpecifier = ('elon_twitter' | 'flickr' | 'twitter' | 'website' | InfoLinksKeySpecifier)[];
export type InfoLinksFieldPolicy = {
	elon_twitter?: FieldPolicy<any> | FieldReadFunction<any>,
	flickr?: FieldPolicy<any> | FieldReadFunction<any>,
	twitter?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandpadKeySpecifier = ('attempted_landings' | 'details' | 'full_name' | 'id' | 'landing_type' | 'location' | 'status' | 'successful_landings' | 'wikipedia' | LandpadKeySpecifier)[];
export type LandpadFieldPolicy = {
	attempted_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	successful_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchKeySpecifier = ('details' | 'id' | 'is_tentative' | 'launch_date_local' | 'launch_date_unix' | 'launch_date_utc' | 'launch_site' | 'launch_success' | 'launch_year' | 'links' | 'mission_id' | 'mission_name' | 'rocket' | 'ships' | 'static_fire_date_unix' | 'static_fire_date_utc' | 'telemetry' | 'tentative_max_precision' | 'upcoming' | LaunchKeySpecifier)[];
export type LaunchFieldPolicy = {
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_tentative?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_date_local?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_date_unix?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_date_utc?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_site?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_success?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_year?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	mission_id?: FieldPolicy<any> | FieldReadFunction<any>,
	mission_name?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket?: FieldPolicy<any> | FieldReadFunction<any>,
	ships?: FieldPolicy<any> | FieldReadFunction<any>,
	static_fire_date_unix?: FieldPolicy<any> | FieldReadFunction<any>,
	static_fire_date_utc?: FieldPolicy<any> | FieldReadFunction<any>,
	telemetry?: FieldPolicy<any> | FieldReadFunction<any>,
	tentative_max_precision?: FieldPolicy<any> | FieldReadFunction<any>,
	upcoming?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchLinksKeySpecifier = ('article_link' | 'flickr_images' | 'mission_patch' | 'mission_patch_small' | 'presskit' | 'reddit_campaign' | 'reddit_launch' | 'reddit_media' | 'reddit_recovery' | 'video_link' | 'wikipedia' | LaunchLinksKeySpecifier)[];
export type LaunchLinksFieldPolicy = {
	article_link?: FieldPolicy<any> | FieldReadFunction<any>,
	flickr_images?: FieldPolicy<any> | FieldReadFunction<any>,
	mission_patch?: FieldPolicy<any> | FieldReadFunction<any>,
	mission_patch_small?: FieldPolicy<any> | FieldReadFunction<any>,
	presskit?: FieldPolicy<any> | FieldReadFunction<any>,
	reddit_campaign?: FieldPolicy<any> | FieldReadFunction<any>,
	reddit_launch?: FieldPolicy<any> | FieldReadFunction<any>,
	reddit_media?: FieldPolicy<any> | FieldReadFunction<any>,
	reddit_recovery?: FieldPolicy<any> | FieldReadFunction<any>,
	video_link?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchRocketKeySpecifier = ('fairings' | 'first_stage' | 'rocket' | 'rocket_name' | 'rocket_type' | 'second_stage' | LaunchRocketKeySpecifier)[];
export type LaunchRocketFieldPolicy = {
	fairings?: FieldPolicy<any> | FieldReadFunction<any>,
	first_stage?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket_name?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket_type?: FieldPolicy<any> | FieldReadFunction<any>,
	second_stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchRocketFairingsKeySpecifier = ('recovered' | 'recovery_attempt' | 'reused' | 'ship' | LaunchRocketFairingsKeySpecifier)[];
export type LaunchRocketFairingsFieldPolicy = {
	recovered?: FieldPolicy<any> | FieldReadFunction<any>,
	recovery_attempt?: FieldPolicy<any> | FieldReadFunction<any>,
	reused?: FieldPolicy<any> | FieldReadFunction<any>,
	ship?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchRocketFirstStageKeySpecifier = ('cores' | LaunchRocketFirstStageKeySpecifier)[];
export type LaunchRocketFirstStageFieldPolicy = {
	cores?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchRocketFirstStageCoreKeySpecifier = ('block' | 'core' | 'flight' | 'gridfins' | 'land_success' | 'landing_intent' | 'landing_type' | 'landing_vehicle' | 'legs' | 'reused' | LaunchRocketFirstStageCoreKeySpecifier)[];
export type LaunchRocketFirstStageCoreFieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	core?: FieldPolicy<any> | FieldReadFunction<any>,
	flight?: FieldPolicy<any> | FieldReadFunction<any>,
	gridfins?: FieldPolicy<any> | FieldReadFunction<any>,
	land_success?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_vehicle?: FieldPolicy<any> | FieldReadFunction<any>,
	legs?: FieldPolicy<any> | FieldReadFunction<any>,
	reused?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchRocketSecondStageKeySpecifier = ('block' | 'payloads' | LaunchRocketSecondStageKeySpecifier)[];
export type LaunchRocketSecondStageFieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	payloads?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchSiteKeySpecifier = ('site_id' | 'site_name' | 'site_name_long' | LaunchSiteKeySpecifier)[];
export type LaunchSiteFieldPolicy = {
	site_id?: FieldPolicy<any> | FieldReadFunction<any>,
	site_name?: FieldPolicy<any> | FieldReadFunction<any>,
	site_name_long?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchTelemetryKeySpecifier = ('flight_club' | LaunchTelemetryKeySpecifier)[];
export type LaunchTelemetryFieldPolicy = {
	flight_club?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchesPastResultKeySpecifier = ('data' | 'result' | LaunchesPastResultKeySpecifier)[];
export type LaunchesPastResultFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchpadKeySpecifier = ('attempted_launches' | 'details' | 'id' | 'location' | 'name' | 'status' | 'successful_launches' | 'vehicles_launched' | 'wikipedia' | LaunchpadKeySpecifier)[];
export type LaunchpadFieldPolicy = {
	attempted_launches?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	successful_launches?: FieldPolicy<any> | FieldReadFunction<any>,
	vehicles_launched?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkKeySpecifier = ('article' | 'reddit' | 'wikipedia' | LinkKeySpecifier)[];
export type LinkFieldPolicy = {
	article?: FieldPolicy<any> | FieldReadFunction<any>,
	reddit?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('latitude' | 'longitude' | 'name' | 'region' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MassKeySpecifier = ('kg' | 'lb' | MassKeySpecifier)[];
export type MassFieldPolicy = {
	kg?: FieldPolicy<any> | FieldReadFunction<any>,
	lb?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MissionKeySpecifier = ('description' | 'id' | 'manufacturers' | 'name' | 'payloads' | 'twitter' | 'website' | 'wikipedia' | MissionKeySpecifier)[];
export type MissionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payloads?: FieldPolicy<any> | FieldReadFunction<any>,
	twitter?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MissionResultKeySpecifier = ('data' | 'result' | MissionResultKeySpecifier)[];
export type MissionResultFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayloadKeySpecifier = ('customers' | 'id' | 'manufacturer' | 'nationality' | 'norad_id' | 'orbit' | 'orbit_params' | 'payload_mass_kg' | 'payload_mass_lbs' | 'payload_type' | 'reused' | PayloadKeySpecifier)[];
export type PayloadFieldPolicy = {
	customers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	nationality?: FieldPolicy<any> | FieldReadFunction<any>,
	norad_id?: FieldPolicy<any> | FieldReadFunction<any>,
	orbit?: FieldPolicy<any> | FieldReadFunction<any>,
	orbit_params?: FieldPolicy<any> | FieldReadFunction<any>,
	payload_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>,
	payload_mass_lbs?: FieldPolicy<any> | FieldReadFunction<any>,
	payload_type?: FieldPolicy<any> | FieldReadFunction<any>,
	reused?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayloadOrbitParamsKeySpecifier = ('apoapsis_km' | 'arg_of_pericenter' | 'eccentricity' | 'epoch' | 'inclination_deg' | 'lifespan_years' | 'longitude' | 'mean_anomaly' | 'mean_motion' | 'periapsis_km' | 'period_min' | 'raan' | 'reference_system' | 'regime' | 'semi_major_axis_km' | PayloadOrbitParamsKeySpecifier)[];
export type PayloadOrbitParamsFieldPolicy = {
	apoapsis_km?: FieldPolicy<any> | FieldReadFunction<any>,
	arg_of_pericenter?: FieldPolicy<any> | FieldReadFunction<any>,
	eccentricity?: FieldPolicy<any> | FieldReadFunction<any>,
	epoch?: FieldPolicy<any> | FieldReadFunction<any>,
	inclination_deg?: FieldPolicy<any> | FieldReadFunction<any>,
	lifespan_years?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	mean_anomaly?: FieldPolicy<any> | FieldReadFunction<any>,
	mean_motion?: FieldPolicy<any> | FieldReadFunction<any>,
	periapsis_km?: FieldPolicy<any> | FieldReadFunction<any>,
	period_min?: FieldPolicy<any> | FieldReadFunction<any>,
	raan?: FieldPolicy<any> | FieldReadFunction<any>,
	reference_system?: FieldPolicy<any> | FieldReadFunction<any>,
	regime?: FieldPolicy<any> | FieldReadFunction<any>,
	semi_major_axis_km?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('capsule' | 'capsules' | 'capsulesPast' | 'capsulesUpcoming' | 'company' | 'core' | 'cores' | 'coresPast' | 'coresUpcoming' | 'dragon' | 'dragons' | 'histories' | 'historiesResult' | 'history' | 'landpad' | 'landpads' | 'launch' | 'launchLatest' | 'launchNext' | 'launches' | 'launchesPast' | 'launchesPastResult' | 'launchesUpcoming' | 'launchpad' | 'launchpads' | 'mission' | 'missions' | 'missionsResult' | 'payload' | 'payloads' | 'roadster' | 'rocket' | 'rockets' | 'rocketsResult' | 'ship' | 'ships' | 'shipsResult' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	capsule?: FieldPolicy<any> | FieldReadFunction<any>,
	capsules?: FieldPolicy<any> | FieldReadFunction<any>,
	capsulesPast?: FieldPolicy<any> | FieldReadFunction<any>,
	capsulesUpcoming?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	core?: FieldPolicy<any> | FieldReadFunction<any>,
	cores?: FieldPolicy<any> | FieldReadFunction<any>,
	coresPast?: FieldPolicy<any> | FieldReadFunction<any>,
	coresUpcoming?: FieldPolicy<any> | FieldReadFunction<any>,
	dragon?: FieldPolicy<any> | FieldReadFunction<any>,
	dragons?: FieldPolicy<any> | FieldReadFunction<any>,
	histories?: FieldPolicy<any> | FieldReadFunction<any>,
	historiesResult?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	landpad?: FieldPolicy<any> | FieldReadFunction<any>,
	landpads?: FieldPolicy<any> | FieldReadFunction<any>,
	launch?: FieldPolicy<any> | FieldReadFunction<any>,
	launchLatest?: FieldPolicy<any> | FieldReadFunction<any>,
	launchNext?: FieldPolicy<any> | FieldReadFunction<any>,
	launches?: FieldPolicy<any> | FieldReadFunction<any>,
	launchesPast?: FieldPolicy<any> | FieldReadFunction<any>,
	launchesPastResult?: FieldPolicy<any> | FieldReadFunction<any>,
	launchesUpcoming?: FieldPolicy<any> | FieldReadFunction<any>,
	launchpad?: FieldPolicy<any> | FieldReadFunction<any>,
	launchpads?: FieldPolicy<any> | FieldReadFunction<any>,
	mission?: FieldPolicy<any> | FieldReadFunction<any>,
	missions?: FieldPolicy<any> | FieldReadFunction<any>,
	missionsResult?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	payloads?: FieldPolicy<any> | FieldReadFunction<any>,
	roadster?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket?: FieldPolicy<any> | FieldReadFunction<any>,
	rockets?: FieldPolicy<any> | FieldReadFunction<any>,
	rocketsResult?: FieldPolicy<any> | FieldReadFunction<any>,
	ship?: FieldPolicy<any> | FieldReadFunction<any>,
	ships?: FieldPolicy<any> | FieldReadFunction<any>,
	shipsResult?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResultKeySpecifier = ('totalCount' | ResultKeySpecifier)[];
export type ResultFieldPolicy = {
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoadsterKeySpecifier = ('apoapsis_au' | 'details' | 'earth_distance_km' | 'earth_distance_mi' | 'eccentricity' | 'epoch_jd' | 'inclination' | 'launch_date_unix' | 'launch_date_utc' | 'launch_mass_kg' | 'launch_mass_lbs' | 'longitude' | 'mars_distance_km' | 'mars_distance_mi' | 'name' | 'norad_id' | 'orbit_type' | 'periapsis_arg' | 'periapsis_au' | 'period_days' | 'semi_major_axis_au' | 'speed_kph' | 'speed_mph' | 'wikipedia' | RoadsterKeySpecifier)[];
export type RoadsterFieldPolicy = {
	apoapsis_au?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	earth_distance_km?: FieldPolicy<any> | FieldReadFunction<any>,
	earth_distance_mi?: FieldPolicy<any> | FieldReadFunction<any>,
	eccentricity?: FieldPolicy<any> | FieldReadFunction<any>,
	epoch_jd?: FieldPolicy<any> | FieldReadFunction<any>,
	inclination?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_date_unix?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_date_utc?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>,
	launch_mass_lbs?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	mars_distance_km?: FieldPolicy<any> | FieldReadFunction<any>,
	mars_distance_mi?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	norad_id?: FieldPolicy<any> | FieldReadFunction<any>,
	orbit_type?: FieldPolicy<any> | FieldReadFunction<any>,
	periapsis_arg?: FieldPolicy<any> | FieldReadFunction<any>,
	periapsis_au?: FieldPolicy<any> | FieldReadFunction<any>,
	period_days?: FieldPolicy<any> | FieldReadFunction<any>,
	semi_major_axis_au?: FieldPolicy<any> | FieldReadFunction<any>,
	speed_kph?: FieldPolicy<any> | FieldReadFunction<any>,
	speed_mph?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketKeySpecifier = ('active' | 'boosters' | 'company' | 'cost_per_launch' | 'country' | 'description' | 'diameter' | 'engines' | 'first_flight' | 'first_stage' | 'height' | 'id' | 'landing_legs' | 'mass' | 'name' | 'payload_weights' | 'second_stage' | 'stages' | 'success_rate_pct' | 'type' | 'wikipedia' | RocketKeySpecifier)[];
export type RocketFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	boosters?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	cost_per_launch?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diameter?: FieldPolicy<any> | FieldReadFunction<any>,
	engines?: FieldPolicy<any> | FieldReadFunction<any>,
	first_flight?: FieldPolicy<any> | FieldReadFunction<any>,
	first_stage?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_legs?: FieldPolicy<any> | FieldReadFunction<any>,
	mass?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payload_weights?: FieldPolicy<any> | FieldReadFunction<any>,
	second_stage?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	success_rate_pct?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketEnginesKeySpecifier = ('engine_loss_max' | 'layout' | 'number' | 'propellant_1' | 'propellant_2' | 'thrust_sea_level' | 'thrust_to_weight' | 'thrust_vacuum' | 'type' | 'version' | RocketEnginesKeySpecifier)[];
export type RocketEnginesFieldPolicy = {
	engine_loss_max?: FieldPolicy<any> | FieldReadFunction<any>,
	layout?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	propellant_1?: FieldPolicy<any> | FieldReadFunction<any>,
	propellant_2?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust_sea_level?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust_to_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust_vacuum?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketFirstStageKeySpecifier = ('burn_time_sec' | 'engines' | 'fuel_amount_tons' | 'reusable' | 'thrust_sea_level' | 'thrust_vacuum' | RocketFirstStageKeySpecifier)[];
export type RocketFirstStageFieldPolicy = {
	burn_time_sec?: FieldPolicy<any> | FieldReadFunction<any>,
	engines?: FieldPolicy<any> | FieldReadFunction<any>,
	fuel_amount_tons?: FieldPolicy<any> | FieldReadFunction<any>,
	reusable?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust_sea_level?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust_vacuum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketLandingLegsKeySpecifier = ('material' | 'number' | RocketLandingLegsKeySpecifier)[];
export type RocketLandingLegsFieldPolicy = {
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketPayloadWeightKeySpecifier = ('id' | 'kg' | 'lb' | 'name' | RocketPayloadWeightKeySpecifier)[];
export type RocketPayloadWeightFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kg?: FieldPolicy<any> | FieldReadFunction<any>,
	lb?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketSecondStageKeySpecifier = ('burn_time_sec' | 'engines' | 'fuel_amount_tons' | 'payloads' | 'thrust' | RocketSecondStageKeySpecifier)[];
export type RocketSecondStageFieldPolicy = {
	burn_time_sec?: FieldPolicy<any> | FieldReadFunction<any>,
	engines?: FieldPolicy<any> | FieldReadFunction<any>,
	fuel_amount_tons?: FieldPolicy<any> | FieldReadFunction<any>,
	payloads?: FieldPolicy<any> | FieldReadFunction<any>,
	thrust?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketSecondStagePayloadCompositeFairingKeySpecifier = ('diameter' | 'height' | RocketSecondStagePayloadCompositeFairingKeySpecifier)[];
export type RocketSecondStagePayloadCompositeFairingFieldPolicy = {
	diameter?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketSecondStagePayloadsKeySpecifier = ('composite_fairing' | 'option_1' | RocketSecondStagePayloadsKeySpecifier)[];
export type RocketSecondStagePayloadsFieldPolicy = {
	composite_fairing?: FieldPolicy<any> | FieldReadFunction<any>,
	option_1?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketsResultKeySpecifier = ('data' | 'result' | RocketsResultKeySpecifier)[];
export type RocketsResultFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipKeySpecifier = ('abs' | 'active' | 'attempted_landings' | 'class' | 'course_deg' | 'home_port' | 'id' | 'image' | 'imo' | 'missions' | 'mmsi' | 'model' | 'name' | 'position' | 'roles' | 'speed_kn' | 'status' | 'successful_landings' | 'type' | 'url' | 'weight_kg' | 'weight_lbs' | 'year_built' | ShipKeySpecifier)[];
export type ShipFieldPolicy = {
	abs?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	attempted_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	class?: FieldPolicy<any> | FieldReadFunction<any>,
	course_deg?: FieldPolicy<any> | FieldReadFunction<any>,
	home_port?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imo?: FieldPolicy<any> | FieldReadFunction<any>,
	missions?: FieldPolicy<any> | FieldReadFunction<any>,
	mmsi?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	speed_kn?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	successful_landings?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	weight_kg?: FieldPolicy<any> | FieldReadFunction<any>,
	weight_lbs?: FieldPolicy<any> | FieldReadFunction<any>,
	year_built?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipLocationKeySpecifier = ('latitude' | 'longitude' | ShipLocationKeySpecifier)[];
export type ShipLocationFieldPolicy = {
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipMissionKeySpecifier = ('flight' | 'name' | ShipMissionKeySpecifier)[];
export type ShipMissionFieldPolicy = {
	flight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipsResultKeySpecifier = ('data' | 'result' | ShipsResultKeySpecifier)[];
export type ShipsResultFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VolumeKeySpecifier = ('cubic_feet' | 'cubic_meters' | VolumeKeySpecifier)[];
export type VolumeFieldPolicy = {
	cubic_feet?: FieldPolicy<any> | FieldReadFunction<any>,
	cubic_meters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	Capsule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CapsuleKeySpecifier | (() => undefined | CapsuleKeySpecifier),
		fields?: CapsuleFieldPolicy,
	},
	CapsuleMission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CapsuleMissionKeySpecifier | (() => undefined | CapsuleMissionKeySpecifier),
		fields?: CapsuleMissionFieldPolicy,
	},
	Core?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoreKeySpecifier | (() => undefined | CoreKeySpecifier),
		fields?: CoreFieldPolicy,
	},
	CoreMission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoreMissionKeySpecifier | (() => undefined | CoreMissionKeySpecifier),
		fields?: CoreMissionFieldPolicy,
	},
	Distance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DistanceKeySpecifier | (() => undefined | DistanceKeySpecifier),
		fields?: DistanceFieldPolicy,
	},
	Dragon?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonKeySpecifier | (() => undefined | DragonKeySpecifier),
		fields?: DragonFieldPolicy,
	},
	DragonHeatShield?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonHeatShieldKeySpecifier | (() => undefined | DragonHeatShieldKeySpecifier),
		fields?: DragonHeatShieldFieldPolicy,
	},
	DragonPressurizedCapsule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonPressurizedCapsuleKeySpecifier | (() => undefined | DragonPressurizedCapsuleKeySpecifier),
		fields?: DragonPressurizedCapsuleFieldPolicy,
	},
	DragonThrust?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonThrustKeySpecifier | (() => undefined | DragonThrustKeySpecifier),
		fields?: DragonThrustFieldPolicy,
	},
	DragonTrunk?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonTrunkKeySpecifier | (() => undefined | DragonTrunkKeySpecifier),
		fields?: DragonTrunkFieldPolicy,
	},
	DragonTrunkCargo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DragonTrunkCargoKeySpecifier | (() => undefined | DragonTrunkCargoKeySpecifier),
		fields?: DragonTrunkCargoFieldPolicy,
	},
	Force?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForceKeySpecifier | (() => undefined | ForceKeySpecifier),
		fields?: ForceFieldPolicy,
	},
	HistoriesResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HistoriesResultKeySpecifier | (() => undefined | HistoriesResultKeySpecifier),
		fields?: HistoriesResultFieldPolicy,
	},
	History?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HistoryKeySpecifier | (() => undefined | HistoryKeySpecifier),
		fields?: HistoryFieldPolicy,
	},
	Info?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier),
		fields?: InfoFieldPolicy,
	},
	InfoLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfoLinksKeySpecifier | (() => undefined | InfoLinksKeySpecifier),
		fields?: InfoLinksFieldPolicy,
	},
	Landpad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandpadKeySpecifier | (() => undefined | LandpadKeySpecifier),
		fields?: LandpadFieldPolicy,
	},
	Launch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchKeySpecifier | (() => undefined | LaunchKeySpecifier),
		fields?: LaunchFieldPolicy,
	},
	LaunchLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchLinksKeySpecifier | (() => undefined | LaunchLinksKeySpecifier),
		fields?: LaunchLinksFieldPolicy,
	},
	LaunchRocket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchRocketKeySpecifier | (() => undefined | LaunchRocketKeySpecifier),
		fields?: LaunchRocketFieldPolicy,
	},
	LaunchRocketFairings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchRocketFairingsKeySpecifier | (() => undefined | LaunchRocketFairingsKeySpecifier),
		fields?: LaunchRocketFairingsFieldPolicy,
	},
	LaunchRocketFirstStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchRocketFirstStageKeySpecifier | (() => undefined | LaunchRocketFirstStageKeySpecifier),
		fields?: LaunchRocketFirstStageFieldPolicy,
	},
	LaunchRocketFirstStageCore?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchRocketFirstStageCoreKeySpecifier | (() => undefined | LaunchRocketFirstStageCoreKeySpecifier),
		fields?: LaunchRocketFirstStageCoreFieldPolicy,
	},
	LaunchRocketSecondStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchRocketSecondStageKeySpecifier | (() => undefined | LaunchRocketSecondStageKeySpecifier),
		fields?: LaunchRocketSecondStageFieldPolicy,
	},
	LaunchSite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchSiteKeySpecifier | (() => undefined | LaunchSiteKeySpecifier),
		fields?: LaunchSiteFieldPolicy,
	},
	LaunchTelemetry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchTelemetryKeySpecifier | (() => undefined | LaunchTelemetryKeySpecifier),
		fields?: LaunchTelemetryFieldPolicy,
	},
	LaunchesPastResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchesPastResultKeySpecifier | (() => undefined | LaunchesPastResultKeySpecifier),
		fields?: LaunchesPastResultFieldPolicy,
	},
	Launchpad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchpadKeySpecifier | (() => undefined | LaunchpadKeySpecifier),
		fields?: LaunchpadFieldPolicy,
	},
	Link?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkKeySpecifier | (() => undefined | LinkKeySpecifier),
		fields?: LinkFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	Mass?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MassKeySpecifier | (() => undefined | MassKeySpecifier),
		fields?: MassFieldPolicy,
	},
	Mission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MissionKeySpecifier | (() => undefined | MissionKeySpecifier),
		fields?: MissionFieldPolicy,
	},
	MissionResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MissionResultKeySpecifier | (() => undefined | MissionResultKeySpecifier),
		fields?: MissionResultFieldPolicy,
	},
	Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayloadKeySpecifier | (() => undefined | PayloadKeySpecifier),
		fields?: PayloadFieldPolicy,
	},
	PayloadOrbitParams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayloadOrbitParamsKeySpecifier | (() => undefined | PayloadOrbitParamsKeySpecifier),
		fields?: PayloadOrbitParamsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Result?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResultKeySpecifier | (() => undefined | ResultKeySpecifier),
		fields?: ResultFieldPolicy,
	},
	Roadster?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoadsterKeySpecifier | (() => undefined | RoadsterKeySpecifier),
		fields?: RoadsterFieldPolicy,
	},
	Rocket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketKeySpecifier | (() => undefined | RocketKeySpecifier),
		fields?: RocketFieldPolicy,
	},
	RocketEngines?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketEnginesKeySpecifier | (() => undefined | RocketEnginesKeySpecifier),
		fields?: RocketEnginesFieldPolicy,
	},
	RocketFirstStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketFirstStageKeySpecifier | (() => undefined | RocketFirstStageKeySpecifier),
		fields?: RocketFirstStageFieldPolicy,
	},
	RocketLandingLegs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketLandingLegsKeySpecifier | (() => undefined | RocketLandingLegsKeySpecifier),
		fields?: RocketLandingLegsFieldPolicy,
	},
	RocketPayloadWeight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketPayloadWeightKeySpecifier | (() => undefined | RocketPayloadWeightKeySpecifier),
		fields?: RocketPayloadWeightFieldPolicy,
	},
	RocketSecondStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketSecondStageKeySpecifier | (() => undefined | RocketSecondStageKeySpecifier),
		fields?: RocketSecondStageFieldPolicy,
	},
	RocketSecondStagePayloadCompositeFairing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketSecondStagePayloadCompositeFairingKeySpecifier | (() => undefined | RocketSecondStagePayloadCompositeFairingKeySpecifier),
		fields?: RocketSecondStagePayloadCompositeFairingFieldPolicy,
	},
	RocketSecondStagePayloads?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketSecondStagePayloadsKeySpecifier | (() => undefined | RocketSecondStagePayloadsKeySpecifier),
		fields?: RocketSecondStagePayloadsFieldPolicy,
	},
	RocketsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketsResultKeySpecifier | (() => undefined | RocketsResultKeySpecifier),
		fields?: RocketsResultFieldPolicy,
	},
	Ship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipKeySpecifier | (() => undefined | ShipKeySpecifier),
		fields?: ShipFieldPolicy,
	},
	ShipLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipLocationKeySpecifier | (() => undefined | ShipLocationKeySpecifier),
		fields?: ShipLocationFieldPolicy,
	},
	ShipMission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipMissionKeySpecifier | (() => undefined | ShipMissionKeySpecifier),
		fields?: ShipMissionFieldPolicy,
	},
	ShipsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipsResultKeySpecifier | (() => undefined | ShipsResultKeySpecifier),
		fields?: ShipsResultFieldPolicy,
	},
	Volume?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VolumeKeySpecifier | (() => undefined | VolumeKeySpecifier),
		fields?: VolumeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;