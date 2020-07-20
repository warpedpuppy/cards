
import Config from '../config';

export default {
    testBackend: async function() {
        let response = await fetch(`${Config.API_URL}`);
        console.log(response)
        let responseJSON = await response.json();
        console.log(responseJSON)

    }
}