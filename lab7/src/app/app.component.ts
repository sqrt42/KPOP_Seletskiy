import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  surname:string = ''
  name:string = ''
  adress: string = ''
  pass: string = ''
  passConfirm: string = ''
  spam:string = ''
  forecast:string = ''

  

  errInp1: string = ''
  errInp2: string = ''
  errInp4: string = ''
  errInp5: string = ''
  errInp6: string = ''
  errInp7: string = ''
  errInp8: string = ''

  outRes: string = ''
  
  checkAllVal():boolean{
    let eRes1: number = 0;
    let eRes2: number = 0;
    let eRes4: number = 0;
    let eRes5: number = 0;
    let eRes6: number = 0;
    let eRes7: number = 0;
    let eRes8: number = 0;

    this.errInp1 = ''
    this.errInp2 = ''
    this.errInp4 = ''
    this.errInp5 = ''
    this.errInp6 = ''
    this.errInp7 = ''
    this.errInp8 = ''

    let regexpSurname: string = '[\\А-Я].*'
    let str1: string = this.surname;
    eRes1 = str1.search(regexpSurname)
    if (this.surname == ''){
      eRes1 = -2
    }

    let regexpName: string = '[\\А-Я].*'
    let str2: string = this.name;
    eRes2 = str2.search(regexpName)
    if (this.name == ''){
      eRes2 = -3
    }

    let regexpAdress: string = '[\\a-z].*'
    let str4: string = this.adress;
    eRes4 = str4.search(regexpAdress)
    if (this.adress == ''){
      eRes4 = -5
    }

    let regexpPassword: string = '^[a-z0-9]*$'
    let str5: string = this.pass;
    eRes5 = str5.search(regexpPassword)
    if(this.pass.length != 9){
      eRes5 = -6
    }
    
    if (this.pass == ''){
      eRes5 = -7
    }

    let regexpPasswordConfirmation: string = this.pass
    let str6: string = this.passConfirm;
    eRes6 = str6.search(regexpPasswordConfirmation)
    if (this.passConfirm == ''){
      eRes6 = -8
    }

    if(this.spam == '' || this.forecast == '') {
      eRes8 = -1;
    }

    

    




    if(eRes1 ==0){
      if(eRes2 ==0){
          if(eRes4 ==0){
            if(eRes5 ==0){
              if(eRes6 ==0){
                if(eRes7 ==0){
                  if(eRes8 ==0){
                    this.outRes = 'You have an email now. Congratulations, I guess...'
                  }
                  else {
                    this.errInp8 = 'Check the damn radio buttons.'
                  }
                }
                else if(eRes7 == -9){
                  this.errInp7 = 'Wow, you just got 13 bullet wounds because you left this field empty. Was it worth it?'
                }
                else{
                  this.errInp7 ='Wow, you managed to get the rarest error.'
                }
              }
              else if(eRes6 == -8){
                this.errInp6 = 'That\'s it, I\'m done. Someone teach this guy to type'
              }
              else{
                this.errInp6 ='You can\'t remember your own password? lmao'
              }
            }
            else if(eRes5 == -6){
              this.errInp5 = 'Use 9 characters, latin letters and numbers allowed, at least one number'
            }
            else if(eRes5 == -7){
              this.errInp5 = 'You\'re starting to piss me off. One more empty field and you\'ll be in trouble, kid'
            }
            else{
              this.errInp5 ='Use 9 characters, latin letters and numbers allowed, at least one number'
            }
          }
          else if(eRes4 == -5){
            this.errInp4 = 'Really? An empty field? What did you think I\'ll do?'
          }
          else{
            this.errInp4 ='Enter your adress in latin letters, domain is on the house'
          }
      }
      else if(eRes2 == -3){
        this.errInp2 = 'Enter something!'
      }
      else {
        this.errInp2 = 'Enter your surname in cyrillic letters'
      }
    }
    else if(eRes1 == -2){
      this.errInp1 = 'Enter something'
    }
    else{
      this.errInp1 = 'Enter your name in cyrillic letters'
    }




    return true
  }

  oblivion() {
    this.name = ''
    this.surname = ''
    this.adress = ''
    this.pass = ''
    this.passConfirm = ''
    this.spam = ''
    this.forecast = '' 
  }
}
