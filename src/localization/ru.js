
import { phrases } from './phrases'

const ru = {}

ru[phrases.L_NAME] = 'Имя',
ru[phrases.L_PASSWORD] = 'Пароль',    
ru[phrases.L_EMAIL] = 'E-Mail',

ru[phrases.NAME_REQ] = 'Имя обязательно';
ru[phrases.NAME_SMALL] = 'Имя должно быть больше 10 символов';
ru[phrases.NAME_LONG] = 'Имя должно быть меньше 50 символов';
ru[phrases.EMAIL_REQ] = 'E-mail обязателен';
ru[phrases.EMAIL_VALID] = 'Формат E-mail не верный';
ru[phrases.PASS_REQ] = 'Пароль обязателен';
ru[phrases.PASS_SMALL] = 'Password must be 3 or more characters';
ru[phrases.PASS_LONG] = 'Password must be less than 50 characters';
ru[phrases.PASS_VALID] = 'Password must be valid';

ru[phrases.USR_LOGIN] = "Вход";
ru[phrases.USR_REG] = "Регистрация";
ru[phrases.USR_REC] = "Восстановление пароля";
ru[phrases.USR_BTN_LOGIN] = "ВХОД";
ru[phrases.USR_BTN_REC] = "НАПОМНИТЬ ПАРОЛЬ";
ru[phrases.USR_BTN_REG] = "РЕГИСТРАЦИЯ";

export default ru;