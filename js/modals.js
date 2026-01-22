// Inject modal HTML into the page
document.addEventListener('DOMContentLoaded', function() {
  const modalHTML = `
    <div class="container">
      <div id="bibtexModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h3 class="modal-title">BibTeX</h3>
            </div>
            <div class="modal-body">
              <pre>BibTeX...</pre>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div id="abstractModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h3 class="modal-title">Abstract</h3>
            </div>
            <div class="modal-body" style="font-family: valkyrie_a">
              Abstract...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
});

// Modal functions
function bibtexModal(uid) {
  $("#bibtexModal .modal-body pre").html($("." + uid + " .txt-bibtex").html());
  $("#bibtexModal").modal();
  return false;
}

function abstractModal(uid) {
  $("#abstractModal .modal-body").html($("." + uid + " .txt-abstract").html());
  $("#abstractModal").modal();
  return false;
}