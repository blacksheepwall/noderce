/**
 * User: willerce
 * Date: 11/1/12
 * Time: 8:57 PM
 */

var db = require('../config.js').db;
db.bind('galleries');
exports.all = function(condition, limit, callback) {
  db.galleries.find(condition).limit(limit).sort({created: -1, _id: -1}).toArray(function(err, result) {
    callback(err, result);
  });
};
exports.insert = function(obj, callback) {
  db.galleries.insert(obj, function(err, result) {
    callback(err, result);
  });
};
exports.findByPhotoId = function(photo_id, callback) {
  db.galleries.findOne({photo_id: photo_id}, function(err, result) {
    callback(err, result);
  });
};
exports.findOne = function(id, callback) {
  db.galleries.findOne({_id: db.ObjectID.createFromHexString(id)}, function(err, result) {
    callback(err, result);
  });
};
exports.save = function(obj, callback) {
  db.galleries.save(obj, function(err, result) {
    callback(err, result);
  })
};
exports.deleteById = function(id, callback) {
  db.galleries.remove({_id: db.ObjectID.createFromHexString(id)}, function(err, result) {
    callback(err, result);
  })
};
exports.updateByPhotoId = function(photo_id, photo, callback) {
  db.galleries.update({photo_id: photo_id}, {$set: photo}, function(err, result) {
    callback(err, result);
  })
};