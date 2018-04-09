
import { phrases } from './phrases'

const en = {}

en[phrases.L_NAME] = 'Name',
en[phrases.L_PASSWORD] = 'Password',    
en[phrases.L_EMAIL] = 'E-Mail',

en[phrases.NAME_REQ] = 'Name is required';
en[phrases.NAME_SMALL] = 'Name must be less than 10 characters';
en[phrases.NAME_LONG] = 'Name must be less than 50 characters';
en[phrases.EMAIL_REQ] = 'E-mail is required';
en[phrases.EMAIL_VALID] = 'E-mail must be valid';
en[phrases.PASS_REQ] = 'Password is required';
en[phrases.PASS_SMALL] = 'Password must be 3 or more characters';
en[phrases.PASS_LONG] = 'Password must be less than 50 characters';
en[phrases.PASS_VALID] = 'Password must be valid';

en[phrases.USR_LOGIN] = "User Login";
en[phrases.USR_REG] = "User Register";
en[phrases.USR_REC] = "Password recovery";
en[phrases.USR_BTN_LOGIN] = "LOGIN";
en[phrases.USR_BTN_REC] = "FORGOT PASSWORD";
en[phrases.USR_BTN_REG] = "REGISTER";

export default en;