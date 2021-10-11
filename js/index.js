'use strict';

function logItem(header, index){
  console.log(this.title);
  console.log(`${index+1}: ${header}`);
}

const site = {
  title:'Green site',
  headers:['Header1','Test','Header3','New article'],
  showHeaders(){
    //contecst
    this.headers.forEach(logItem.bind(this));
  }
};

site.showHeaders();
