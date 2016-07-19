import $ from 'jquery'
import _ from 'lodash'

import { Contact } from '../Models/contact.js'

class AppController { 

  constructor (input, frontList, backList) {
    this.input = input;
    this.frontList = frontList;
    this.backList = backList;
  }

  addContact (name, phone, address) {
    let id = _.random(100, 999);
    let contact = new Contact(name, phone, address, id);
    let contactHTML = this.contactTemplate(contact);
    this.backList.contacts.push(contact);
    this.frontList.append(contactHTML);
  }

  removeContact() {
    this.frontList.on('click', '.remove-button', (event) => {
      event.preventDefault();
      let id = $(event.target.parentElement.parentElement).data('id')
      let thisContact = _.find(this.backList.contacts, {id: id});
      console.log(thisContact)
      var newContactList = _.remove(this.backList.contacts, function(contact) {
        if (contact.id !== thisContact.id ) {
          return contact
        }
      });
      this.backList.contacts = newContactList;
      $(event.target.parentElement.parentElement).remove();
    });
  }

  formSubmit() {
    this.input.on('submit', (event) => {
      event.preventDefault();
      let name = this.input.find('.name').val();
      let phone = this.input.find('.phone').val();
      let address = this.input.find('.address').val();
      this.addContact(name, phone, address);
    });
  }

  contactTemplate(contact) {
    return `
      <li class="contact" data-id="${contact.id}">
        <div class='contact-pic'>
          <img src="#">
        </div>
        <div class='contact-info'>
          <p class='name'>${contact.name}</p>
          <p class='phone'>${contact.phone}</p>
          <address>${contact.address}</address>
        </div>
        <div class='remove-button'>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </li>`
  }

  init() {
    this.formSubmit();
    this.removeContact();
  }

}

export { AppController }
