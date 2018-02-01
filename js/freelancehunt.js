jQuery(document).ready(function ($) {
    function appendInterface() {
        $("<p><button class='btn btn-success' id='add-my-contacts'>Контакты</button></p>").insertBefore("#comment-0");
    }

    function onClickContacts(event) {
        event.preventDefault();
        chrome.storage.sync.get('messageFreelancehunt', function (items) {
            $("#comment-0").val(items.messageFreelancehunt);
        });
    }

    window.onload = appendInterface;
    $(document).on("click", "#add-my-contacts", onClickContacts);
});