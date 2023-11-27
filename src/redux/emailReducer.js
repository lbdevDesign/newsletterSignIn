// Définit l'état initial pour le reducer des emails.
const initialState = {
    emails: [], // Initialisation du tableau des emails.
};

function emailReducer(state = initialState, action) {
    // Gère les actions en fonction de leur type.
    switch (action.type) {
        case 'ADD_EMAIL':
            // Ajoute un nouvel email à la liste des emails.
            return {
                ...state, // Copie l'état actuel.
                emails: [...state.emails, action.payload], // Ajoute le nouvel email à la liste.
            };
        default:
            // Retourne l'état actuel si aucune action correspondante n'est trouvée.
            return state;
    }
}

export default emailReducer;