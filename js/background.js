jQuery(document).ready(function ($) {
    function saveMessage(message) {
        chrome.storage.sync.set({"messageFreelancehunt": message});
    }

    function onSaveMessage(event) {
        event.preventDefault();
        var message = $("#my-message-freelancehunt").val();
        saveMessage(message);
        var $messages = $(".messages");
        $messages.show().text("Сохранено");
        setTimeout(function () {
            $messages.fadeOut(400);
        }, 3000);
    }

    function loadMessage() {
        chrome.storage.sync.get('messageFreelancehunt', function (items) {
            $("#my-message-freelancehunt").val(items.messageFreelancehunt);
        });

    }

    $(document).on("click", "#my-message-add", onSaveMessage);
    loadMessage();


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