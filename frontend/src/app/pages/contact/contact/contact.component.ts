import { Component, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';

import { NgForm } from '@angular/forms';interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  formSubmitted = false;
  
  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adresse',
      value: 'Paris, France'
    },
    {
      icon: 'fas fa-globe',
      title: 'Site Web',
      value: 'www.monportfolio.com',
      link: 'https://www.monportfolio.com'
    }
  ];


 submitForm() {
  if (this.contactForm.valid) {
    console.log(this.contactForm.value)
    emailjs.send(
      'service_7xetga7',      // remplace par ton vrai service ID
      'template_cu6en4z',     // remplace par ton vrai template ID
      {
        name: this.formData.name,
        email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message
      },
      'qcXSWIcEVd9v5opvU'       // remplace par ta vraie clé publique EmailJS
    ).then(() => {
      console.log('Email envoyé avec succès');
      this.formSubmitted = true;
      this.contactForm.resetForm();
    }).catch((error) => {
      console.error('Erreur lors de l’envoi de l’email :', error);
    });  
  }
}


  
  resetForm() {
    this.formSubmitted = false;
    this.contactForm.resetForm();
  }
}