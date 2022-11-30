import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComp:AppComponent
  beforeEach(async () => {
    appComp = new AppComponent
  });
  //1
  it('Must create a class instance', () => {
    expect(appComp).toBeTruthy();
  });
  //2
  it('Check if surname is empty', () => {
    appComp.surname = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp1
    expect(errMsg).toEqual('Enter something');
  });
  //3
  it('Check if surname is correct', () => {
    appComp.surname = 'Володимир'
    appComp.checkAllVal()
    let errMsg = appComp.errInp1
    expect(errMsg).toEqual('');
  });
  //4
  it('Check if name is empty while surname is correct', () => {
    appComp.surname = 'Володимир'
    appComp.name = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp2
    expect(errMsg).toEqual('Enter something!');
  });
  //5
  it('Check if name and surname are correct', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.checkAllVal()
    let errMsg = appComp.errInp2
    expect(errMsg).toEqual('');
  });
  //6
  it('Check if adress is empty', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp4
    expect(errMsg).toEqual('Really? An empty field? What did you think I\'ll do?');
  });
  //9
  it('Check if name, surname and adress are correct', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.checkAllVal()
    let errMsg = appComp.errInp4
    expect(errMsg).toEqual('');
  });
  //10
  it('Check if password is empty', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('You\'re starting to piss me off. One more empty field and you\'ll be in trouble, kid');
  });
  //11
  it('Check if the password is long enough', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '0000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('Use 9 characters, latin letters and numbers allowed, at least one number');
  });
  //12
  it('Check if the password isn\'t too long', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '0000000000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('Use 9 characters, latin letters and numbers allowed, at least one number');
  });
  //13
  it('Check if password is correct', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('');
  });
  //14
  it('Check if password is entered second time', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('That\'s it, I\'m done. Someone teach this guy to type');
  });
  //15
  it('Check if password entered correctly second time', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000001'
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('You can\'t remember your own password? lmao');
  });
  //16
  it('Check if all fields are OK', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('');
  });
  //17
  it('Check if checkboxes are omitted', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = ''
    appComp.forecast = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Check the damn radio buttons.');
  });
  it('Check if forecast checkbox is omitted', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamYes'
    appComp.forecast = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Check the damn radio buttons.');
  });
  it('Check if forecast checkbox is omitted', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamNo'
    appComp.forecast = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Check the damn radio buttons.');
  });
  it('Check if spam checkbox is omitted', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = ''
    appComp.forecast = 'yes'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Check the damn radio buttons.');
  });
  it('Check if spam checkbox is omitted', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = ''
    appComp.forecast = 'no'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Check the damn radio buttons.');
  });
  it('Check if checkboxes are checked', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamYes'
    appComp.forecast = 'yes'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('');
  });
  it('Check if checkboxes are checked', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamNo'
    appComp.forecast = 'no'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('');
  });
  it('Check if checkboxes are checked', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamYes'
    appComp.forecast = 'no'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('');
  });
  it('Check if checkboxes are checked', () => {
    appComp.surname = 'Володимир'
    appComp.name = 'Зеленський'
    appComp.adress = 'valchannel666'
    appComp.pass = '000000000'
    appComp.passConfirm = '000000000'
    appComp.spam = 'spamNo'
    appComp.forecast = 'yes'
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('');
  });
  
});
