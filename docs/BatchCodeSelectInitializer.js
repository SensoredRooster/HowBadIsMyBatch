class BatchCodeSelectInitializer {

    static initialize({batchCodeSelectElement, batchCodeDetailsElement}) {
        batchCodeSelectElement.select2({ minimumInputLength: 4 });
        batchCodeSelectElement.on(
            'select2:select',
            function (event) {
                const batchcode = event.params.data.id;
                new HistogramView(batchCodeDetailsElement).displayHistogramView(batchcode);
                GoogleAnalytics.click_batchcode(batchcode);
            });
        batchCodeSelectElement.select2('open');
    }
}
