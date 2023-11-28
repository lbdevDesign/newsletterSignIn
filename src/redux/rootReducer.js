import { combineReducers } from 'redux';
import emailReducer from './emailReducer';

/**
 * Root Reducer pour l'application
 *
 * Ce reducer combine différents reducers de l'application en un seul reducer global
 * Il utilise la fonction combineReducers de Redux pour réaliser cette opération
 * Chaque reducer gère une partie distincte de l'état global de l'application
 * 
 * Dans cet exemple, le rootReducer combine le reducer suivant :
 * - emailReducer : gère l'état associé aux adresses e-mail
 * 
 * @returns {Function} Le reducer combiné qui gère l'état global de l'application
 */
const rootReducer = combineReducers({
    emails: emailReducer,
});

export default rootReducer;