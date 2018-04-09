

export function nameRules(loc) {
    return [
        (v) => !!v || loc('name_req'),
        (v) => v.length <= 10 || loc('name_small'),
        (v) => v.length <= 50 || loc('name_long'),
    ];
};

export function emailRules(loc) { 
    return [
        (v) => !!v || loc('email_req'),
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || loc('email_valid'),
    ];
};

export function passwordRules(loc) { 
    return [
        (v) => !!v || loc('pass_req'),
        (v) => v.length >= 3 || loc('pass_small'),
        (v) => v.length <= 50 || loc('pass_long'),
    ];
};