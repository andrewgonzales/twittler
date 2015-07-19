each = function(collection, iterator) {
    if(Array.isArray(collection)){
      for(var i = 0; i<collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }else{
      for(var key in collection){
        iterator(collection[key], key, collection);
      }
    }
  };

 filter = function(collection, test) {
    var passed = [];
    each(collection, function(item){
      if(test(item)){
        passed.push(item);
      }
    });
    return passed;
  };

map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var mapped = [];
    each(collection, function(item){
      mapped.push(iterator(item));
    });
    return mapped;
  };

pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return map(collection, function(item){
      return item[key];
    });
  };
  var getUserTweets = function(username){
    return tweetData = filter(streams.home, function(tweet){return tweet.user===username;});
  }
