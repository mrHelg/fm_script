'use strict';

const site = {
  title:'Green site',
  headers:['Header1','Test','Header3','New article'],
  showHeaders(){
    //contecst
    const self = this;
    this.headers.forEach(function(header, index){
      console.log(self.title)
      console.log(`${index+1}: ${header}`);
    });
  }
};

site.showHeaders();
