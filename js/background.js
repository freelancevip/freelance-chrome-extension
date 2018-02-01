jQuery(document).ready(function ($) {
    function saveMessage(message, key) {
        chrome.storage.sync.set({"messageFreelancehunt": message});
    }

    function onSaveMessage(event) {
        event.preventDefault();
        var message = $("#my-message-freelancehunt").val();
        chrome.storage.sync.set({"messageFreelancehunt": message});

        message = $("#my-message-weblancer").val();
        chrome.storage.sync.set({"messageWeblancer": message});

        var $messages = $(".messages");
        $messages.hide().show().text("Сохранено");
        setTimeout(function () {
            $messages.fadeOut(400);
        }, 3000);
    }

    function loadMessages() {
        chrome.storage.sync.get('messageFreelancehunt', function (items) {
            $("#my-message-freelancehunt").val(items.messageFreelancehunt);
        });
        chrome.storage.sync.get('messageWeblancer', function (items) {
            $("#my-message-weblancer").val(items.messageWeblancer);
        });
    }

    $(document).on("click", ".my-message-add", onSaveMessage);
    loadMessages();


    $(document).ready(function () {
        $(".tabs-menu a").click(function (event) {
            event.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            var tab = $(this).attr("href");
            $(".tab-content").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
    });
});