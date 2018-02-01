jQuery(document).ready(function ($) {
    function appendInterface() {
        console.log('Контакты');
        $("<button class='btn btn-success' id='add-my-contacts'>Контакты</button>").insertBefore("textarea[name='comment']");
    }

    function onClickContacts(event) {
        event.preventDefault();
        chrome.storage.sync.get('messageWeblancer', function (items) {
            $("textarea[name='comment']").val(items.messageWeblancer);
        });
    }

    appendInterface();
    $(document).on("click", "#add-my-contacts", onClickContacts);
});