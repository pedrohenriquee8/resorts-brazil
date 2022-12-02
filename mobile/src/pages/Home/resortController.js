import ResortService from "../../services/resortService";

export default class ResortController {
    getResort = async () => {
        const resortService = new ResortService();
        const response = await resortService.getResorts();
        if (!!response) {
            return { resort: response.resorts };
        }
    }
}