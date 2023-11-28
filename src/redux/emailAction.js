
/**
 * Action Creator pour ajouter un email
 * 
 * Cette fonction retourne une action Redux pour ajouter un email à l'état global
 * Elle est utilisée dans les composants React pour envoyer une action au store Redux
 * 
 * @param {string} email L'adresse email à ajouter
 * @returns {Object} Un objet action Redux avec un type et un payload
 */
export const addEmail = (email) => {
    return {
        type: 'ADD_EMAIL',
        payload: email,
    };
};