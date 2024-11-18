import { Component,HostListener } from '@angular/core';
import emailjs from 'emailjs-com';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'portfolio';

 // Dynamic age calculation
 birthYear: number = 2001;
 currentYear: number = new Date().getFullYear();
 age: number = this.currentYear - this.birthYear;


  isNavbarDark: boolean = false;

  formData = {
    name: '',
    email: '',
    subject:'',
    message:''
  };

  res: string = ' ';
  
  
  // EmailJS configuration
  private emailServiceId: string = 'service_vheg6t2'; 
  private emailTemplateId: string = 'template_2lttkpn';
  private emailUserId: string = 'CpGv3pNNa_bTlM2yp';

  onSubmit() {
    if (this.formData.email && this.formData.name && this.formData.subject && this.formData.message) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailRegex.test(this.formData.email)) {
      console.log('Form submitted:', this.formData);

 // Prepare EmailJS parameters
 const templateParams = {
  from_name: this.formData.name,
  email: this.formData.email,
  subject: this.formData.subject,
  message: this.formData.message
};

  // Send email using EmailJS
  emailjs
  .send(this.emailServiceId, this.emailTemplateId, templateParams, this.emailUserId)
  .then(
    response => {
      console.log('Email sent successfully:', response.status, response.text);
      this.showSuccessModal();
      this.resetForm();
    },
    error => {
      console.error('Email failed to send:', error);
      this.showErrorModal();
    }
  );
} else {
  console.error('Invalid email address:', this.formData.email);
  this.showEmailErrorModal();  // Show email error modal
}
} 
else {
  console.log("error not msg empty");
  this.showErrorModal();
}
}

showSuccessModal() {
  const modal = new bootstrap.Modal(document.getElementById('statusSuccessModal'));
  modal.show();
}

showErrorModal() {
  const modal = new bootstrap.Modal(document.getElementById('statusErrorsModal'));
  modal.show();
}

showEmailErrorModal() {
  const modal = new bootstrap.Modal(document.getElementById('statusemailErrorsModal'));
  modal.show();
}

  resetForm() {
    this.res="reset1";
    this.formData = {
      name: '',
      email: '',
      subject:'',
      message:''
    };

    setTimeout(() => {
      this.res = '';
    }, 1000);

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= 100) {
      this.isNavbarDark = true;
    } else {
      this.isNavbarDark = false;
    }
  }
   

  public isDivVisible: boolean = false;
  toggleDivVisibility() {
    this.isDivVisible = !this.isDivVisible;
  }
  
}
