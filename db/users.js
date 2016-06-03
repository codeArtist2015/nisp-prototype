var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
    , { id: 2, username: 'jill', password: 'one', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
    , { id: 3, username: 'jill3', password: 'one', displayName: 'Jill3', emails: [ { value: 'jill@example.com' } ] }
    , { id: 4, username: 'jill4', password: 'one', displayName: 'Jill4', emails: [ { value: 'jill@example.com' } ] }
    , { id: 5, username: 'jill5', password: 'one', displayName: 'Jill5', emails: [ { value: 'jill@example.com' } ] }
    , { id: 6, username: 'jill6', password: 'one', displayName: 'Jill6', emails: [ { value: 'jill@example.com' } ] }
    , { id: 7, username: 'jill7', password: 'one', displayName: 'Jill7', emails: [ { value: 'jill@example.com' } ] }
    , { id: 8, username: 'jill8', password: 'one', displayName: 'Jill8', emails: [ { value: 'jill@example.com' } ] }
    , { id: 9, username: 'jill9', password: 'one', displayName: 'Jill9', emails: [ { value: 'jill@example.com' } ] }
    , { id: 10, username: 'jill10', password: 'one', displayName: 'Jill10', emails: [ { value: 'jill@example.com' } ] }
	, { id: 11, username: 'davida', password: '123456', displayName: 'David A', emails: [ { value: 'jill@example.com' } ] }
	, { id: 12, username: 'janeb', password: '123456', displayName: 'Jane B', emails: [ { value: 'jill@example.com' } ] }
	, { id: 13, username: 'johnc', password: '123456', displayName: 'John C', emails: [ { value: 'jill@example.com' } ] }
	, { id: 14, username: 'burtd', password: '123456', displayName: 'Burt D', emails: [ { value: 'jill@example.com' } ] }
	, { id: 15, username: 'michellee', password: '123456', displayName: 'Michelle E', emails: [ { value: 'jill@example.com' } ] }
  , { id: 16, username: 'henryf', password: '123456', displayName: 'Henry F', emails: [ { value: 'jill@example.com' } ] }
  , { id: 17, username: 'amberg', password: '123456', displayName: 'Amber G', emails: [ { value: 'jill@example.com' } ] }
  , { id: 18, username: 'samh', password: '123456', displayName: 'Sam H', emails: [ { value: 'jill@example.com' } ] }
  , { id: 19, username: 'gracei', password: '123456', displayName: 'Grace I', emails: [ { value: 'jill@example.com' } ] }
  , { id: 20, username: 'barryg', password: '123456', displayName: 'Barry G', emails: [ { value: 'jill@example.com' } ] }
  , { id: 21, username: 'rosa', password: '123456', displayName: 'Ross A', emails: [ { value: 'jill@example.com' } ] }
  , { id: 22, username: 'mvp', password: '123456', displayName: 'ros'} 
  , { id: 23, username: 'janerj', password: '123456', displayName: 'JaneRJ'}
  , { id: 24, username: 'steveb', password: '123456', displayName: 'steveb'}
  ]

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
