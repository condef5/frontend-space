const Singleton = function() {
  if (Singleton.singleInstance) return Singleton.singleInstance;
  Singleton.singleInstance = this;
  this.name = 'Space Comics';
  this.say = function() {
    console.log('Hi rick and morty');
  };
};
