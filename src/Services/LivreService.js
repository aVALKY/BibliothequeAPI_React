import axios from "axios";

class LivreService{

    static getAllLivres () {
        return axios.get("http://127.0.0.1:3000/livres")
    }

    static getLivreById (id) {
        return axios.get("http://127.0.0.1:3000/livres/"+id);
    }
}



export default LivreService;