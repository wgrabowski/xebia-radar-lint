const PGS_RADAR_API_URL = "https://radar.pgs-soft.com/api/";
// const PGS_RADAR_API_URL = "http://localhost:8085/api";
export const API_ENDPOINTS = {
	RADARS: () => `${PGS_RADAR_API_URL}/radars`,
	FEATURES: () => `${PGS_RADAR_API_URL}/radars/features`,
	RADAR: {
		PACKAGES: (radarId: string) => `${PGS_RADAR_API_URL}/radars/${radarId}/packages`
	}
};