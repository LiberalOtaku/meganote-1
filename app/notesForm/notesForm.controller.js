{
  'use strict';

  angular
    .module('meganote.notesForm')
    .controller('NotesFormController', NotesFormController);

  NotesFormController.$inject = ['$state', 'Flash', 'NotesService'];
  function NotesFormController($state, Flash, NotesService) {
    const vm = this;

    vm.note = NotesService.find($state.params.noteId);
    vm.clearForm = clearForm;
    vm.save = saveNote;
    vm.deleteNote = deleteNote;

    /////////////////////

    function clearForm() {
      vm.note = { title: '', body_html: '' };
    }

    function saveNote() {
      vm.loading = true;
      if (vm.note._id) {
        NotesService.update(vm.note)
          .then(
            res => {
              vm.note = res.data.note;
              Flash.create('success', res.data.message);
            },
            () => Flash.create('danger', 'Oops! Something went wrong.')
          )
          .finally(() => vm.loading = false);
      }
      else {
        NotesService.create(vm.note)
          .then(
            res => {
              vm.note = res.data.note;
              Flash.create('success', res.data.message);
              $state.go('notes.form', { noteId: vm.note._id });
            },
            () => Flash.create('danger', 'Oops! Something went wrong.')
          )
          .finally(() => vm.loading = false);
      }
    }

    function deleteNote() {
      vm.loading = true;
      NotesService.deleteNote(vm.note)
        .then(
          () => $state.go('notes.form', { noteId: undefined })
        )
        .finally(() => vm.loading = false);
    }
  }
}
