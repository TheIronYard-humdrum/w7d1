import $ from 'jquery'
import _ from 'lodash'

// Controllers
import { AppController } from './Controllers/app-controller'

//Models
import { ContactList } from './Models/contact-list'
import { Contact } from './Models/contact'

const newContactForm = $('.new-contact-form');
const displayedContactList = $('.contact-list');

//               List( name       description)
let contactList = new ContactList('Contacts', "All the wonderful people I know")

//            Contact(who,           where to show who,  in which list to add who to)
//            Contact(newContactForm, displayedContactList, Contacts-List)
let app = new AppController(newContactForm, displayedContactList, contactList)

app.init();