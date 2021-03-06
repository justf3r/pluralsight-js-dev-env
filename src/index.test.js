/* eslint-disable no-unused-vars */
import { expect, should } from "chai";
import jsdom, { JSDOM } from 'jsdom';
import fs from 'fs';

describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
 it('should say hello', ()=>{
   const index = fs.readFileSync("./src/index.html", "utf-8");
   const dom =new JSDOM(index);
   const h1 = dom.window.document.getElementsByTagName("h1")[0];

   expect(h1.innerHTML).to.equal("Hello World!");
   dom.window.close();
 });
});
