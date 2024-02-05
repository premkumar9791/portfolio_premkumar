import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  module.exports = {
    plugins: {
      'cssnano': {},
    },
  };
  module.exports = {
    plugins: {
      'autoprefixer': {},
    },
  };

  const compression = require('compression');
const express = require('express');

const app = express();
app.use(compression());

  const purify = require('purify-css');
  const fs = require('fs');
  
  // Array of HTML/JS files that your CSS is used in
  const content = ['./src/app/app.component.html', './src/app/app.component.spec.ts'];
  
  // Your CSS file content
  const css = fs.readFileSync('./src/app/app.component.css', 'utf-8');
  
  // Purify the CSS
  const purifiedCSS = purify(content, css);
  
  // Now you can use purifiedCSS or save it to a file
  fs.writeFileSync('./src/app/app.component.css', purifiedCSS, 'utf-8');
  console.log('Purified CSS saved to style-purified.css');

  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio app is running!');
  });
});
