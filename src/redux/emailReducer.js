// État initial du reducer
// emails : un tableau destiné à stocker les adresses e-mail
const initialState = {
    emails: [], 
};

/**
 * Reducer pour gérer l'état des e-mails
 * 
 * Ce reducer écoute les actions envoyées au store Redux et met à jour l'état en conséquence
 * Il gère spécifiquement les actions relatives aux adresses e-mail
 * 
 * @param {Object} state L'état actuel du reducer. S'il n'est pas défini, l'état initial est utilisé
 * @param {Object} action L'action envoyée au reducer. Contient un type et un payload
 * @returns {Object} Le nouvel état après l'application de l'action
 */
function emailReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EMAIL':
            return {
                ...state, 
                emails: [...state.emails, action.payload], 
            };
        default:
            return state;
    }
}

export default emailReducer;