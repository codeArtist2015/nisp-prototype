var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack'}
	, { id: 2, username: 'jill', password: 'one', displayName: 'Jill'}
	, { id: 3, username: 'jill3', password: 'one', displayName: 'Jill3'}
	, { id: 4, username: 'jill4', password: 'one', displayName: 'Jill4'}
	, { id: 5, username: 'jill5', password: 'one', displayName: 'Jill5'}
	, { id: 6, username: 'jill6', password: 'one', displayName: 'Jill6'}
	, { id: 7, username: 'jill7', password: 'one', displayName: 'Jill7'}
	, { id: 8, username: 'jill8', password: 'one', displayName: 'Jill8'}
	, { id: 9, username: 'jill9', password: 'one', displayName: 'Jill9'}
	, { id: 10, username: 'jill10', password: 'one', displayName: 'Jill10'}
	, { id: 11, username: 'davida', password: '123456', displayName: 'David A'}
	, { id: 12, username: 'janeb', password: '123456', displayName: 'Jane B'}
	, { id: 13, username: 'johnc', password: '123456', displayName: 'John C'}
	, { id: 14, username: 'burtd', password: '123456', displayName: 'Burt D'}
	, { id: 15, username: 'michellee', password: '123456', displayName: 'Michelle E'}
 	, { id: 16, username: 'henryf', password: '123456', displayName: 'Henry F'}
	, { id: 17, username: 'amberg', password: '123456', displayName: 'Amber G'}
	, { id: 18, username: 'samh', password: '123456', displayName: 'Sam H'}
	, { id: 19, username: 'gracei', password: '123456', displayName: 'Grace I'}
	, { id: 20, username: 'barryg', password: '123456', displayName: 'Barry G'}
	, { id: 21, username: 'rosa', password: '123456', displayName: 'Ross A'}
	, { id: 22, username: 'mvp', password: '123456', displayName: 'ros'}
	, { id: 23, username: 'janerj', password: '123456', displayName: 'JaneRJ'}
	, { id: 24, username: 'steveb', password: '123456', displayName: 'steveb'}
	, { id: 25, username: 'jeff3', password: '123456', displayName: 'steveb'}
	, { id: 26, username: 'vincent3', password: '123456', displayName: 'steveb'}
	, { id: 27, username: 'sandyy', password: '123456', displayName: 'sandyy'}
	, { id: 28, username: 'pollyh', password: '123456', displayName: 'pollyh'}
	, { id: 29, username: 'joshh', password: '123456', displayName: 'pollyh'}
	, { id: 30, username: 'kathr', password: '123456', displayName: 'pollyh'}
	, { id: 31, username: 'sadiq', password: '123456', displayName: 'steveb'}
  , { id: 32, username: 'sadiq2', password: '123456', displayName: 'steveb'}
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
