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
    let random = _.random(1,100);
    let gender = ['men', 'women'];
    gender = _.sample(gender)
    let img = `https://randomuser.me/api/portraits/${gender}/${random}.jpg`
    return `
      <li class="contact" data-id="${contact.id}">
        <div class='contact-pic'>
          <img src="${img}">
        </div>
        <div class='contact-info'>
          <p class='name'>${contact.name}</p>
          <p class='contact-phone'>${contact.phone}</p>
          <p class='address'>${contact.address}</p>
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
