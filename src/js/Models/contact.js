import $ from 'jquery'
import _ from 'lodash'

class Contact {

  constructor(name, phone, address, id) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.id = id;
    this.img = '';
  }
}

export { Contact }