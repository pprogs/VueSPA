
export const nameRules = [
    (v) => !!v || 'Name is required',
    (v) => v.length <= 10 || 'Name must be less than 10 characters',
    (v) => v.length <= 50 || 'Name must be less than 50 characters',
];

export const emailRules = [
    (v) => !!v || 'E-mail is required',
    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
];

export const passwordRules = [
    (v) => !!v || 'Password is required',
    (v) => v.length >= 3 || 'Password must be 3 or more characters',
    (v) => v.length <= 50 || 'Password must be less than 50 characters'
];