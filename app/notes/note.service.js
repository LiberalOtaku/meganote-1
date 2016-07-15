{
  angular
    .module('meganote.notes')
    .factory('Note', Note);

  Note.$inject = ['$resource', 'DATABASE_URL'];
  function Note($resource, DATABASE_URL) {
    return $resource(`${DATABASE_URL}notes/:id`, null, {
      update: { method: 'PUT' },
    });
  }
}
