import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  
  
  isNavbarDark: boolean = false;

  formData = {
    name: '',
    email: '',
    subject:'',
    message:''
  };
  res:string=" "
 

  onSubmit() {
    console.log('Form submitted:', this.formData);
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
