var EventEmitter = require('../lib/event-emitter');

class newsService extends EventEmitter {
    constructor() {
        super();
        window.ps = this;

        this.news = [
            { id: 1, title: 'Pregnant Ciara \'thankful\' after escaping car crash unharmed', 
                body: 'Read more at here',
                src: 'http://images6.fanpop.com/image/photos/36900000/Ciara-pregnant-shoot-ciara-36992591-1440-900.jpg',
                src2: 'http://www.music-news.com/news/UK/104098/Pregnant-Ciara-thankful-after-escaping-car-crash-unharmed'},
            { id: 2, title: 'Billy Ray Cyrus sparks speculation Miley Cyrus is married', 
                body: 'Read more at here',
                src: 'http://4.bp.blogspot.com/-OmrtZfg-E8U/UYQqJz3VinI/AAAAAAAAGsM/W-hrU48ja-0/s1600/Cyrus-miley-cyrus-30493662-1600-1200.jpg',
                src2: 'http://www.music-news.com/news/UK/104079/Billy-Ray-Cyrus-sparks-speculation-Miley-Cyrus-is-married'},
            { id: 3, title: 'Lionel Richie and Mariah Carey cancel select dates on rescheduled tour', 
                body: 'Read more at here',   
                src: 'http://www.altitudetickets.com/media/2797/lionel-mariah-event-2017.jpg',
                src2: 'http://www.music-news.com/news/UK/104086/Lionel-Richie-and-Mariah-Carey-cancel-select-dates-on-rescheduled-tour'}
        ];
    }

}
angular.module('chat-app').service('newsService', newsService);

